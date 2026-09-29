import { chromium } from 'playwright';
import fs from 'node:fs';

const BASE = process.argv[2] || 'http://localhost:4173';
const browser = await chromium.launch();
const results = [];

async function scenario(name, viewport, run, mobile = false) {
  const context = await browser.newContext({ viewport, hasTouch: mobile, isMobile: mobile });
  const page = await context.newPage();
  const errors = [];
  const failed = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('requestfailed', request => failed.push(`${request.method()} ${request.url()} ${request.failure()?.errorText || ''}`));
  let details = {};
  try {
    details = await run(page);
  } catch (error) {
    errors.push(error.stack || error.message);
  }
  const defects = [...errors.map(error => `page: ${error}`), ...failed.map(error => `request: ${error}`)];
  if (details.assertions) defects.push(...details.assertions.filter(Boolean));
  const result = { name, viewport, details, defects };
  results.push(result);
  console.log(JSON.stringify({ name, defects }));
  await context.close();
}

await scenario('mobile-navigation-and-filter', { width: 320, height: 800 }, async page => {
  await page.goto(`${BASE}/glossary`, { waitUntil: 'load' });
  await page.waitForTimeout(2200);
  await page.locator('.filter-text').click();
  const cssFilter = page.locator('.entry-tags.show').getByText('css', { exact: true });
  await cssFilter.click();
  await page.waitForTimeout(500);
  const visibleTitles = await page.locator('a[href^="/glossary#"]').count();
  const inspirationTab = page.locator('a[href="/inspiration"]').last();
  await inspirationTab.click();
  await page.waitForURL('**/inspiration');
  return { visibleTitles, assertions: [visibleTitles < 5 ? `filter returned only ${visibleTitles} visible titles` : ''] };
}, true);

await scenario('search-at-tablet-breakpoint', { width: 768, height: 900 }, async page => {
  await page.goto(`${BASE}/glossary`, { waitUntil: 'load' });
  await page.waitForTimeout(2200);
  const input = page.locator('.search input').first();
  await input.pressSequentially('font', { delay: 40 });
  await page.waitForTimeout(700);
  const resultsCount = await page.locator('.search-results .result').count();
  const box = await input.boundingBox();
  return { resultsCount, inputBox: box, assertions: [resultsCount < 1 ? 'search returned no results' : '', !box || box.x + box.width > 768 ? 'search field exceeds tablet viewport' : ''] };
});

await scenario('hero-drag-and-3d-model', { width: 390, height: 844 }, async page => {
  await page.goto(BASE, { waitUntil: 'load' });
  await page.waitForTimeout(2500);
  const hero = page.locator('.logo-anim-container');
  const box = await hero.boundingBox();
  if (!box) return { assertions: ['hero missing'] };
  await page.mouse.move(box.x + box.width / 2, box.y + box.height / 2);
  await page.mouse.down();
  const downCursor = await hero.locator('table').evaluate(element => getComputedStyle(element).cursor);
  await page.mouse.move(box.x + box.width * 0.7, box.y + box.height * 0.55, { steps: 5 });
  await page.mouse.up();
  const upCursor = await hero.locator('table').evaluate(element => getComputedStyle(element).cursor);
  const asciiLength = (await hero.innerText()).replace(/\s/g, '').length;
  return { downCursor, upCursor, asciiLength, assertions: [downCursor !== 'grabbing' ? `drag cursor was ${downCursor}` : '', upCursor !== 'grab' ? `release cursor was ${upCursor}` : '', asciiLength < 100 ? 'ASCII model did not render' : ''] };
}, true);

await scenario('glossary-entry-assets-and-code', { width: 390, height: 844 }, async page => {
  const slugs = ['skeuomorphism', 'flat-design', 'neomorphism', 'rhizome', 'font-smoothing', 'flexbox', 'favicon', 'title', 'margin', 'padding', 'html', 'button'];
  const checks = [];
  for (const slug of slugs) {
    await page.goto(`${BASE}/glossary#${slug}`, { waitUntil: 'load' });
    await page.waitForTimeout(1500);
    checks.push({
      slug,
      images: await page.locator('img[src^="/media/"]').count(),
      codeBlocks: await page.locator('pre[class*="language-"]').count(),
      heading: (await page.locator('h1').first().innerText().catch(() => '')).trim(),
    });
  }
  const missing = checks.filter(check => !check.heading || check.images < 1);
  return { checks, assertions: [missing.length ? `entry asset checks failed: ${missing.map(item => item.slug).join(', ')}` : ''] };
}, true);

await scenario('inspiration-infinite-load', { width: 390, height: 844 }, async page => {
  await page.goto(`${BASE}/inspiration`, { waitUntil: 'load' });
  for (let i = 0; i < 10; i += 1) {
    await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
    await page.waitForTimeout(700);
  }
  const cards = await page.locator('.block.svelte-87yzwv').count();
  const emptySources = await page.locator('.block .meta-info a[href=""], .block .meta-info a:not([href])').count();
  return { cards, emptySources, assertions: [cards !== 86 ? `expected 86 cards including contribution card, received ${cards}` : '', emptySources ? `${emptySources} cards lack source links` : ''] };
}, true);

await scenario('book-animation-and-branding', { width: 390, height: 844 }, async page => {
  await page.goto(`${BASE}/info`, { waitUntil: 'load' });
  await page.waitForTimeout(500);
  const book = page.locator('.book-container');
  const before = await book.evaluate(element => getComputedStyle(element).transform);
  await page.waitForTimeout(800);
  const after = await book.evaluate(element => getComputedStyle(element).transform);
  const front = await page.locator('.book-front').evaluate(element => getComputedStyle(element).backgroundImage);
  return { before, after, front, assertions: [before === after ? 'book animation did not advance' : '', !front.includes('book-cover') ? 'Webloom book cover is not applied' : ''] };
}, true);

await browser.close();
fs.writeFileSync(new URL('./webloom-interaction-results.json', import.meta.url), JSON.stringify(results, null, 2));
const failures = results.filter(result => result.defects.length);
console.log(JSON.stringify({ scenarios: results.length, failed: failures.length }));
process.exitCode = failures.length ? 1 : 0;
