// Interaction diff: glossary entry detail, search, tag filter, home hover.
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'node:fs';

const ORIG = 'https://softglossary.space';
const CLONE = process.argv[2] || 'http://localhost:4173';
const OUT = new URL('./shots/', import.meta.url);
const browser = await chromium.launch();

const SCENARIOS = {
  // every entry that renders an image/embedded asset gets checked via the list below
  entry: (term) => async (page) => {
    await page.goto(page.__base + '/glossary', { waitUntil: 'load' });
    await page.waitForTimeout(3000);
    await page.locator(`a[href$="#${term}"]`).first().click();
    await page.waitForTimeout(3500);
  },
  search: async (page) => {
    await page.goto(page.__base + '/glossary', { waitUntil: 'load' });
    await page.waitForTimeout(3000);
    await page.locator('input').first().fill('font');
    await page.waitForTimeout(2500);
  },
  filter: async (page) => {
    await page.goto(page.__base + '/glossary', { waitUntil: 'load' });
    await page.waitForTimeout(3000);
    await page.getByText('CSS', { exact: true }).first().click();
    await page.waitForTimeout(1500);
  },
};

const terms = (process.env.TERMS || 'css,grid,html,cursor,hyperlink,brutalism,favicon,terminal,webdesign,digital-garden').split(',');
const jobs = [...terms.map(t => ['entry-' + t, SCENARIOS.entry(t)]), ['search', SCENARIOS.search], ['filter', SCENARIOS.filter]];

async function run(base, fn) {
  const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
  const page = await ctx.newPage();
  page.__base = base;
  const errors = [];
  page.on('pageerror', e => errors.push(e.message.slice(0, 80)));
  await fn(page);
  await page.addStyleTag({ content: '*{caret-color:transparent!important}' });
  const buf = await page.screenshot({ animations: 'disabled' });
  await ctx.close();
  return { buf, errors };
}

const PAR = 4;
const queue = [...jobs];
await Promise.all(Array.from({ length: PAR }, async () => { while (queue.length) { const [name, fn] = queue.shift();
  const [a, b] = await Promise.all([run(ORIG, fn), run(CLONE, fn)]);
  const A = PNG.sync.read(a.buf), B = PNG.sync.read(b.buf), D = new PNG({ width: A.width, height: A.height });
  const d = pixelmatch(A.data, B.data, D.data, A.width, A.height, { threshold: 0.2 });
  fs.writeFileSync(new URL(`i-${name}-orig.png`, OUT), a.buf);
  fs.writeFileSync(new URL(`i-${name}-clone.png`, OUT), b.buf);
  fs.writeFileSync(new URL(`i-${name}-diff.png`, OUT), PNG.sync.write(D));
  console.log(JSON.stringify({ name, diffPct: +(100 * d / (A.width * A.height)).toFixed(3), origErrors: a.errors, cloneErrors: b.errors }));
}}));
await browser.close();
