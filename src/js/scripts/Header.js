export default class Header {
  constructor(act) {
    this.act = act;

    this.headerEl = null;
  }

  getHeaderEl() {
    this.headerEl = this.act.createElem('header', { class: 'hdr', id: 'hdr' });
    const headerElRow = this.act.createElem('div', { class: 'rw hdr-rw' });
    const headerElHdng = this.act.createElem('h1', { class: 'hdng mn-stl hdr-hdng' }, 'English for kids');

    this.act.appEl(headerElRow, headerElHdng);
    this.act.appEl(this.headerEl, headerElRow);
    return this.headerEl;
  }
}
