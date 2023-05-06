export default class Brg {
  constructor(act) {
    this.act = act;

    this.brg = null;
    this.brgItm = null;
  }

  getBrg() {
    this.brg = this.act.createElem('div', { class: 'brg', id: 'brg' });
    const brgBx = this.act.createElem('div', { class: 'brg-bx' });
    this.brgItm = this.act.createElem('div', { class: 'brg-itm' });

    this.act.appEl(brgBx, this.brgItm);
    this.act.appEl(this.brg, brgBx);
    return this.brg;
  }

  toggleBrgMd(md) {
    md === 'Play' ? this.brgItm.classList.add('brg-itm-gmMd') : this.brgItm.classList.remove('brg-itm-gmMd');
  }

  toggleBrg() {
    this.brg.classList.toggle('brg-actv');
    this.brgItm.classList.toggle('brg-itm-actv');
  }

  brgControl() {

  }
}
