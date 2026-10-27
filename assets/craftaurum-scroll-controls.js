/* Shared controls for custom scroll-snap carousels. One listener per instance; no library dependency. */
(() => {
  if (customElements.get('ca-scroll-controls')) return;

  class CAScrollControls extends HTMLElement {
    connectedCallback() {
      this.track = this.parentElement?.querySelector(this.getAttribute('data-track'));
      this.previous = this.querySelector('[data-direction="previous"]');
      this.next = this.querySelector('[data-direction="next"]');
      if (!this.track || !this.previous || !this.next) return;

      this.move = (event) => {
        const items = [...this.track.children].filter((item) => item.getBoundingClientRect().width > 0);
        const step = items.length > 1
          ? Math.abs(items[1].getBoundingClientRect().left - items[0].getBoundingClientRect().left)
          : (items[0]?.getBoundingClientRect().width || this.track.clientWidth);
        const direction = event.currentTarget.dataset.direction === 'next' ? 1 : -1;
        const rtl = getComputedStyle(this.track).direction === 'rtl' ? -1 : 1;
        this.track.scrollBy({ left: direction * rtl * step, behavior: 'smooth' });
      };

      this.update = () => {
        if (!this.isConnected) return;
        const rtl = getComputedStyle(this.track).direction === 'rtl';
        const max = Math.max(0, this.track.scrollWidth - this.track.clientWidth);
        const current = rtl ? -this.track.scrollLeft : this.track.scrollLeft;
        this.classList.toggle('is-unscrollable', max < 2);
        this.previous.disabled = max < 2 || current <= 2;
        this.next.disabled = max < 2 || current >= max - 2;
      };

      this.previous.addEventListener('click', this.move);
      this.next.addEventListener('click', this.move);
      this.track.addEventListener('scroll', this.update, { passive: true });
      this.resizeObserver = new ResizeObserver(this.update);
      this.resizeObserver.observe(this.track);
      this.update();
    }

    disconnectedCallback() {
      if (!this.track || !this.move) return;
      this.previous.removeEventListener('click', this.move);
      this.next.removeEventListener('click', this.move);
      this.track.removeEventListener('scroll', this.update);
      this.resizeObserver?.disconnect();
    }
  }

  customElements.define('ca-scroll-controls', CAScrollControls);
})();
