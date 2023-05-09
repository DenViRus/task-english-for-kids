export default class Gm {
  constructor(dt, dfltDt, act) {
    this.dt = dt;
    this.dfltDt = dfltDt;
    this.act = act;

    this.gmDt = null;
    this.gm = null;

    this.gmAnsBx = null;
    this.gmAnsCrctTxt = null;
    this.gmAnsErrTxt = null;

    this.gmHdng = null;

    this.gmBtn = null;

    this.gmContBx = null;

    this.gmCrdsArr = null;
  }

  getGm(id) {
    this.gmDt = this.act.getElByID(this.dt, id);
    this.gm = this.act.createElem('div', { class: 'gm', id: this.gmDt.id });
    const gmRw = this.act.createElem('div', { class: 'gmRw' });
    const gmHdngBx = this.act.createElem('div', { class: 'gm-hdng-bx' });
    this.gmHdng = this.act.createElem('h3', { class: 'hdng gm-stl gm-hdng' }, this.gmDt.nm);
    this.act.appEl(gmHdngBx, this.gmHdng);
    this.gmContBx = this.act.createElem('div', { class: 'gm-cont-bx' });
    for (const el of this.gmDt.dt) {
      this.act.appEl(this.gmContBx, this.getGmCrd(el));
    }
    this.act.appEl(gmRw, gmHdngBx, this.gmContBx);
    this.act.appEl(this.gm, gmRw);
    this.gmCrdsArr = [...this.gmContBx.querySelectorAll('.gmCrd')];
    return this.gm;
  }

  getGmAnsBx() {
    this.gmAnsBx = this.act.createElem('div', { class: 'gm-ans-bx' });
    const gmAnsCrctBx = this.act.createElem('div', { class: 'gm-ans-crct-bx' });
    const gmAnsCrctHdng = this.act.createElem('h5', { class: 'hdng gm-stl gm-ans-crct-hdng' }, 'Right answers:');
    this.gmAnsCrctTxt = this.act.createElem('span', { class: 'hdng gm-stl gm-ans-crct-txt' }, 0);
    const gmAnsErrBx = this.act.createElem('div', { class: 'gm-ans-err-bx' });
    const gmAnsErrHdng = this.act.createElem('h5', { class: 'hdng gm-stl gm-ans-err-hdng' }, 'Wrong answers:');
    this.gmAnsErrTxt = this.act.createElem('span', { class: 'hdng gm-stl gm-ans-err-txt' }, 0);
    this.act.appEl(gmAnsCrctBx, gmAnsCrctHdng, this.gmAnsCrctTxt);
    this.act.appEl(gmAnsErrBx, gmAnsErrHdng, this.gmAnsErrTxt);
    this.act.appEl(this.gmAnsBx, gmAnsCrctBx, gmAnsErrBx);
    return this.gmAnsBx;
  }

  getGmBtn() {
    this.gmBtn = this.act.createElem('button', { class: 'hdng gm-stl gm-btn', type: 'button' }, 'Start game');
    return this.gmBtn;
  }

  getGmCrd(dt) {
    const gmCrd = this.act.createElem('div', { class: 'gmCrd', id: dt.id });
    const gmCrdRw = this.act.createElem('div', { class: 'gmCrd-rw' });
    const gmCrdImgBx = this.act.createElem('div', { class: 'gmCrd-img-bx' });
    const gmCrdImg = this.act.createElem('img', { class: 'gmCrd-img', src: dt.img, alt: `word ${dt.en} image` });
    this.act.appEl(gmCrdImgBx, gmCrdImg);
    this.act.appEl(gmCrdRw, gmCrdImgBx);
    this.act.appEl(gmCrd, gmCrdRw);
    return gmCrd;
  }

  getgmCrdContBx(dt) {
    const gmCrdContBx = this.act.createElem('div', { class: 'gmCrd-cont-bx' });
    const gmCrdHdng = this.act.createElem('h4', { class: 'hdng gm-stl gmCrd-hdng' }, dt.en);
    const gmCrdbtn = this.act.createElem('button', { class: 'hdng gm-stl gmCrd-btn', type: 'button' });
    this.act.appEl(gmCrdContBx, gmCrdHdng, gmCrdbtn);
    return gmCrdContBx;
  }

  toggleGmMd(md) {
    if (md === 'Play') {
      this.gmHdng.classList.add('gm-hdng-gmMd');
      this.act.beforEl(this.gmHdng, this.getGmAnsBx());
      this.act.afterEl(this.gmHdng, this.getGmBtn());
      this.gmCrdsArr.forEach((el) => {
        el.querySelector('.gmCrd-rw').classList.add('gmCrd-rw-gmMd');
        el.querySelector('.gmCrd-img-bx').classList.add('gmCrd-img-bx-gmMd');
        el.querySelector('.gmCrd-img').classList.add('gmCrd-img-gmMd');
        if (el.querySelector('.gmCrd-cont-bx')) el.querySelector('.gmCrd-cont-bx').remove();
      });
    } else if (md === 'Train') {
      this.gmHdng.classList.remove('gm-hdng-gmMd');
      if (this.gmAnsBx && this.gmBtn) {
        this.gmAnsBx.remove();
        this.gmBtn.remove();
        this.gmAnsBx = null;
        this.gmBtn = null;
        this.gmAnsCrctTxt = null;
        this.gmAnsErrTxt = null;
      }
      this.gmCrdsArr.forEach((el, i) => {
        el.querySelector('.gmCrd-rw').classList.remove('gmCrd-rw-gmMd');
        el.querySelector('.gmCrd-img-bx').classList.remove('gmCrd-img-bx-gmMd');
        el.querySelector('.gmCrd-img').classList.remove('gmCrd-img-gmMd');
        this.act.appEl(el.querySelector('.gmCrd-rw'), this.getgmCrdContBx(this.gmDt.dt[i]));
      });
    }
  }
}
