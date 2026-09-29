# Webloom — a field guide to web craft

Webloom is a visual field guide for designers learning to weave typography, code, and interaction into expressive websites. It is built from a frozen offline snapshot of an earlier educational web publication (captured 2026-09-27), with a distinct identity, copy system, visual language, and locally generated brand assets. Source attribution and publication caveats are recorded in [CREDITS.txt](CREDITS.txt).

```bash
cd site
npm start            # → http://localhost:4173   (node server.mjs [port])
node ../tools/media-manifest.mjs ./public   # rebuild data/media-manifest.json after changing images
```

No `npm install` needed: the server is plain Node (22+).

## Layout

```
site/
  server.mjs              static server + SPA fallback (/glossary, /inspiration, /info, /imprint)
  public/
    index.html            Webloom SEO/social shell + /data-shim.js
    data-shim.js          routes the bundle's API calls to local JSON (see below)
    assets/               Vite build plus Webloom identity copy, palette, book textures, ellipse, and code patterns
    fonts/                ABC Favorit (+Mono, Lining, Variable), Saol Display, New Edge
    *.png / *.svg         Webloom cursor, step illustrations, favicon, and social images
    donutkugel.gltf       woven 3D knot rendered as ASCII in the home hero
    data/
      contentful/         graphql.json (titles+tags), entries.json, entries/<id>.json, assets/<id>.json
      arena/webloom-inspiration/  thumb.json, contents-<page>-15.json (pages 0–7)
      media-manifest.json every image → which card/entry uses it
    media/                440 images: arena-<blockId>-<size>.<ext> + Contentful asset files
tools/
  snapshot.mjs            data + image snapshotter
  media-manifest.mjs      manifest builder
qa/
  diff.mjs                original-vs-clone pixel diff, 6 routes × 1440/768/390
  interact.mjs            pixel diff after interactions (every glossary entry, search, filter)
  shots/                  last run's screenshots + diff images
```

## Asset policy

`site/public/data/media-manifest.json` lists every image:

- **Are.na references** — the 85 inspiration screenshots stay paired with their original external destinations. Do not fabricate or restyle them.
- **Glossary diagrams** — the 15 embedded instructional images preserve the original concept and aspect ratio while using the Webloom visual language.
- **Brand surfaces** — the cursor, step icons, book textures, code patterns, 3D knot, favicon, and social cards form one black / warm-paper / cobalt system.

Replacing a file in place with the same name and a similar aspect ratio keeps the layout identical.

## How it works

The site is a static Svelte 3 + Vite build. The frozen glossary and inspiration data are served locally:

- `data-shim.js` wraps `fetch` (Contentful CDA + GraphQL) and `XMLHttpRequest` (Are.na, via
  axios) and maps each request to its JSON snapshot. Search (`fields.title[match]`) is resolved
  client-side over `entries.json`.
- Are.na responses get about 350ms of simulated latency. **This is intentional.** The original
  inspiration grid crashes on blocks without a `source`, so the cards it ends up showing depend
  on response order. The latency reproduces the live ordering, so the grid matches the live site
  (85, 84, 83, 12…1, 75…61) instead of stopping after two cards.
- One-line bundle patch (`app.bc5a17d6.js`): the entry-image renderer did
  `"https://"+file.url.slice(2)`, which only works with protocol-relative CDN URLs. It now keeps
  protocol-relative URLs working and also accepts local `/media/...` paths.

Known inherited quirks: the "Favicon" entry throws
`Cannot read properties of undefined (reading 'sys')`, and inspiration cards 39/40/82/83 have no
source link, which is what triggers the grid crash above.

Do not run the snapshot task during the rebrand: the frozen data is the verified source of truth, and publication rights for third-party material must be reviewed before production launch.
