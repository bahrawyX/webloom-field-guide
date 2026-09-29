import { chromium } from 'playwright';

const BASE = process.argv[2] || 'http://localhost:4173';
const browser = await chromium.launch();
const results = [];

async function test(name, contextOptions, run) {
  const context = await browser.newContext(contextOptions);
  const page = await context.newPage();
  const errors = [];
  const failedRequests = [];
  page.on('pageerror', error => errors.push(error.message));
  page.on('console', message => {
    if (message.type() === 'error') errors.push(message.text());
  });
  page.on('requestfailed', request => failedRequests.push(`${request.url()} ${request.failure()?.errorText || ''}`));

  let details = {};
  try {
    details = await run(page);
  } catch (error) {
    errors.push(error.stack || error.message);
  }

  const defects = [...errors, ...failedRequests];
  if (details.assertions) defects.push(...details.assertions.filter(Boolean));
  results.push({ name, details, defects });
  console.log(JSON.stringify({ name, defects, details }));
  await context.close();
}

await test('desktop-lenis-and-scrolltrigger', { viewport: { width: 1440, height: 900 } }, async page => {
  await page.goto(BASE + '/', { waitUntil: 'load' });
  await page.waitForTimeout(900);
  const initial = await page.evaluate(() => ({
    gsap: Boolean(window.gsap),
    scrollTrigger: Boolean(window.ScrollTrigger),
    lenis: Boolean(window.webloomLenis),
    motion: Boolean(window.__webloomMotion),
    htmlLenis: document.documentElement.classList.contains('lenis'),
    progress: Boolean(document.querySelector('.webloom-scroll-thread')),
    triggers: window.ScrollTrigger?.getAll().length || 0,
    marked: document.querySelectorAll('[data-webloom-motion]').length
  }));

  const max = await page.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  await page.evaluate(() => window.webloomLenis.scrollTo('bottom', { duration: 0.65 }));
  await page.waitForTimeout(180);
  const during = await page.evaluate(() => scrollY);
  await page.waitForTimeout(800);
  const after = await page.evaluate(() => ({
    scrollY,
    progressTransform: getComputedStyle(document.querySelector('.webloom-scroll-thread')).transform
  }));

  await page.evaluate(() => window.webloomLenis.scrollTo(0, { immediate: true }));
  await page.locator('a[href="/inspiration"]').last().click();
  await page.waitForTimeout(1000);
  const routed = await page.evaluate(() => ({
    path: location.pathname,
    lenis: Boolean(window.webloomLenis),
    triggers: window.ScrollTrigger.getAll().length,
    blocks: document.querySelectorAll('.block.svelte-87yzwv').length,
    markedBlocks: document.querySelectorAll('.block.svelte-87yzwv[data-webloom-motion]').length
  }));

  return {
    initial, max, during, after, routed,
    assertions: [
      !initial.gsap && 'GSAP unavailable',
      !initial.scrollTrigger && 'ScrollTrigger unavailable',
      !initial.lenis && 'Lenis instance unavailable',
      !initial.motion && 'motion controller unavailable',
      !initial.htmlLenis && 'Lenis root class missing',
      !initial.progress && 'scroll progress thread missing',
      initial.triggers < 2 && 'expected multiple ScrollTriggers',
      initial.marked < 1 && 'no reveal targets were registered',
      !(during > 0 && during < max) && 'Lenis did not interpolate scroll position',
      after.scrollY < max * 0.9 && 'Lenis did not reach the page end',
      after.progressTransform === 'none' && 'progress thread did not animate',
      routed.path !== '/inspiration' && 'SPA route navigation failed',
      !routed.lenis && 'Lenis was lost after route navigation',
      routed.triggers < 2 && 'ScrollTriggers were not rebuilt after route navigation',
      routed.blocks < 1 && 'inspiration blocks did not load',
      routed.markedBlocks < 1 && 'inspiration reveals were not registered'
    ]
  };
});

await test('mobile-native-touch-and-layout', { viewport: { width: 390, height: 844 }, hasTouch: true, isMobile: true }, async page => {
  await page.goto(BASE + '/', { waitUntil: 'load' });
  await page.waitForTimeout(900);
  const state = await page.evaluate(() => ({
    lenis: Boolean(window.webloomLenis),
    syncTouch: window.webloomLenis?.options.syncTouch,
    triggers: window.ScrollTrigger?.getAll().length || 0,
    parallaxTargets: document.querySelectorAll('[data-webloom-parallax]').length,
    overflow: document.documentElement.scrollWidth - innerWidth,
    progress: Boolean(document.querySelector('.webloom-scroll-thread'))
  }));
  return {
    state,
    assertions: [
      !state.lenis && 'Lenis unavailable on mobile',
      state.syncTouch !== false && 'touch smoothing should remain native',
      state.triggers < 2 && 'mobile ScrollTriggers missing',
      state.parallaxTargets !== 0 && 'desktop parallax should be disabled on mobile',
      state.overflow > 1 && `mobile horizontal overflow: ${state.overflow}px`,
      !state.progress && 'mobile progress thread missing'
    ]
  };
});

await test('reduced-motion-fallback', { viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' }, async page => {
  await page.goto(BASE + '/', { waitUntil: 'load' });
  await page.waitForTimeout(700);
  const state = await page.evaluate(() => ({
    reduced: document.documentElement.getAttribute('data-webloom-motion-mode'),
    lenis: Boolean(window.webloomLenis),
    triggers: window.ScrollTrigger?.getAll().length || 0,
    progressDisplay: getComputedStyle(document.querySelector('.webloom-scroll-thread')).display,
    hiddenTargets: [...document.querySelectorAll('.manifest, .headline, .carousel-element')].filter(element => getComputedStyle(element).visibility === 'hidden' || Number(getComputedStyle(element).opacity) === 0).length
  }));
  return {
    state,
    assertions: [
      state.reduced !== 'reduced' && 'reduced-motion mode was not detected',
      state.lenis && 'Lenis should be disabled for reduced motion',
      state.triggers !== 0 && 'ScrollTriggers should be disabled for reduced motion',
      state.progressDisplay !== 'none' && 'progress animation should be hidden for reduced motion',
      state.hiddenTargets !== 0 && 'content was hidden in reduced-motion mode'
    ]
  };
});

await browser.close();
const failed = results.filter(result => result.defects.length);
console.log(JSON.stringify({ scenarios: results.length, failed: failed.length }));
process.exitCode = failed.length ? 1 : 0;
