export default class Ppp {
  constructor(dfltDt, act) {
    this.dfltDt = dfltDt;
    this.act = act;

    this.ppp = null;
  }

  getPpp({ res, crctAns, errAns }) {
    this.ppp = this.act.createElem('div', { class: 'ppp', id: 'ppp' });
    const pppBx = this.act.createElem('div', { class: 'pppBx' });
    this.pppClsBtn = this.act.createElem('button', { class: 'ppp-cls-btn', type: 'button' });
    const pppImgBx = this.act.createElem('div', { class: 'ppp-img-bx' });

    const img = (res === 'wn') ? this.dfltDt.wnImg : this.dfltDt.lsImg;
    const txt = (res === 'wn') ? 'win' : 'lose';
    const aud = (res === 'wn') ? this.dfltDt.wnAud : this.dfltDt.lsAud;

    const pppImg = this.act.createElem('img', { class: 'ppp-img', src: img, alt: `${txt} image` });
    const pppAnsBx = this.act.createElem('div', { class: 'ppp-ans-bx' });
    const pppAnsCrctBx = this.act.createElem('div', { class: 'ppp-ans-crct-bx' });
    const pppAnsCrctHdng = this.act.createElem('h4', { class: 'hdng mn-stl ppp-ans-crct-hdng' }, 'Right answers:');
    const pppAnsCrctTxt = this.act.createElem('span', { class: 'hdng mn-stl ppp-ans-crct-txt' }, crctAns);
    const pppAnsErrBx = this.act.createElem('div', { class: 'ppp-ans-err-bx' });
    const pppAnsErrHdng = this.act.createElem('h4', { class: 'hdng mn-stl ppp-ans-err-hdng' }, 'Wrong answers:');
    const pppAnsErrTxt = this.act.createElem('span', { class: 'hdng mn-stl ppp-ans-err-txt' }, errAns);

    this.act.appEl(pppAnsCrctBx, pppAnsCrctHdng, pppAnsCrctTxt);
    this.act.appEl(pppAnsErrBx, pppAnsErrHdng, pppAnsErrTxt);
    this.act.appEl(pppImgBx, pppImg);
    this.act.appEl(pppAnsBx, pppAnsCrctBx, pppAnsErrBx);
    this.act.appEl(pppBx, this.pppClsBtn, pppImgBx, pppAnsBx);
    this.act.appEl(this.ppp, pppBx);
    this.act.plyAud(aud);
    return this.ppp;
  }
}
