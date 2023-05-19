export default class Navigation {
  constructor(projectData, action) {
    this.projectData = projectData;
    this.action = action;

    this.navigationEl = null;
    this.navigationLst = null;
    this.itemsArr = null;
  }

  getNavigationEl(id) {
    this.navigationEl = this.action.createElem('nav', { class: 'nv', id: 'nv' });
    this.navigationLst = this.action.createElem('ul', { class: 'nv-lst' });
    const nvLstMnPgItm = this.action.createElem('li', { class: 'nv-lst-itm nv-lst-mnPg-itm', 'data-id': 'mnPg' });
    const nvLstMnPgItmTxt = this.action.createElem('span', { class: 'hdng mn-stl nv-lst-itm-txt nv-lst-mnPg-itm-txt' }, 'Main Page');
    this.action.appEl(nvLstMnPgItm, nvLstMnPgItmTxt);
    this.action.appEl(this.navigationLst, nvLstMnPgItm);
    for (const el of this.projectData) {
      const nvLstGmItm = this.action.createElem('li', { class: 'nv-lst-itm nv-lst-gm-itm', 'data-id': el.id });
      const nvLstGmItmTxt = this.action.createElem('span', { class: 'hdng mn-stl nv-lst-itm-txt nv-lst-gm-itm-txt' }, el.nm);
      this.action.appEl(nvLstGmItm, nvLstGmItmTxt);
      this.action.appEl(this.navigationLst, nvLstGmItm);
    }
    const nvLstScrItm = this.action.createElem('li', { class: 'nv-lst-itm nv-lst-scr-itm', 'data-id': 'scr' });
    const nvLstScrItmTxt = this.action.createElem('span', { class: 'hdng mn-stl nv-lst-itm-txt nv-lst-scr-itm-txt' }, 'Score');
    this.action.appEl(nvLstScrItm, nvLstScrItmTxt);
    this.action.appEl(this.navigationLst, nvLstScrItm);
    this.action.appEl(this.navigationEl, this.navigationLst);
    this.itemsArr = [...this.navigationLst.querySelectorAll('.nv-lst-itm')];
    this.getItemActive(id);
    return this.navigationEl;
  }

  toggleNavigationActive() {
    this.navigationEl.classList.toggle('nv-actv');
  }

  getItemActive(id) {
    this.itemsArr.forEach((el) => el.querySelector('.nv-lst-itm-txt').classList.remove('itm-txt-actv'));
    this.action.getElByDataID(this.itemsArr, id).querySelector('.nv-lst-itm-txt').classList.add('itm-txt-actv');
  }
}
