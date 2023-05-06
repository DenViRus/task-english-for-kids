export default class Mn {
  constructor(mnPg, gm, act) {
    this.mnPg = mnPg;
    this.gm = gm;
    this.act = act;

    this.mn = null;
    this.mnHdng = null;
    this.mnContBx = null;
    this.mnCont = null;
    this.newMCont = null;
  }

  getMn() {
    this.mn = this.act.createElem("main", { class: "mn", id: "mn" });
    const mnRw = this.act.createElem("div", { class: "rw mn-rw" });
    this.mnHdng = this.act.createElem("h2", { class: "hdng mn-stl mn-hdng" }, "Train & Play:");
    this.mnMdTxt = this.act.createElem( "span", { class: "hdng mn-stl mn-md-txt" }, "Train");
    this.mnContBx = this.act.createElem("div", { class: "mn-cont-bx" });
    this.mnCont = this.mnPg.getMnPg();
    this.act.appEl(this.mnHdng, this.mnMdTxt);
    this.act.appEl(this.mnContBx, this.mnCont);
    this.act.appEl(mnRw, this.mnHdng, this.mnContBx);
    this.act.appEl(this.mn, mnRw);
    return this.mn;
  }

  toggleMnMd(md) {
    md === 'Play' ? this.mnMdTxt.classList.add('mn-md-txt-gmMd') : this.mnMdTxt.classList.remove('mn-md-txt-gmMd');
    this.mnMdTxt.textContent = md;
    if (this.mnCont.id === 'mnPg') this.mnPg.toggleMnPgMd(md);
  }

  getBxMnPg() {
    return this.mnPg.getMnPg();
  }

  replMnCont() {
    this.act.replEl(this.newMCont, this.mnCont);
    this.mnCont = this.newMCont;
    this.newMCont = null;
  }

  mnContLstnr1 = (evt) => {
    const trgt = evt.target;

    if (trgt.closest('.mnPgCrd')) {
      evt.preventDefault();

      this.newMCont = this.gm.getGm(trgt.closest('.mnPgCrd').id);
      console.log(this.newMCont);
    }
  };

  mnControl() {

    document.addEventListener('click', this.mnContLstnr1);

  }
}
