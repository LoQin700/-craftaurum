(() => {
  if (window.__craftaurumRevealInit) return;
  window.__craftaurumRevealInit = true;

  const prefersReducedMotion = () =>
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const collectItems = (root = document) => {
    const items = [];
    if (root instanceof Element && root.matches('[data-ca-reveal]')) {
      items.push(root);
    }
    if (root.querySelectorAll) {
      items.push(...root.querySelectorAll('[data-ca-reveal]:not([data-ca-reveal-ready])'));
    }
    return items.filter((item, index, all) => all.indexOf(item) === index);
  };

  const showAfterPaint = (element) => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        element.classList.add('ca-reveal-visible');
      });
    });
  };

  const observer = 'IntersectionObserver' in window
    ? new IntersectionObserver((entries, io) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          showAfterPaint(entry.target);
          io.unobserve(entry.target);
        });
      }, {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px'
      })
    : null;

  const reveal = (root = document) => {
    const items = collectItems(root);
    if (!items.length) return;

    if (prefersReducedMotion() || !observer) {
      items.forEach((element) => {
        element.setAttribute('data-ca-reveal-ready', '');
        element.classList.add('ca-reveal-visible');
      });
      return;
    }

    items.forEach((element) => {
      element.setAttribute('data-ca-reveal-ready', '');
      observer.observe(element);
    });
  };

  const initialize = () => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => reveal(document));
    });
  };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initialize, { once: true });
  } else {
    initialize();
  }

  document.addEventListener('shopify:section:load', (event) => {
    requestAnimationFrame(() => reveal(event.target));
  });

  document.addEventListener('shopify:section:select', (event) => {
    const items = collectItems(event.target);
    items.forEach((element) => {
      element.classList.remove('ca-reveal-visible');
      element.removeAttribute('data-ca-reveal-ready');
    });
    requestAnimationFrame(() => reveal(event.target));
  });
})();
