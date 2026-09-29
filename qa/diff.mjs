// Pixel-diff original vs clone across routes × viewports.
// Usage: node diff.mjs [cloneBase]   (clone server must be running)
import { chromium } from 'playwright';
import pixelmatch from 'pixelmatch';
import { PNG } from 'pngjs';
import fs from 'node:fs';

const ORIG = 'https://softglossary.space';
const CLONE = process.argv[2] || 'http://localhost:4173';
const ROUTES = process.env.ROUTES ? process.env.ROUTES.split(',') : ['/', '/glossary', '/glossary#css', '/inspiration', '/info', '/imprint'];
const WIDTHS = process.env.WIDTHS ? process.env.WIDTHS.split(',').map(Number) : [1440, 768, 390];
const MASKS = ['.logo-anim-container']; // three.js AsciiEffect hero: animated, verified separately
const OUT = new URL('./shots/', import.meta.url);
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();
const results = [];

async function shoot(base, route, width, tag) {
  const ctx = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const remote = new Set();
  page.on('request', r => { const u = new URL(r.url()); if (!r.url().startsWith(base) && !u.protocol.startsWith('data')) remote.add(u.host); });
  await page.goto(base + route, { waitUntil: 'load' });
  // wait for data-driven content (inspiration waits on Are.na, glossary on Contentful)
  await page.waitForTimeout(route.startsWith('/inspiration') ? 9000 : 4000);
  await page.evaluate(async () => { await document.fonts.ready; });
  // Freeze the ASCII hero so layout is stable, and hide the text caret
  await page.addStyleTag({ content: '*{caret-color:transparent!important}' });
  const height = await page.evaluate(() => document.documentElement.scrollHeight);
  const buf = await page.screenshot({
    fullPage: true,
    animations: 'disabled',
    mask: MASKS.map(s => page.locator(s)),
    maskColor: '#ff00ff',
  });
  const name = `${route.replace(/[/#]/g, '_') || 'home'}-${width}-${tag}.png`;
  fs.writeFileSync(new URL(name, OUT), buf);
  await ctx.close();
  return { png: PNG.sync.read(buf), height, remote: [...remote] };
}

for (const route of ROUTES) {
  for (const width of WIDTHS) {
    const [a, b] = await Promise.all([shoot(ORIG, route, width, 'orig'), shoot(CLONE, route, width, 'clone')]);
    const w = Math.min(a.png.width, b.png.width), h = Math.min(a.png.height, b.png.height);
    const crop = (p) => { const o = new PNG({ width: w, height: h }); PNG.bitblt(p, o, 0, 0, w, h, 0, 0); return o; };
    const A = crop(a.png), B = crop(b.png), D = new PNG({ width: w, height: h });
    const diff = pixelmatch(A.data, B.data, D.data, w, h, { threshold: 0.2 });
    const name = `${route.replace(/[/#]/g, '_')}-${width}-diff.png`;
    fs.writeFileSync(new URL(name, OUT), PNG.sync.write(D));
    const r = { route, width, heightOrig: a.height, heightClone: b.height, diffPct: +(100 * diff / (w * h)).toFixed(3), cloneRemoteHosts: b.remote };
    results.push(r);
    console.log(JSON.stringify(r));
  }
}
await browser.close();
fs.writeFileSync(new URL('./results.json', import.meta.url), JSON.stringify(results, null, 2));
