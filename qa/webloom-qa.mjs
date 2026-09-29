import { chromium } from 'playwright';
import fs from 'node:fs';
import { fileURLToPath } from 'node:url';

const BASE = process.argv[2] || 'http://localhost:4173';
const WIDTHS = (process.env.WIDTHS || '320,375,390,430,768,1440').split(',').map(Number);
const ROUTES = process.env.ROUTES ? process.env.ROUTES.split(',') : ['/', '/glossary', '/glossary#css', '/inspiration', '/info', '/imprint'];
const OUT = new URL('./webloom-shots/', import.meta.url);
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const results = [];

for (const width of WIDTHS) {
  for (const route of ROUTES) {
    const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
    const page = await context.newPage();
    const pageErrors = [];
    const consoleErrors = [];
    const failedRequests = [];
    const remoteHosts = new Set();
    page.on('pageerror', error => pageErrors.push(error.message));
    page.on('console', message => { if (message.type() === 'error') consoleErrors.push(message.text()); });
    page.on('requestfailed', request => failedRequests.push(`${request.method()} ${request.url()} ${request.failure()?.errorText || ''}`));
    page.on('request', request => {
      const url = new URL(request.url());
      if (url.origin !== new URL(BASE).origin && !['data:', 'blob:'].includes(url.protocol)) remoteHosts.add(url.host);
    });

    const response = await page.goto(BASE + route, { waitUntil: 'load' });
    await page.waitForTimeout(route === '/inspiration' ? 1500 : 2500);
    if (route === '/inspiration') {
      for (let i = 0; i < 10; i += 1) {
        await page.evaluate(() => window.scrollTo(0, document.documentElement.scrollHeight));
        await page.waitForTimeout(700);
      }
    }
    await page.evaluate(async () => { await document.fonts.ready; });
    const state = await page.evaluate(() => ({
      title: document.title,
      description: document.querySelector('meta[name="description"]')?.content || '',
      ogTitle: document.querySelector('meta[property="og:title"]')?.content || '',
      ogImage: document.querySelector('meta[property="og:image"]')?.content || '',
      twitterCard: document.querySelector('meta[name="twitter:card"]')?.content || '',
      bodyWidth: document.body.scrollWidth,
      rootWidth: document.documentElement.scrollWidth,
      viewportWidth: document.documentElement.clientWidth,
      overflowElements: [...document.querySelectorAll('body *')].map(element => {
        const rect = element.getBoundingClientRect();
        return { tag: element.tagName, className: String(element.className || '').slice(0, 120), left: Math.round(rect.left), right: Math.round(rect.right), width: Math.round(rect.width) };
      }).filter(item => item.left < -1 || item.right > document.documentElement.clientWidth + 1).slice(0, 12),
      brandCss: [...document.styleSheets].some(sheet => sheet.href?.endsWith('/brand.css')),
      debugStyles: (() => {
        const grid = document.querySelector('.block-container');
        const tab = document.querySelector('.link-box-2');
        return {
          grid: grid ? { width: getComputedStyle(grid).width, padding: getComputedStyle(grid).padding, columns: getComputedStyle(grid).gridTemplateColumns, justify: getComputedStyle(grid).justifyContent } : null,
          tab: tab ? { marginLeft: getComputedStyle(tab).marginLeft, padding: getComputedStyle(tab).padding, boxSizing: getComputedStyle(tab).boxSizing } : null,
        };
      })(),
      text: document.body.innerText.slice(0, 1200),
      inspirationCards: document.querySelectorAll('.block.svelte-87yzwv').length,
      glossaryLinks: document.querySelectorAll('a[href*="/glossary#"], a[href^="#"]').length,
      heroTable: Boolean(document.querySelector('.logo-anim-container table')),
      book: Boolean(document.querySelector('.book-container')),
    }));

    const defects = [];
    if (!response?.ok()) defects.push(`HTTP ${response?.status()}`);
    if (state.title !== 'Webloom — A field guide to web craft') defects.push('wrong title');
    if (!state.description.toLowerCase().includes('webloom')) defects.push('missing description');
    if (!state.ogTitle.toLowerCase().includes('webloom')) defects.push('missing og:title');
    if (state.ogImage !== '/share_image.png') defects.push('wrong og:image');
    if (state.twitterCard !== 'summary_large_image') defects.push('missing twitter card');
    if (!state.brandCss) defects.push('brand stylesheet not loaded');
    if (state.rootWidth > state.viewportWidth + 1 || state.bodyWidth > state.viewportWidth + 1) {
      defects.push(`horizontal overflow root=${state.rootWidth} body=${state.bodyWidth} viewport=${state.viewportWidth}`);
    }
    if (route === '/' && (!state.text.includes('Webloom') || !state.heroTable)) defects.push('home identity or ASCII hero missing');
    if (route === '/glossary' && state.glossaryLinks < 50) defects.push(`glossary incomplete (${state.glossaryLinks} links)`);
    if (route === '/glossary#css' && !state.text.toLowerCase().includes('css')) defects.push('CSS entry missing');
    if (route === '/inspiration' && state.inspirationCards < 80) defects.push(`inspiration grid incomplete (${state.inspirationCards} cards)`);
    if (route === '/info' && (!state.text.includes('Webloom') || !state.book)) defects.push('info identity or book missing');
    if (route === '/imprint' && !state.text.includes('Publication status: preview build')) defects.push('preview notice missing');
    if (remoteHosts.size) defects.push(`remote requests: ${[...remoteHosts].join(', ')}`);
    if (failedRequests.length) defects.push(`failed requests: ${failedRequests.join(' | ')}`);
    if (pageErrors.length) defects.push(`page errors: ${pageErrors.join(' | ')}`);
    if (consoleErrors.length) defects.push(`console errors: ${consoleErrors.join(' | ')}`);

    if ([320, 390, 1440].includes(width)) {
      const tag = route.replace(/[\/#]/g, '_') || 'home';
      await page.screenshot({ path: fileURLToPath(new URL(`${tag}-${width}.png`, OUT)), fullPage: true, animations: 'disabled' });
    }

    const result = { route, width, ...state, pageErrors, consoleErrors, failedRequests, remoteHosts: [...remoteHosts], defects };
    results.push(result);
    console.log(JSON.stringify({ route, width, defects }));
    await context.close();
  }
}

await browser.close();
fs.writeFileSync(new URL('./webloom-results.json', import.meta.url), JSON.stringify(results, null, 2));
const failed = results.filter(result => result.defects.length);
console.log(JSON.stringify({ scenarios: results.length, failed: failed.length }));
process.exitCode = failed.length ? 1 : 0;
