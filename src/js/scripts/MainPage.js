export default class MainPage {
  constructor(projectData, action) {
    this.projectData = projectData;
    this.action = action;

    this.mainPageEl = null;
    this.mainPageHeading = null;
    this.mainPageContentBox = null;
    this.mainPageCardsArr = null;
  }

  getMainPageEl() {
    this.mainPageEl = this.action.createElem('div', { class: 'mnPg', id: 'mnPg' });
    const mnPgRw = this.action.createElem('div', { class: 'mnPg-rw' });
    this.mainPageHeading = this.action.createElem('h3', { class: 'hdng mn-stl mnPg-hdng' }, 'Main Page');
    this.mainPageContentBox = this.action.createElem('div', { class: 'mnPg-cont-bx' });
    for (const el of this.projectData) {
      this.action.appEl(this.mainPageContentBox, this.getMainPageCard(el));
    }
    this.action.appEl(mnPgRw, this.mainPageHeading, this.mainPageContentBox);
    this.action.appEl(this.mainPageEl, mnPgRw);
    this.mainPageCardsArr = [...this.mainPageContentBox.querySelectorAll('.mnPgCrd')];
    return this.mainPageEl;
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
