// Writes site/public/data/media-manifest.json: every local image, and which
// Are.na block / Contentful asset / static file uses it. Input for photo swaps.
import fs from 'node:fs';
import path from 'node:path';
const PUB = path.resolve(process.argv[2] || 'site/public');
const rd = (p) => JSON.parse(fs.readFileSync(path.join(PUB, p), 'utf8'));
const out = { arena: [], contentful: [], static: [] };

for (const f of fs.readdirSync(path.join(PUB, 'data/arena/webloom-inspiration'))) {
  if (!f.startsWith('contents-')) continue;
  for (const b of rd('data/arena/webloom-inspiration/' + f).contents || []) {
    if (out.arena.some(x => x.id === b.id) || !b.image) continue;
    out.arena.push({ id: b.id, position: b.position, title: b.title, link: b.source?.url ?? null,
      shown: b.image.display.url, sizes: Object.fromEntries(['thumb', 'square', 'display', 'large', 'original'].map(k => [k, b.image[k]?.url])) });
  }
}
out.arena.sort((a, b) => b.position - a.position);
for (const f of fs.readdirSync(path.join(PUB, 'data/contentful/assets'))) {
  const a = rd('data/contentful/assets/' + f);
  const file = a.fields?.file;
  if (file) out.contentful.push({ id: a.sys.id, title: a.fields.title, url: file.url, contentType: file.contentType, size: file.details?.image });
}
const walk = (d) => fs.readdirSync(d, { withFileTypes: true }).flatMap(e => e.isDirectory() ? (['media', 'data', 'fonts'].includes(e.name) ? [] : walk(path.join(d, e.name))) : [path.join(d, e.name)]);
out.static = walk(PUB).filter(f => /\.(png|jpe?g|svg|webp|gif)$/i.test(f)).map(f => '/' + path.relative(PUB, f).split(path.sep).join('/'));
fs.writeFileSync(path.join(PUB, 'data/media-manifest.json'), JSON.stringify(out, null, 2));
console.log('arena', out.arena.length, 'contentful', out.contentful.length, 'static', out.static.length);
