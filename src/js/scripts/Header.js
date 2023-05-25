export default class Header {
  constructor(act) {
    this.act = act;
  }

  getHeaderEl() {
    const hdrEl = this.act.createElem('header', { class: 'hdr', id: 'hdr' });
    const hdrRw = this.act.createElem('div', { class: 'rw hdr-rw' });
    const hdrHdng = this.act.createElem('h1', { class: 'hdng mn-stl hdr-hdng' }, 'English for kids');

    this.act.appEl(hdrRw, hdrHdng);
    this.act.appEl(hdrEl, hdrRw);
    return hdrEl;
  }
}
