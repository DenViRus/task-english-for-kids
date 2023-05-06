export default class Controller {
  constructor(bx, hdr, brg, nv, md, mn, ftr, act) {
    this.bx = bx;
    this.hdr = hdr;
    this.brg = brg;
    this.nv = nv;
    this.md = md;
    this.mn = mn;
    this.ftr = ftr;
    this.act = act;

    this.bxHdr = null;

    this.bxBrg = null;
    this.bxNv = null;
    this.bxMd = null;

    this.bxMn = null;

    this.bxFtr = null;
  }

  start() {
    this.bxHdr = this.hdr.getHdr();
    this.bxBrg = this.brg.getBrg();
    this.bxNv = this.nv.getNv();
    this.bxMd = this.md.getMd();
    this.bxMn = this.mn.getMn();
    this.bxFtr = this.ftr.getFtr();

    this.act.appEl(this.bx, this.bxHdr, this.bxBrg, this.bxNv, this.bxMd, this.bxMn, this.bxFtr);
    this.brg.toggleBrgMd(this.md.mdTxt.textContent);
    this.nv.getItmActv(this.mn.mnCont.id);
    this.mn.toggleMnMd(this.md.mdTxt.textContent);
  }

  brgLstnr1 = (evt) => {
    const trgt = evt.target;

    if (trgt.closest('.brg')) {
      evt.preventDefault();
      this.brg.toggleBrg();
      this.nv.toggleNv();
    }
  };

  mdLstnr1 = (evt) => {
    const trgt = evt.target;

    if (trgt.closest('.md')) {
      evt.preventDefault();
      this.md.toggleMd();
      this.brg.toggleBrgMd(this.md.mdTxt.textContent);
      this.mn.toggleMnMd(this.md.mdTxt.textContent);
    }
  };

  ctrlrControl() {
    this.start();
    this.mn.mnControl();

    document.addEventListener('click', this.brgLstnr1);
    document.addEventListener('click', this.mdLstnr1);
  }
}
