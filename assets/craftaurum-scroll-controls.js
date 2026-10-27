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
        if (!this.isConnected || !this.track || !this.stage) return;

        const max = Math.max(0, this.track.scrollWidth - this.track.clientWidth);
        const rtl = getComputedStyle(this.track).direction === 'rtl';
        const current = rtl ? Math.abs(this.track.scrollLeft) : this.track.scrollLeft;
        const canScroll = max > 2 && this.track.clientWidth > 0;

        const stageRect = this.stage.getBoundingClientRect();
        const trackRect = this.track.getBoundingClientRect();
        const mediaNodes = this.mediaSelector
          ? [...this.track.querySelectorAll(this.mediaSelector)]
          : [...this.track.children];

        const visibleMedia = mediaNodes
          .map(node => ({ node, rect: node.getBoundingClientRect() }))
          .filter(({ rect }) =>
            rect.width > 0 &&
            rect.height > 0 &&
            rect.right > trackRect.left + 1 &&
            rect.left < trackRect.right - 1
          );

        if (visibleMedia.length) {
          const first = visibleMedia[0].rect;
          const last = visibleMedia[visibleMedia.length - 1].rect;

          const mediaLeft = Math.max(trackRect.left, first.left);
          const mediaRight = Math.min(trackRect.right, last.right);
          const centerY = first.top - stageRect.top + (first.height / 2);

          // Match the native image carousel: arrows live just inside the media viewport edges.
          const inset = window.matchMedia('(max-width: 749px)').matches ? 12 : 14;
          const prevX = Math.max(inset, mediaLeft - stageRect.left + inset);
          const nextX = Math.min(stageRect.width - inset, mediaRight - stageRect.left - inset);

          if (Number.isFinite(centerY)) this.style.setProperty('--ca-controls-y', `${centerY}px`);
          if (Number.isFinite(prevX)) this.style.setProperty('--ca-controls-prev-x', `${prevX}px`);
          if (Number.isFinite(nextX)) this.style.setProperty('--ca-controls-next-x', `${nextX}px`);
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
      this.observeItems = () => {
        this.resizeObserver.disconnect();
        this.resizeObserver.observe(this.stage);
        this.resizeObserver.observe(this.track);
        for (const item of this.track.children) this.resizeObserver.observe(item);
        if (this.mediaSelector) {
          for (const media of this.track.querySelectorAll(this.mediaSelector)) this.resizeObserver.observe(media);
        }
        this.update();
      };

      this.mutationObserver = new MutationObserver(this.observeItems);
      this.mutationObserver.observe(this.track, { childList: true, subtree: true });
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
