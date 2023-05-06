export default class Gm {
  constructor(dt, act) {
    this.dt = dt;
    this.act = act;

    this.gmDt = null;
    this.gm = null;
    this.gmHdng = null;
    this.gmContBx = null;

    this.mnPgCrdsArr = null;
  }

  getGm(id) {
    this.gmDt = this.act.getElByID(this.dt, id);
    console.log(this.gmDt);

    this.gm = this.act.createElem('div', { class: 'gm', id: this.gmDt.id });

    


    return this.gm;
  }

  getGmCrd(dt) {

  }

  toggleGmMd(md) {

  }

  gmControl() {

  }
}
