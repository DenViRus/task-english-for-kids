export default class MnPg {
  constructor(dt, act) {
    this.dt = dt;
    this.act = act;

    this.mnPg = null;
    this.mnPgHdng = null;
    this.mnPgContBx = null;

    this.mnPgCrdsArr = null;
  }

  getMnPg() {
    this.mnPg = this.act.createElem('div', { class: 'mnPg', id: 'mnPg' });
    const mnPgRw = this.act.createElem('div', { class: 'mnPg-rw' });
    this.mnPgHdng = this.act.createElem('h3', { class: 'hdng mn-stl mnPg-hdng' }, 'Main Page');
    this.mnPgContBx = this.act.createElem('div', { class: 'mnPg-cont-bx' });
    for (const el of this.dt) {
      this.act.appEl(this.mnPgContBx, this.getMnPgCrd(el));
    }
    this.act.appEl(mnPgRw, this.mnPgHdng, this.mnPgContBx);
    this.act.appEl(this.mnPg, mnPgRw);
    this.mnPgCrdsArr = [...this.mnPgContBx.querySelectorAll('.mnPgCrd')];
    return this.mnPg;
  }

  getMnPgCrd(dt) {
    const mnPgCrd = this.act.createElem('div', { class: 'mnPgCrd', id: dt.id });
    const mnPgCrdRw = this.act.createElem('div', { class: 'mnPgCrd-rw' });
    const mnPgCrdImgBx = this.act.createElem('div', { class: 'mnPgCrd-img-bx' });
    const mnPgCrdImg = this.act.createElem('img', { class: 'mnPgCrd-img', src: dt.img, alt: `game ${dt.nm} image` });
    const mnPgCrdContBx = this.act.createElem('div', { class: 'mnPgCrd-cont-bx' });
    const mnPgCrdHdng = this.act.createElem('h4', { class: 'hdng mn-stl mnPgCrd-hdng' }, dt.nm);
    const mnPgCrdPrg = this.act.createElem('p', { class: 'prg mn-stl mnPgCrd-prg' }, `${dt.dt.length} cards`);
    this.act.appEl(mnPgCrdImgBx, mnPgCrdImg);
    this.act.appEl(mnPgCrdContBx, mnPgCrdHdng, mnPgCrdPrg);
    this.act.appEl(mnPgCrdRw, mnPgCrdImgBx, mnPgCrdContBx);
    this.act.appEl(mnPgCrd, mnPgCrdRw);
    return mnPgCrd;
  }

  toggleMnPgMd(md) {
    if (md === 'Play') {
      this.mnPgHdng.classList.add('mnPg-hdng-gmMd');
      this.mnPgCrdsArr.forEach((el) => el.querySelector('.mnPgCrd-cont-bx').classList.add('mnPgCrd-cont-bx-gmMd'));
    } else {
      this.mnPgHdng.classList.remove('mnPg-hdng-gmMd');
      this.mnPgCrdsArr.forEach((el) => el.querySelector('.mnPgCrd-cont-bx').classList.remove('mnPgCrd-cont-bx-gmMd'));
    }
  }
}
