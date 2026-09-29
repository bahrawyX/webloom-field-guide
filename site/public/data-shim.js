// Offline data layer: routes every remote API call made by the frozen bundle
// (Contentful CDA, Contentful GraphQL, Are.na via axios/XHR) to the local JSON
// snapshots in /data. The snapshot is intentionally not refreshed during rebranding.
(function () {
  var description = 'A visual field guide for designers learning to weave typography, code, and interaction into expressive websites.';
  var metadata = [
    ['meta', 'name', 'robots', 'index, follow, max-image-preview:large'],
    ['meta', 'name', 'theme-color', '#F4F0E6'],
    ['meta', 'name', 'color-scheme', 'light'],
    ['meta', 'property', 'og:type', 'website'],
    ['meta', 'property', 'og:site_name', 'Webloom'],
    ['meta', 'property', 'og:description', description],
    ['meta', 'property', 'og:image:type', 'image/png'],
    ['meta', 'property', 'og:image:alt', 'Webloom wordmark over an editorial cobalt thread pattern'],
    ['meta', 'name', 'twitter:card', 'summary_large_image'],
    ['meta', 'name', 'twitter:title', 'Webloom — A field guide to web craft'],
    ['meta', 'name', 'twitter:description', description],
    ['meta', 'name', 'twitter:image', '/share_image.png'],
    ['meta', 'name', 'twitter:image:alt', 'Webloom wordmark over an editorial cobalt thread pattern']
  ];
  metadata.forEach(function (item) {
    var el = document.createElement(item[0]);
    el.setAttribute(item[1], item[2]);
    el.setAttribute('content', item[3]);
    document.head.appendChild(el);
  });
  var brandCss = document.createElement('link');
  brandCss.rel = 'stylesheet';
  brandCss.href = '/brand.css';
  function attachBrandCss() {
    if (!brandCss.isConnected) document.head.appendChild(brandCss);
  }
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', attachBrandCss, { once: true });
  } else {
    attachBrandCss();
  }
  var lenisCss = document.createElement('link');
  lenisCss.rel = 'stylesheet';
  lenisCss.href = '/vendor/lenis.css';
  document.head.appendChild(lenisCss);

  function loadMotionScript(src) {
    return new Promise(function (resolve, reject) {
      var script = document.createElement('script');
      script.src = src;
      script.onload = resolve;
      script.onerror = function () { reject(new Error('Unable to load ' + src)); };
      document.head.appendChild(script);
    });
  }

  loadMotionScript('/vendor/gsap.min.js')
    .then(function () { return loadMotionScript('/vendor/ScrollTrigger.min.js'); })
    .then(function () { return loadMotionScript('/vendor/lenis.min.js'); })
    .then(function () { return loadMotionScript('/motion.js'); })
    .catch(function (error) { console.warn('[Webloom motion]', error.message); });
  var structuredData = document.createElement('script');
  structuredData.type = 'application/ld+json';
  structuredData.text = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Webloom',
    description: description,
    inLanguage: 'en'
  });
  document.head.appendChild(structuredData);

  var CDA = 'https://cdn.contentful.com/spaces/';
  var GQL = 'https://graphql.contentful.com/content/v1/spaces/';
  var ARENA = 'https://api.are.na/v2/';

  function json(obj, status) {
    return new Response(JSON.stringify(obj), { status: status || 200, headers: { 'Content-Type': 'application/json' } });
  }
  var entriesCache;
  function allEntries() {
    return entriesCache || (entriesCache = origFetch('/data/contentful/entries.json').then(function (r) { return r.json(); }));
  }
  function notFound(id) {
    return json({ sys: { type: 'Error', id: 'NotFound' }, message: 'The resource could not be found.', details: { id: id } }, 404);
  }
  function local(path, id) {
    return origFetch(path).then(function (r) { return r.ok ? r : notFound(id); });
  }

  function mapArena(url) {
    var u = new URL(url);
    var m = u.pathname.match(/\/v2\/channels\/([^/]+)\/(thumb|contents)$/);
    if (!m) return null;
    if (m[2] === 'thumb') return '/data/arena/' + m[1] + '/thumb.json';
    return '/data/arena/' + m[1] + '/contents-' + (u.searchParams.get('page') || 1) + '-' + (u.searchParams.get('per') || 15) + '.json';
  }

  var origFetch = window.fetch.bind(window);
  window.fetch = function (input, init) {
    var url = typeof input === 'string' ? input : input && input.url;
    if (!url) return origFetch(input, init);

    if (url.indexOf(GQL) === 0) return origFetch('/data/contentful/graphql.json');

    if (url.indexOf(CDA) === 0) {
      var u = new URL(url);
      var parts = u.pathname.split('/').filter(Boolean); // spaces, <space>, ...
      var rest = parts.slice(2);
      if (rest[0] === 'environments') rest = rest.slice(2);
      if (rest[0] === 'entries' && rest[1]) return local('/data/contentful/entries/' + rest[1] + '.json', rest[1]);
      if (rest[0] === 'assets' && rest[1]) return local('/data/contentful/assets/' + rest[1] + '.json', rest[1]);
      if (rest[0] === 'entries') {
        var q = u.searchParams.get('fields.title[match]');
        var type = u.searchParams.get('content_type');
        if (q == null && !type) return origFetch('/data/contentful/entries.json');
        return allEntries().then(function (all) {
          var words = (q || '').toLowerCase().split(/\s+/).filter(Boolean);
          var items = all.items.filter(function (e) {
            if (type && e.sys.contentType.sys.id !== type) return false;
            var t = String((e.fields && e.fields.title) || '').toLowerCase();
            return words.every(function (w) { return t.indexOf(w) !== -1; });
          });
          return json({ sys: { type: 'Array' }, total: items.length, skip: 0, limit: 100, items: items });
        });
      }
    }

    if (url.indexOf(ARENA) === 0) {
      var p = mapArena(url);
      if (p) return origFetch(p);
    }
    return origFetch(input, init);
  };

  // axios (Are.na client) uses XMLHttpRequest in the browser.
  // A small delay preserves the original incremental-loading cadence. Four frozen
  // blocks that lacked `source` metadata are normalized in the snapshot from their
  // own descriptions so the full attributed collection can render without crashing.
  var ARENA_LATENCY = 350;
  var origOpen = XMLHttpRequest.prototype.open;
  var origSend = XMLHttpRequest.prototype.send;
  XMLHttpRequest.prototype.open = function (method, url) {
    var args = Array.prototype.slice.call(arguments);
    this.__arena = false;
    if (typeof url === 'string' && url.indexOf(ARENA) === 0) {
      var p = mapArena(url);
      if (p) { args[0] = 'GET'; args[1] = p; this.__arena = true; }
    }
    return origOpen.apply(this, args);
  };
  XMLHttpRequest.prototype.send = function () {
    var xhr = this, args = arguments;
    if (!xhr.__arena) return origSend.apply(xhr, args);
    setTimeout(function () { origSend.apply(xhr, args); }, ARENA_LATENCY);
  };
})();
