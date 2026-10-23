class CraftaurumInteractiveFeature extends HTMLElement {
  connectedCallback() {
    if (this.dataset.ready === 'true') return;
    this.dataset.ready = 'true';
    this.items = [...this.querySelectorAll('[data-capability-item]')];
    this.panels = [...this.querySelectorAll('[data-capability-panel]')];
    this.items.forEach((item, index) => {
      item.addEventListener('mouseenter', () => this.activate(index));
      item.addEventListener('focus', () => this.activate(index));
      item.addEventListener('click', () => this.activate(index));
    });
    this.activate(0);
  }
  activate(index) {
    this.items.forEach((item, i) => {
      const active = i === index;
      item.classList.toggle('is-active', active);
      item.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    this.panels.forEach((panel, i) => {
      panel.classList.toggle('is-active', i === index);
      panel.setAttribute('aria-hidden', i === index ? 'false' : 'true');
    });
  }
}
if (!customElements.get('craftaurum-interactive-feature')) {
  customElements.define('craftaurum-interactive-feature', CraftaurumInteractiveFeature);
}
