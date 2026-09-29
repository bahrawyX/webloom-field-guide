// Webloom motion layer: Lenis smooth scrolling + GSAP ScrollTrigger reveals.
// It is deliberately independent of the frozen Svelte bundle so route behavior
// and source structure remain intact.
(function () {
  'use strict';

  var gsap = window.gsap;
  var ScrollTrigger = window.ScrollTrigger;
  var Lenis = window.Lenis;

  if (!gsap || !ScrollTrigger || !Lenis) {
    console.warn('[Webloom motion] GSAP, ScrollTrigger, or Lenis failed to load.');
    return;
  }

  gsap.registerPlugin(ScrollTrigger);

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  var lenis = null;
  var ticker = null;
  var observer = null;
  var routeTriggers = [];
  var routeAnimations = [];
  var refreshTimer = 0;
  var routeTimer = 0;
  var currentRoute = '';

  function routeKey() {
    return window.location.pathname + window.location.hash;
  }

  function clearElementMotion() {
    document.querySelectorAll('[data-webloom-motion], [data-webloom-parallax]').forEach(function (element) {
      gsap.killTweensOf(element);
      gsap.set(element, { clearProps: 'opacity,visibility,transform,willChange' });
      element.removeAttribute('data-webloom-motion');
      element.removeAttribute('data-webloom-parallax');
    });
  }

  function clearRouteMotion() {
    routeTriggers.forEach(function (trigger) { trigger.kill(); });
    routeAnimations.forEach(function (animation) {
      if (animation.scrollTrigger) animation.scrollTrigger.kill();
      animation.kill();
    });
    routeTriggers = [];
    routeAnimations = [];
    clearElementMotion();
  }

  function scheduleRefresh() {
    window.clearTimeout(refreshTimer);
    refreshTimer = window.setTimeout(function () {
      if (lenis) lenis.resize();
      ScrollTrigger.refresh();
    }, 180);
  }

  function visibleTargets(selector) {
    return gsap.utils.toArray(selector).filter(function (element) {
      if (element.hasAttribute('data-webloom-motion')) return false;
      var style = window.getComputedStyle(element);
      return style.display !== 'none' && style.visibility !== 'hidden' && element.getClientRects().length > 0;
    });
  }

  function reveal(selector, options) {
    if (reduceMotion.matches) return;
    var settings = options || {};
    var targets = visibleTargets(selector);
    if (!targets.length) return;

    var mobile = window.matchMedia('(max-width: 700px)').matches;
    var distance = settings.y === 0 ? 0 : (mobile ? Math.min(settings.y || 42, 24) : (settings.y || 42));
    targets.forEach(function (element) { element.setAttribute('data-webloom-motion', 'reveal'); });
    gsap.set(targets, { autoAlpha: 0, y: distance });

    var triggers = ScrollTrigger.batch(targets, {
      start: 'top 88%',
      once: true,
      interval: 0.08,
      batchMax: settings.batchMax || 4,
      onEnter: function (batch) {
        gsap.to(batch, {
          autoAlpha: 1,
          y: 0,
          duration: mobile ? 0.55 : 0.78,
          ease: 'power3.out',
          stagger: mobile ? 0.045 : 0.08,
          overwrite: 'auto',
          clearProps: 'opacity,visibility,transform,willChange'
        });
      }
    });
    routeTriggers.push.apply(routeTriggers, triggers);
  }

  function parallax(selector) {
    if (reduceMotion.matches || window.matchMedia('(max-width: 800px)').matches) return;
    gsap.utils.toArray(selector).forEach(function (element, index) {
      if (element.hasAttribute('data-webloom-parallax')) return;
      element.setAttribute('data-webloom-parallax', '');
      var animation = gsap.fromTo(element,
        { yPercent: index % 2 ? 4 : 7 },
        {
          yPercent: index % 2 ? -4 : -7,
          ease: 'none',
          scrollTrigger: {
            id: 'webloom-parallax-' + index + '-' + Date.now(),
            trigger: element.parentElement || element,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.65,
            invalidateOnRefresh: true
          }
        }
      );
      routeAnimations.push(animation);
    });
  }

  function buildProgressThread() {
    if (ScrollTrigger.getById('webloom-scroll-progress')) return;
    var thread = document.querySelector('.webloom-scroll-thread');
    if (!thread) {
      thread = document.createElement('div');
      thread.className = 'webloom-scroll-thread';
      thread.setAttribute('aria-hidden', 'true');
      document.body.appendChild(thread);
    }
    if (reduceMotion.matches) return;

    var animation = gsap.fromTo(thread, { scaleX: 0 }, {
      scaleX: 1,
      ease: 'none',
      scrollTrigger: {
        id: 'webloom-scroll-progress',
        start: 0,
        end: 'max',
        scrub: 0.2,
        invalidateOnRefresh: true
      }
    });
    routeAnimations.push(animation);
  }

  function buildRouteMotion() {
    var path = window.location.pathname;
    buildProgressThread();

    if (path === '/') {
      reveal('.manifest.svelte-1bk6dkh', { y: 34, batchMax: 2 });
      reveal('.headline.svelte-1bk6dkh', { y: 44, batchMax: 1 });
      reveal('.carousel-element.svelte-1bk6dkh', { y: 48, batchMax: 2 });
      parallax('.carousel-element.svelte-1bk6dkh img');
      return;
    }

    if (path === '/glossary') {
      reveal('.glossay-entry-list.svelte-5mptvy', { y: 30, batchMax: 3 });
      reveal('.entry-container .headline, .entry-container img.svelte-1vv5jwi, .entry-container pre', { y: 30, batchMax: 2 });
      return;
    }

    if (path === '/inspiration') {
      reveal('.block.svelte-87yzwv', { y: 38, batchMax: 4 });
      return;
    }

    if (path === '/info') {
      reveal('.headline.svelte-1j3pa1p, .description.svelte-1j3pa1p, .contact.svelte-1j3pa1p', { y: 34, batchMax: 2 });
      reveal('.container.svelte-1j3pa1p', { y: 0, batchMax: 1 });
      return;
    }

    if (path === '/imprint') {
      reveal('.container.svelte-r4zdmx > *', { y: 28, batchMax: 3 });
    }
  }

  function rebuildRouteMotion() {
    currentRoute = routeKey();
    clearRouteMotion();
    window.requestAnimationFrame(function () {
      buildRouteMotion();
      scheduleRefresh();
    });
  }

  function scheduleRouteMotion() {
    window.clearTimeout(routeTimer);
    routeTimer = window.setTimeout(function () {
      if (routeKey() !== currentRoute) {
        rebuildRouteMotion();
      } else {
        buildRouteMotion();
        scheduleRefresh();
      }
    }, 100);
  }

  function patchHistory() {
    ['pushState', 'replaceState'].forEach(function (method) {
      var original = window.history[method];
      if (original.__webloomPatched) return;
      function patchedHistory() {
        var result = original.apply(window.history, arguments);
        window.dispatchEvent(new Event('webloom:navigate'));
        return result;
      }
      patchedHistory.__webloomPatched = true;
      window.history[method] = patchedHistory;
    });
  }

  function startLenis() {
    if (reduceMotion.matches || lenis) return;
    lenis = new Lenis({
      duration: 1.05,
      smoothWheel: true,
      syncTouch: false,
      wheelMultiplier: 0.9,
      touchMultiplier: 1,
      anchors: true,
      respectReducedMotion: true
    });
    lenis.on('scroll', ScrollTrigger.update);
    ticker = function (time) { lenis.raf(time * 1000); };
    gsap.ticker.add(ticker);
    gsap.ticker.lagSmoothing(0);
    window.webloomLenis = lenis;
  }

  function stopLenis() {
    if (!lenis) return;
    if (ticker) gsap.ticker.remove(ticker);
    lenis.destroy();
    lenis = null;
    ticker = null;
    window.webloomLenis = null;
  }

  function restartForMotionPreference() {
    clearRouteMotion();
    if (reduceMotion.matches) {
      stopLenis();
      document.documentElement.setAttribute('data-webloom-motion-mode', 'reduced');
    } else {
      document.documentElement.setAttribute('data-webloom-motion-mode', 'full');
      startLenis();
    }
    rebuildRouteMotion();
  }

  function init() {
    document.documentElement.setAttribute('data-webloom-motion-mode', reduceMotion.matches ? 'reduced' : 'full');
    patchHistory();
    startLenis();

    var app = document.getElementById('app');
    if (app) {
      observer = new MutationObserver(scheduleRouteMotion);
      observer.observe(app, { childList: true, subtree: true });
    }

    window.addEventListener('webloom:navigate', scheduleRouteMotion);
    window.addEventListener('popstate', scheduleRouteMotion);
    window.addEventListener('hashchange', scheduleRouteMotion);
    window.addEventListener('load', scheduleRefresh, { once: true });
    document.addEventListener('load', function (event) {
      if (event.target && event.target.tagName === 'IMG') scheduleRefresh();
    }, true);
    if (reduceMotion.addEventListener) reduceMotion.addEventListener('change', restartForMotionPreference);

    window.__webloomMotion = {
      version: '1.0.0',
      rebuild: rebuildRouteMotion,
      refresh: scheduleRefresh,
      get lenis() { return lenis; },
      get reduced() { return reduceMotion.matches; }
    };

    rebuildRouteMotion();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function () {
      window.requestAnimationFrame(init);
    }, { once: true });
  } else {
    window.requestAnimationFrame(init);
  }
})();
