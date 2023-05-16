export default class Mn {
  constructor(mnPg, gm, ppp, act) {
    this.mnPg = mnPg;
    this.gm = gm;
    this.ppp = ppp;
    this.act = act;

    this.mn = null;
    this.mnHdng = null;
    this.mnContBx = null;
    this.mnCont = null;
  }

  getMn(md) {
    this.mn = this.act.createElem('main', { class: 'mn', id: 'mn' });
    const mnRw = this.act.createElem('div', { class: 'rw mn-rw' });
    this.mnHdng = this.act.createElem('h2', { class: 'hdng mn-stl mn-hdng' }, 'Train & Play:');
    this.mnMdTxt = this.act.createElem('span', { class: 'hdng mn-stl mn-md-txt' });
    this.mnContBx = this.act.createElem('div', { class: 'mn-cont-bx' });
    this.mnCont = this.mnPg.getMnPg();
    this.act.appEl(this.mnHdng, this.mnMdTxt);
    this.act.appEl(this.mnContBx, this.mnCont);
    this.act.appEl(mnRw, this.mnHdng, this.mnContBx);
    this.act.appEl(this.mn, mnRw);
    this.toggleMnMd(md);
    return this.mn;
  }

  toggleMnMd(md) {
    md === 'Play' ? this.mnMdTxt.classList.add('mn-md-txt-gmMd') : this.mnMdTxt.classList.remove('mn-md-txt-gmMd');
    this.mnMdTxt.textContent = md;
    if (this.mnCont.id === 'mnPg') this.mnPg.toggleMnPgMd(md);
    if (/^game/.test(this.mnCont.id)) this.gm.toggleGmMd(md);
  }

  replMnCont(nwCont, md) {
    this.act.replEl(nwCont, this.mnCont);
    this.mnCont = nwCont;
    this.toggleMnMd(md);
  }
}
