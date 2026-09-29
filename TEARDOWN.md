# TEARDOWN — Webloom

**One-line stack:** Svelte 3 SPA (Vite build) · three.js GLTFLoader + AsciiEffect (DOM `<table>` output) + TrackballControls · Contentful CDA/GraphQL · Are.na v2 via axios · svelte-infinite-loading · CSS keyframes only (no GSAP, Lenis, or WebGL canvas in the DOM).

Tags: CONFIRMED = read from bundle, CSS or runtime. OBSERVED = seen in the browser.

## Routes (CONFIRMED)
| Route | Content | Data |
|---|---|---|
| `/` | Headline, ASCII 3D woven-knot hero (drag to rotate), concept tags, intro copy, illustrated links to glossary terms | static + `donutkugel.gltf` |
| `/glossary` | A–Z index of 62 terms; tag filter (CODE, CONCEPT, CSS, HTML, INTERACTION, TOOL, TREND, TYPOGRAPHY); search | Contentful GraphQL `glossaryEntryCollection` |
| `/glossary#<slug>` | Entry detail: rich text, numbered sections, implementation code block, tutorials, related terms, embedded images | Contentful `entries/:id`, `assets/:id` |
| `/inspiration` | Card grid from a frozen attributed Are.na reference collection, infinite loading 15 per page, newest first | local Are.na snapshot |
| `/info`, `/imprint` | Static copy; /info has a CSS-3D rotating book (`book-*.jpg` faces) | static |

## Surface routing
- **No GPU canvas.** The hero looks like WebGL but renders through three.js `AsciiEffect` into a DOM `<table>` inside `.logo-anim-container` (CONFIRMED: 0 `<canvas>` elements, table 48 rows). It was cloned by keeping the original bundle, and it animates and responds to drag identically (verified).
- Everything else is DOM/CSS.

## Design system (CONFIRMED from CSS)
- Colors: ink `#111111`, warm paper `#F4F0E6`, and electric cobalt `#2457FF`; glossary panels use low-opacity cobalt fields.
- Fonts: Favorit Variable (body, `wght 250`, 18px), Favorit Mono / Mono Variable (tags, highlighted terms, code), Favorit Lining, Saol Display Light Italic (editorial accents), New Edge Soft Power (display).
- Breakpoints: 1201+, ≤1200, ≤1100, ≤900, ≤800, ≤700 (the main mobile switch), ≤500.
- Custom cursors for every CSS cursor type (`/cursor@1x.png`, `/cursor@3x.png`, `/*-resize.png` and others).

## Motion (CONFIRMED keyframes)
FadeIn per section, `wiggle`, `circle_anim` (glossary backdrop ellipse), `slideDownFromTop` / `slideUpToTop` (entry panel), `rotatingAnimationX/Y/Z` (CSS-3D book on /info), infinite-loading spinners. The highlighted glossary terms run a random character-scramble (OBSERVED, JS-driven, nondeterministic).

## Build decision
Structure-preserving rebrand path: compiled bundle + CSS + frozen data shim, with identity-bearing copy, colors, metadata, generated diagrams, 3D model, and brand surfaces replaced in place. The compiled components remain the source of truth for layout and interaction.
