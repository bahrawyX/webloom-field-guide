// Optional maintenance utility for rebuilding a Webloom-compatible local snapshot.
// (Contentful CDA + GraphQL, Are.na channel) into site/public/data, downloads every
// referenced image into site/public/media, and rewrites URLs to local paths.
// Usage: node tools/snapshot.mjs [siteDir]
import fs from 'node:fs/promises';
import path from 'node:path';
import crypto from 'node:crypto';

const SITE = path.resolve(process.argv[2] || new URL('../site/public', import.meta.url).pathname.replace(/^\/(\w:)/, '$1'));
const DATA = path.join(SITE, 'data');
const MEDIA = path.join(SITE, 'media');
const TOKEN = process.env.WEBLOOM_CONTENTFUL_TOKEN;
const SPACE = process.env.WEBLOOM_CONTENTFUL_SPACE;
if (!TOKEN || !SPACE) {
  throw new Error('Snapshot refresh is disabled unless WEBLOOM_CONTENTFUL_TOKEN and WEBLOOM_CONTENTFUL_SPACE are explicitly supplied.');
}
const CDA = `https://cdn.contentful.com/spaces/${SPACE}`;
const ARENA = 'https://api.are.na/v2';
const PER = 15; // matches `ra` in the bundle

const write = async (rel, obj) => {
  const f = path.join(DATA, rel);
  await fs.mkdir(path.dirname(f), { recursive: true });
  await fs.writeFile(f, JSON.stringify(obj, null, 2));
};
const getJSON = async (url, opts) => {
  for (let i = 0; i < 4; i++) {
    const r = await fetch(url, opts);
    if (r.ok) return r.json();
    if (r.status === 429) { await new Promise(res => setTimeout(res, 2000 * (i + 1))); continue; }
    throw new Error(`${r.status} ${url}`);
  }
  throw new Error(`retries exhausted ${url}`);
};

// ---------- media download + URL rewrite ----------
const mediaMap = new Map();
const named = new Map(); // remote url -> preferred local basename, no extension (Are.na blocks)
function nameArenaImages(blocks) {
  for (const b of blocks) {
    if (!b.image) continue;
    for (const k of ['thumb', 'square', 'display', 'large', 'original']) {
      const url = b.image[k]?.url;
      if (url) named.set(url, `arena-${b.id}-${k}`);
    }
  }
}
const MEDIA_RE = /(?:https?:)?\/\/(?:images|assets|videos|downloads)\.ctfassets\.net\/[^"'\s)\\]+|https:\/\/d2w9rnfcy7mm78\.cloudfront\.net\/[^"'\s)\\]+|https:\/\/images\.are\.na\/[^"'\s)\\]+/g;

// Real file type from magic bytes (Are.na resizes PNGs to JPEG without saying so)
function sniff(buf) {
  const h = buf.subarray(0, 12).toString('hex');
  if (h.startsWith('89504e47')) return '.png';
  if (h.startsWith('ffd8ff')) return '.jpg';
  if (h.startsWith('47494638')) return '.gif';
  if (h.startsWith('52494646') && buf.subarray(8, 12).toString() === 'WEBP') return '.webp';
  if (/^\s*(<\?xml|<svg)/.test(buf.subarray(0, 100).toString())) return '.svg';
  if (buf.subarray(4, 8).toString() === 'ftyp') return '.mp4';
  return null;
}

// mediaMap holds promises so concurrent callers share one download
function download(url) {
  if (!mediaMap.has(url)) mediaMap.set(url, fetchMedia(url));
  return mediaMap.get(url);
}
async function fetchMedia(url) {
  const abs = url.startsWith('//') ? 'https:' + url : url;
  const u = new URL(abs);
  let base = named.get(url), urlExt = path.extname(u.pathname).toLowerCase().slice(0, 6);
  if (!base) {
    const hash = crypto.createHash('sha1').update(abs).digest('hex').slice(0, 12);
    base = `${path.basename(u.pathname, path.extname(u.pathname)).replace(/[^\w.-]+/g, '_').slice(0, 40)}-${hash}`;
  }
  const existing = (await fs.readdir(MEDIA)).find(f => path.parse(f).name === base);
  if (existing) return `/media/${existing}`;
  try {
    const r = await fetch(abs);
    if (!r.ok) throw new Error(r.status);
    const buf = Buffer.from(await r.arrayBuffer());
    const name = base + (sniff(buf) || urlExt || '.bin');
    await fs.writeFile(path.join(MEDIA, name), buf);
    return `/media/${name}`;
  } catch (e) {
    console.warn('media fail', abs, e.message);
    return abs; // keep remote on failure
  }
}

async function localize(obj) {
  const s = JSON.stringify(obj);
  const urls = [...new Set(s.match(MEDIA_RE) || [])];
  // limited concurrency
  const q = [...urls];
  await Promise.all(Array.from({ length: 8 }, async () => { while (q.length) await download(q.shift()); }));
  let out = s;
  for (const u of urls.sort((a, b) => b.length - a.length)) out = out.split(u).join(await mediaMap.get(u));
  return JSON.parse(out);
}

// ---------- Contentful ----------
async function contentful() {
  const gql = await getJSON(`https://graphql.contentful.com/content/v1/spaces/${SPACE}/environments/master`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ query: `query glossaryEntryCollectionQuery { glossaryEntryCollection(limit: 1000) { items { sys { id } title metadata: contentfulMetadata { tags { id name } } } } }` }),
  });
  await write('contentful/graphql.json', gql);
  console.log('titles', gql.data.glossaryEntryCollection.items.length);

  const entries = [];
  for (let skip = 0; ; skip += 1000) {
    const page = await getJSON(`${CDA}/entries?access_token=${TOKEN}&limit=1000&skip=${skip}`);
    entries.push(...page.items);
    if (entries.length >= page.total) break;
  }
  const assets = [];
  for (let skip = 0; ; skip += 1000) {
    const page = await getJSON(`${CDA}/assets?access_token=${TOKEN}&limit=1000&skip=${skip}`);
    assets.push(...page.items);
    if (assets.length >= page.total) break;
  }
  console.log('entries', entries.length, 'assets', assets.length);

  // Single-entry responses (/entries/:id) have the same shape as list items.
  for (const e of entries) await write(`contentful/entries/${e.sys.id}.json`, await localize(e));
  for (const a of assets) await write(`contentful/assets/${a.sys.id}.json`, await localize(a));
  await write('contentful/entries.json', await localize({ sys: { type: 'Array' }, total: entries.length, skip: 0, limit: entries.length, items: entries }));
}

// ---------- Are.na ----------
async function arena() {
  const thumb = await getJSON(`${ARENA}/channels/2063847/thumb`);
  nameArenaImages(thumb.contents || []);
  await write('arena/webloom-inspiration/thumb.json', await localize(thumb));
  const pages = Math.ceil(thumb.length / PER) + 1;
  for (let page = 0; page <= pages; page++) { // page 0 is requested by the loader before thumb resolves
    const c = await getJSON(`${ARENA}/channels/2063847/contents?page=${page}&per=${PER}`);
    nameArenaImages(c.contents || []);
    await write(`arena/webloom-inspiration/contents-${page}-${PER}.json`, await localize(c));
    console.log('arena page', page, (c.contents || []).length);
  }
}

await fs.mkdir(MEDIA, { recursive: true });
await contentful();
await arena();
const done = await Promise.all(mediaMap.values());
console.log('media files', done.filter(v => v.startsWith('/media/')).length, 'remote (failed)', done.filter(v => !v.startsWith('/media/')).length);
