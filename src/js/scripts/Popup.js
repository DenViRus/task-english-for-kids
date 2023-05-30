export default class Popup {
  constructor(action) {
    this.action = action;
  }

  getPopupEl(dt, { res, crctAns, errAns }) {
    const pppEl = this.action.createElem('div', { class: 'ppp', id: 'ppp' });
    const pppBx = this.action.createElem('div', { class: 'pppBx' });
    const pppClsBtn = this.action.createElem('button', { class: 'ppp-cls-btn', type: 'button' });
    const pppImgBx = this.action.createElem('div', { class: 'ppp-img-bx' });

    const img = (res === 'wn') ? dt.wnImg : dt.lsImg;
    const txt = (res === 'wn') ? 'win' : 'lose';
    const aud = (res === 'wn') ? dt.wnAud : dt.lsAud;

    const pppImg = this.action.createElem('img', { class: 'ppp-img', src: img, alt: `${txt} image` });
    const pppAnsBx = this.action.createElem('div', { class: 'ppp-ans-bx' });
    const pppAnsCrctBx = this.action.createElem('div', { class: 'ppp-ans-crct-bx' });
    const pppAnsCrctHdng = this.action.createElem('h4', { class: 'hdng mn-stl ppp-ans-crct-hdng' }, 'Right answers:');
    const pppAnsCrctTxt = this.action.createElem('span', { class: 'hdng mn-stl ppp-ans-crct-txt' }, crctAns);
    const pppAnsErrBx = this.action.createElem('div', { class: 'ppp-ans-err-bx' });
    const pppAnsErrHdng = this.action.createElem('h4', { class: 'hdng mn-stl ppp-ans-err-hdng' }, 'Wrong answers:');
    const pppAnsErrTxt = this.action.createElem('span', { class: 'hdng mn-stl ppp-ans-err-txt' }, errAns);

    this.action.appEl(pppAnsCrctBx, pppAnsCrctHdng, pppAnsCrctTxt);
    this.action.appEl(pppAnsErrBx, pppAnsErrHdng, pppAnsErrTxt);
    this.action.appEl(pppImgBx, pppImg);
    this.action.appEl(pppAnsBx, pppAnsCrctBx, pppAnsErrBx);
    this.action.appEl(pppBx, pppClsBtn, pppImgBx, pppAnsBx);
    this.action.appEl(pppEl, pppBx);
    this.action.plyAud(aud);
    return pppEl;
  }
}
