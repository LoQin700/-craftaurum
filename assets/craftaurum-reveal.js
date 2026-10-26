(() => {
  if (window.__craftaurumRevealInit) return;
  window.__craftaurumRevealInit = true;
  document.documentElement.classList.add('js');

  const reveal = (root = document) => {
    const items = root.querySelectorAll('[data-ca-reveal]:not([data-ca-reveal-ready])');
    if (!items.length) return;

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced || !('IntersectionObserver' in window)) {
      items.forEach((el) => {
        el.setAttribute('data-ca-reveal-ready', '');
        el.classList.add('ca-reveal-visible');
      });
      return;
    }

    const observer = new IntersectionObserver((entries, io) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('ca-reveal-visible');
        io.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });

    items.forEach((el) => {
      el.setAttribute('data-ca-reveal-ready', '');
      observer.observe(el);
    });
  };

  document.addEventListener('DOMContentLoaded', () => reveal());
  document.addEventListener('shopify:section:load', (event) => reveal(event.target));
  reveal();
})();
