export default class Nv {
  constructor(dt, act) {
    this.dt = dt;
    this.act = act;

    this.nv = null;
    this.nvLst = null;
    this.itmsArr = null;
  }

  getNv(id) {
    this.nv = this.act.createElem('nav', { class: 'nv', id: 'nv' });
    this.nvLst = this.act.createElem('ul', { class: 'nv-lst' });
    const nvLstMnPgItm = this.act.createElem('li', { class: 'nv-lst-itm nv-lst-mnPg-itm', 'data-id': 'mnPg' });
    const nvLstMnPgItmTxt = this.act.createElem('span', { class: 'hdng mn-stl nv-lst-itm-txt nv-lst-mnPg-itm-txt' }, 'Main Page');
    this.act.appEl(nvLstMnPgItm, nvLstMnPgItmTxt);
    this.act.appEl(this.nvLst, nvLstMnPgItm);
    for (const el of this.dt) {
      const nvLstGmItm = this.act.createElem('li', { class: 'nv-lst-itm nv-lst-gm-itm', 'data-id': el.id });
      const nvLstGmItmTxt = this.act.createElem('span', { class: 'hdng mn-stl nv-lst-itm-txt nv-lst-gm-itm-txt' }, el.nm);
      this.act.appEl(nvLstGmItm, nvLstGmItmTxt);
      this.act.appEl(this.nvLst, nvLstGmItm);
    }
    const nvLstScrItm = this.act.createElem('li', { class: 'nv-lst-itm nv-lst-scr-itm', 'data-id': 'scr' });
    const nvLstScrItmTxt = this.act.createElem('span', { class: 'hdng mn-stl nv-lst-itm-txt nv-lst-scr-itm-txt' }, 'Score');
    this.act.appEl(nvLstScrItm, nvLstScrItmTxt);
    this.act.appEl(this.nvLst, nvLstScrItm);
    this.act.appEl(this.nv, this.nvLst);
    this.itmsArr = [...this.nvLst.querySelectorAll('.nv-lst-itm')];
    this.getItmActv(id);
    return this.nv;
  }

  toggleNv() {
    this.nv.classList.toggle('nv-actv');
  }

  getItmActv(id) {
    this.itmsArr.forEach((el) => el.querySelector('.nv-lst-itm-txt').classList.remove('itm-txt-actv'));
    this.act.getElByDataID(this.itmsArr, id).querySelector('.nv-lst-itm-txt').classList.add('itm-txt-actv');
  }
}
