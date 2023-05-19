export default class Mode {
  constructor(action) {
    this.action = action;

    this.modeEl = null;
    this.modeToggler = null;
    this.modeText = null;
  }

  getModeEl() {
    this.modeEl = this.action.createElem('div', { class: 'md', id: 'md' });
    const mdBx = this.action.createElem('div', { class: 'md-bx' });
    this.modeToggler = this.action.createElem('div', { class: 'md-tgl' });
    this.modeText = this.action.createElem('span', { class: 'hdng mn-stl md-txt' }, 'Train');
    this.action.appEl(mdBx, this.modeToggler, this.modeText);
    this.action.appEl(this.modeEl, mdBx);
    return this.modeEl;
  }

  toggleMode() {
    this.modeEl.classList.toggle('md-gmMd');
    this.modeToggler.classList.toggle('md-tgl-gmMd');
    this.modeText.classList.toggle('md-txt-gmMd');
    this.modeText.textContent = (this.modeText.classList.contains('md-txt-gmMd') ? 'Play' : 'Train');
  }

  toggleModeDisable() {
    this.modeEl.classList.toggle('md-gmMd-dsbl');
    this.modeToggler.classList.toggle('md-tgl-gmMd-dsbl');
    this.modeText.classList.toggle('md-txt-gmMd-dsbl');
  }
}
