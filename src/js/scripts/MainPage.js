export default class MainPage {
  constructor(action) {
    this.action = action;

    this.mainPageHeading = null;
    this.mainPageCardsArr = null;
  }

  getMainPageEl(dt) {
    const mnPgEl = this.action.createElem('div', { class: 'mnPg', id: 'mnPg' });
    const mnPgRw = this.action.createElem('div', { class: 'mnPg-rw' });
    this.mainPageHeading = this.action.createElem('h3', { class: 'hdng mn-stl mnPg-hdng' }, 'Main Page');
    const mnPgCntntBx = this.action.createElem('div', { class: 'mnPg-cont-bx' });
    for (const el of dt) {
      this.action.appEl(mnPgCntntBx, this.getMainPageCard(el));
    }
    this.action.appEl(mnPgRw, this.mainPageHeading, mnPgCntntBx);
    this.action.appEl(mnPgEl, mnPgRw);
    this.mainPageCardsArr = [...mnPgCntntBx.querySelectorAll('.mnPgCrd')];
    return mnPgEl;
  }

  getMainPageCard(dt) {
    const mnPgCrd = this.action.createElem('div', { class: 'mnPgCrd', id: dt.id });
    const mnPgCrdRw = this.action.createElem('div', { class: 'mnPgCrd-rw' });
    const mnPgCrdImgBx = this.action.createElem('div', { class: 'mnPgCrd-img-bx' });
    const mnPgCrdImg = this.action.createElem('img', { class: 'mnPgCrd-img', src: dt.img, alt: `game ${dt.nm} image` });
    const mnPgCrdContBx = this.action.createElem('div', { class: 'mnPgCrd-cont-bx' });
    const mnPgCrdHdng = this.action.createElem('h4', { class: 'hdng mn-stl mnPgCrd-hdng' }, dt.nm);
    const mnPgCrdPrg = this.action.createElem('p', { class: 'prg mn-stl mnPgCrd-prg' }, `${dt.dt.length} cards`);
    this.action.appEl(mnPgCrdImgBx, mnPgCrdImg);
    this.action.appEl(mnPgCrdContBx, mnPgCrdHdng, mnPgCrdPrg);
    this.action.appEl(mnPgCrdRw, mnPgCrdImgBx, mnPgCrdContBx);
    this.action.appEl(mnPgCrd, mnPgCrdRw);
    return mnPgCrd;
  }

  toggleMainPageMode(md) {
    if (md === 'Play') {
      this.mainPageHeading.classList.add('mnPg-hdng-gmMd');
      this.mainPageCardsArr.forEach((el) => el.querySelector('.mnPgCrd-cont-bx').classList.add('mnPgCrd-cont-bx-gmMd'));
    } else {
      this.mainPageHeading.classList.remove('mnPg-hdng-gmMd');
      this.mainPageCardsArr.forEach((el) => el.querySelector('.mnPgCrd-cont-bx').classList.remove('mnPgCrd-cont-bx-gmMd'));
    }
  }
}
