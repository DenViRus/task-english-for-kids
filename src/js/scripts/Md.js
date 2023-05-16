export default class Md {
  constructor(act) {
    this.act = act;

    this.md = null;
    this.mdTgl = null;
    this.mdTxt = null;
  }

  getMd() {
    this.md = this.act.createElem('div', { class: 'md', id: 'md' });
    const mdBx = this.act.createElem('div', { class: 'md-bx' });
    this.mdTgl = this.act.createElem('div', { class: 'md-tgl' });
    this.mdTxt = this.act.createElem('span', { class: 'hdng mn-stl md-txt' }, 'Train');
    this.act.appEl(mdBx, this.mdTgl, this.mdTxt);
    this.act.appEl(this.md, mdBx);
    return this.md;
  }

  toggleMd() {
    this.md.classList.toggle('md-gmMd');
    this.mdTgl.classList.toggle('md-tgl-gmMd');
    this.mdTxt.classList.toggle('md-txt-gmMd');
    this.mdTxt.textContent = (this.mdTxt.classList.contains('md-txt-gmMd') ? 'Play' : 'Train');
  }

  toggleMdDsbl() {
    this.md.classList.toggle('md-gmMd-dsbl');
    this.mdTgl.classList.toggle('md-tgl-gmMd-dsbl');
    this.mdTxt.classList.toggle('md-txt-gmMd-dsbl');
  }
}
