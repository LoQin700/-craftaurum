(() => {
  if (window.__craftaurumRevealInit) return;
  window.__craftaurumRevealInit = true;

  const reducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const getItems = (root = document, includeReady = false) => {
    const selector = includeReady
      ? '[data-ca-reveal]'
      : '[data-ca-reveal]:not([data-ca-reveal-ready])';
    const items = [];

    if (root instanceof Element && root.matches(selector)) {
      items.push(root);
    }

    if (root.querySelectorAll) {
      items.push(...root.querySelectorAll(selector));
    }

    return [...new Set(items)];
  };

  const keyframesFor = (element) => {
    const style = element.dataset.caReveal || 'fade-up';

    if (style === 'fade-in') {
      return [
        { opacity: 0 },
        { opacity: 1 },
      ];
    }

    if (style === 'soft-zoom') {
      return [
        { opacity: 0, transform: 'scale(.96)' },
        { opacity: 1, transform: 'scale(1)' },
      ];
    }

    return [
      { opacity: 0, transform: 'translate3d(0, 28px, 0)' },
      { opacity: 1, transform: 'translate3d(0, 0, 0)' },
    ];
  };

  const play = (element, initialDelay = 0) => {
    if (element.dataset.caRevealPlayed === 'true') return;

    element.dataset.caRevealPlayed = 'true';
    element.classList.add('ca-reveal-visible');

    if (reducedMotion()) return;

    if (typeof element.animate === 'function') {
      element.animate(keyframesFor(element), {
        duration: 780,
        delay: initialDelay,
        easing: 'cubic-bezier(.2,.7,.2,1)',
        fill: 'both',
      });
      return;
    }

    // CSS transition fallback for older browsers.
    if (initialDelay > 0) {
      setTimeout(() => element.classList.add('ca-reveal-visible'), initialDelay);
    }
  };

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          play(entry.target, 40);
          io.unobserve(entry.target);
        });
      }, {
        threshold: 0.12,
        rootMargin: '0px 0px -5% 0px',
      })
    : null;

  const arm = (root = document, initial = false) => {
    const items = getItems(root);
    if (!items.length) return;

    items.forEach((element) => {
      element.setAttribute('data-ca-reveal-ready', '');

      if (reducedMotion() || !observer) {
        play(element);
        return;
      }

      if (initial) {
        const rect = element.getBoundingClientRect();
        const inViewport = rect.bottom > 0 && rect.top < window.innerHeight;

        if (inViewport) {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => play(element, 180));
          });
          return;
        }
      }

      observer.observe(element);
    });
  };

  const replay = (root) => {
    getItems(root, true).forEach((element) => {
      if (element.getAnimations) {
        element.getAnimations().forEach((animation) => animation.cancel());
      }
      element.dataset.caRevealPlayed = 'false';
      element.classList.remove('ca-reveal-visible');
      element.removeAttribute('data-ca-reveal-ready');
    });

    requestAnimationFrame(() => {
      requestAnimationFrame(() => arm(root, true));
    });
  };

  const init = () => arm(document, true);

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init, { once: true });
  } else {
    init();
  }

  window.addEventListener('pageshow', (event) => {
    if (event.persisted) replay(document);
  });

  document.addEventListener('shopify:section:load', (event) => {
    replay(event.target);
  });

  document.addEventListener('shopify:section:select', (event) => {
    replay(event.target);
  });
})();
