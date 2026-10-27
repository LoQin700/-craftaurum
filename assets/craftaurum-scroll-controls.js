/* Shared lightweight scroll-snap arrows for Craftaurum custom sections. */
(() => {
  if (customElements.get('ca-scroll-controls')) return;

  class CAScrollControls extends HTMLElement {
    connectedCallback() {
      this.stage = this.parentElement;
      this.track = this.stage?.querySelector(this.getAttribute('data-track'));
      this.mediaSelector = this.getAttribute('data-media');
      this.previous = this.querySelector('[data-direction="previous"]');
      this.next = this.querySelector('[data-direction="next"]');
      if (!this.track || !this.previous || !this.next) return;

      this.move = (event) => {
        const items = [...this.track.children].filter(item => item.getBoundingClientRect().width > 0);
        const distance = items.length > 1
          ? Math.abs(items[1].getBoundingClientRect().left - items[0].getBoundingClientRect().left)
          : (items[0]?.getBoundingClientRect().width || this.track.clientWidth);
        const direction = event.currentTarget.dataset.direction === 'next' ? 1 : -1;
        const rtl = getComputedStyle(this.track).direction === 'rtl' ? -1 : 1;
        this.track.scrollBy({ left: direction * rtl * distance, behavior: 'smooth' });
      };

      this.update = () => {
        if (!this.isConnected || !this.track) return;
        const max = Math.max(0, this.track.scrollWidth - this.track.clientWidth);
        const rtl = getComputedStyle(this.track).direction === 'rtl';
        const current = rtl ? Math.abs(this.track.scrollLeft) : this.track.scrollLeft;
        const canScroll = max > 2 && this.track.clientWidth > 0;
        const media = this.mediaSelector ? this.track.querySelector(this.mediaSelector) : this.track.firstElementChild;
        if (media && this.stage) {
          const stageRect = this.stage.getBoundingClientRect();
          const mediaRect = media.getBoundingClientRect();
          const centerY = mediaRect.top - stageRect.top + (mediaRect.height / 2);
          if (Number.isFinite(centerY) && centerY >= 0) this.style.setProperty('--ca-controls-y', `${centerY}px`);
        }
        this.classList.toggle('is-unscrollable', !canScroll);
        this.previous.disabled = !canScroll || current < 2;
        this.next.disabled = !canScroll || current >= max - 2;
      };

      this.previous.addEventListener('click', this.move);
      this.next.addEventListener('click', this.move);
      this.track.addEventListener('scroll', this.update, { passive: true });
      window.addEventListener('resize', this.update, { passive: true });
      window.addEventListener('load', this.update);
      this.resizeObserver = new ResizeObserver(this.update);
      this.resizeObserver.observe(this.track);
      this.observeItems = () => {
        this.resizeObserver.disconnect();
        this.resizeObserver.observe(this.track);
        for (const item of this.track.children) this.resizeObserver.observe(item);
        this.update();
      };
      this.mutationObserver = new MutationObserver(this.observeItems);
      this.mutationObserver.observe(this.track, { childList: true });
      this.observeItems();
      requestAnimationFrame(this.update);
    }

    disconnectedCallback() {
      if (!this.track || !this.move) return;
      this.previous.removeEventListener('click', this.move);
      this.next.removeEventListener('click', this.move);
      this.track.removeEventListener('scroll', this.update);
      window.removeEventListener('resize', this.update);
      window.removeEventListener('load', this.update);
      this.resizeObserver?.disconnect();
      this.mutationObserver?.disconnect();
    }
  }

  customElements.define('ca-scroll-controls', CAScrollControls);
})();
