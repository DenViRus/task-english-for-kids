export default class Gm {
  constructor(dt, act) {
    this.dt = dt;
    this.act = act;

    this.gmDt = null;
    this.gm = null;

    this.gmHdng = null;
    this.gmContBx = null;

    this.gmCrdsArr = null;
  }

  getGm(id) {
    this.gmDt = this.act.getElByID(this.dt, id);
    console.log(this.gmDt);

    this.gm = this.act.createElem('div', { class: 'gm', id: this.gmDt.id });
    const gmRw = this.act.createElem('div', { class: 'gmRw' });
    const gmHdngBx = this.act.createElem('div', { class: 'gm-hdng-bx' });
    const gmAnsBx = this.act.createElem('div', { class: 'gm-ans-bx' });

    const gmAnsRghtBx = this.act.createElem('div', { class: 'gm-ans-rght-bx' });
    const gmAnsRghtHdng = this.act.createElem('h4', { class: 'hdng gm-stl gm-ans-rght-hdng' }, 'Right answers:');
    const gmAnsRghtTxt = this.act.createElem('span', { class: 'hdng gm-stl gm-ans-rght-txt' }, 0);

    const gmAnsWrngBx = this.act.createElem('div', { class: 'gm-ans-wrng-bx' });
    const gmAnsWrngHdng = this.act.createElem('h4', { class: 'hdng gm-stl gm-ans-wrng-hdng' }, 'Wrong answers:');
    const gmAnsWrngTxt = this.act.createElem('span', { class: 'hdng gm-stl gm-ans-wrng-txt' }, 0);

    this.gmHdng = this.act.createElem('h3', { class: 'hdng gm-stl gm-hdng' }, this.gmDt.nm);

    const gmBtnBx = this.act.createElem('div', { class: 'gm-btn-bx' });
    const gmBtn = this.act.createElem('button', { class: 'gm-btn', type: 'button' }, 'Start game');

    this.act.appEl(gmAnsRghtHdng, gmAnsRghtTxt);
    this.act.appEl(gmAnsWrngHdng, gmAnsWrngTxt);
    this.act.appEl(gmAnsRghtBx, gmAnsRghtHdng);
    this.act.appEl(gmAnsWrngBx, gmAnsWrngHdng);
    this.act.appEl(gmAnsBx, gmAnsRghtBx, gmAnsWrngBx);
    this.act.appEl(gmBtnBx, gmBtn);
    this.act.appEl(gmHdngBx, this.gmHdng, gmBtnBx);

    this.gmContBx = this.act.createElem('div', { class: 'gm-cont-bx' });
    for (const el of this.gmDt) {
      this.act.appEl(this.gmContBx, this.getGmCrd(el));
    }

    this.act.appEl(gmRw, gmHdngBx, this.gmContBx);
    this.act.appEl(this.gm, gmRw);
    this.gmCrdsArr = [...this.gmContBx.querySelectorAll('.gmCrd')];
    return this.gm;
  }

  getGmCrd(dt) {

  }

  toggleGmMd(md) {

  }

  gmControl() {

  }
}


// Right Wrong answers
// Wrong
