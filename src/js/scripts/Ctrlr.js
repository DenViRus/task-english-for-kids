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
    this.bxMd = this.md.getMd();
    this.bxBrg = this.brg.getBrg(this.md.mdTxt.textContent);
    this.bxMn = this.mn.getMn(this.md.mdTxt.textContent);
    this.bxNv = this.nv.getNv(this.mn.mnCont.id);
    this.bxFtr = this.ftr.getFtr();
    this.act.appEl(this.bx, this.bxHdr, this.bxBrg, this.bxNv, this.bxMd, this.bxMn, this.bxFtr);
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

  mnLstnr1 = (evt) => {
    const trgt = evt.target;

    if (trgt.closest('.mnPgCrd')) {
      evt.preventDefault();
      this.mn.replMnCont(this.mn.gm.getGm(trgt.closest('.mnPgCrd').id), this.md.mdTxt.textContent);
    }
  };

  nvLstnr1 = (evt) => {
    const trgt = evt.target;

    if (trgt.closest('.nv-lst-mnPg-itm')) {
      evt.preventDefault();
      this.mn.replMnCont(this.mn.mnPg.getMnPg(), this.md.mdTxt.textContent);
      this.nv.getItmActv(this.mn.mnCont.id);
    }

    if (trgt.closest('.nv-lst-gm-itm')) {
      evt.preventDefault();
      this.mn.replMnCont(this.mn.gm.getGm(trgt.closest('.nv-lst-gm-itm').dataset.id), this.md.mdTxt.textContent);
      this.nv.getItmActv(this.mn.mnCont.id);
    }
  };

  ctrlrControl() {
    this.start();
    document.addEventListener('click', this.brgLstnr1);
    document.addEventListener('click', this.mdLstnr1);
    document.addEventListener('click', this.mnLstnr1);
    document.addEventListener('click', this.nvLstnr1);
  }
}
