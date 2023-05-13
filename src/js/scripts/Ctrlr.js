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

  brgLstnr1 = (e) => {
    const trgt = e.target;

    if (trgt.closest('.brg')) {
      e.preventDefault();
      this.brg.toggleBrg();
      this.nv.toggleNv();
    }
  };

  mdLstnr1 = (e) => {
    const trgt = e.target;

    if (trgt.closest('.md')) {
      e.preventDefault();
      this.md.toggleMd();
      this.brg.toggleBrgMd(this.md.mdTxt.textContent);
      this.mn.toggleMnMd(this.md.mdTxt.textContent);
    }
  };

  mnLstnr1 = (e) => {
    const trgt = e.target;

    if (trgt.closest('.mnPgCrd')) {
      e.preventDefault();
      this.mn.replMnCont(this.mn.gm.getGm(trgt.closest('.mnPgCrd').id), this.md.mdTxt.textContent);
    }

    if (trgt.closest('.gm-strt-btn')) {
      e.preventDefault();
      this.mn.gm.gmStrtGm();
    }

    if (trgt.closest('.gmCrd') && !trgt.closest('.gmCrd-btn')) {
      e.preventDefault();
      this.mn.gm.getGmMdRct(this.md.mdTxt.textContent, trgt.closest('.gmCrd').id);
    }

    if (trgt.closest('.gmCrd-btn')) {
      e.preventDefault();
      this.mn.gm.rttGmCrd(trgt.closest('.gmCrd').id);
    }
  };

  mnLstnr2 = (e) => {
    const trgt = e.target;
    const rltdTrgt = e.relatedTarget;

    if (trgt.classList.contains('gmCrd-rw') && trgt.closest('.gmCrd-rtt') && !rltdTrgt.closest('.gmCrd-rtt')) {
      e.preventDefault();
      this.mn.gm.rttGmCrd(trgt.closest('.gmCrd-rtt').id);
    } else if ((trgt.classList.contains('gm-cont-bx') || trgt.closest('.gm-cont-bx')) && (rltdTrgt.classList.contains('gmCrd-rw') && rltdTrgt.closest('.gmCrd'))) {
      e.preventDefault();
      this.mn.gm.checkRttGmCrd(rltdTrgt.closest('.gmCrd').id);
    } else if ((trgt.classList.contains('gm-cont-bx') || trgt.closest('.gm-cont-bx')) && !rltdTrgt.closest('.gm-cont-bx')) {
      e.preventDefault();
      this.mn.gm.checkRttGmCrd();
    }
  };

  nvLstnr1 = (e) => {
    const trgt = e.target;

    if (this.bxNv.classList.contains('nv-actv') && !trgt.closest('.nv') && !trgt.closest('.brg') && !trgt.closest('.md')) {
      e.preventDefault();
      this.brg.toggleBrg();
      this.nv.toggleNv();
    }

    if (trgt.closest('.nv-lst-mnPg-itm-txt')) {
      e.preventDefault();
      this.mn.replMnCont(this.mn.mnPg.getMnPg(), this.md.mdTxt.textContent);
      this.nv.getItmActv(this.mn.mnCont.id);
      this.brg.toggleBrg();
      this.nv.toggleNv();
    }

    if (trgt.closest('.nv-lst-gm-itm-txt')) {
      e.preventDefault();
      this.mn.replMnCont(this.mn.gm.getGm(trgt.closest('.nv-lst-gm-itm').dataset.id), this.md.mdTxt.textContent);
      this.nv.getItmActv(this.mn.mnCont.id);
      this.brg.toggleBrg();
      this.nv.toggleNv();
    }
  };

  ctrlrControl() {
    this.start();
    document.addEventListener('click', this.brgLstnr1);
    document.addEventListener('click', this.mdLstnr1);
    document.addEventListener('click', this.mnLstnr1);
    document.addEventListener('click', this.nvLstnr1);
    document.addEventListener('mouseout', this.mnLstnr2);
  }
}
