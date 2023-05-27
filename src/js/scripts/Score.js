export default class Score {
  constructor(action) {
    this.action = action;

    this.scoreData = null;
    this.tableBody = null;
    this.sortButtonsArr = null;
  }

  getScoreData(dt) {
    this.scoreData = (this.getSaveScoreData()) ? this.getSaveScoreData()
      : [].concat(...dt.map((el) => el.dt)).map(({ id, en, ru }) => ({
        id, en, ru, crct: 0, err: 0, prcnt: 0,
      }));
    return this.scoreData;
  }

  getScoreEl(scrDt) {
    const scrEl = this.action.createElem('div', { class: 'scr', id: 'scr' });
    const scrRw = this.action.createElem('div', { class: 'scr-rw' });
    const scrHdngBx = this.action.createElem('div', { class: 'scr-hdng-bx' });
    const scrHdng = this.action.createElem('h3', { class: 'hdng scr-stl scr-hdng' }, 'Score');
    const scrBtnBx = this.action.createElem('div', { class: 'scr-btn-bx' });
    const scrRstBtn = this.action.createElem('button', { class: 'hdng scr-stl scr-rst-btn', type: 'button', id: 'scrRstBtn' }, 'RESET');
    const scrRptBtn = this.action.createElem('button', { class: 'hdng scr-stl scr-rpt-btn', type: 'button', id: 'scrRptBtn' }, 'REPEAT');
    const tblBx = this.action.createElem('div', { class: 'tbl-bx' });
    const tbl = this.getTable(scrDt);
    this.action.appEl(scrHdngBx, scrHdng);
    this.action.appEl(scrBtnBx, scrRstBtn, scrRptBtn);
    this.action.appEl(tblBx, tbl);
    this.action.appEl(scrRw, scrHdngBx, scrBtnBx, tblBx);
    this.action.appEl(scrEl, scrRw);
    return scrEl;
  }

  getTable(tblDt) {
    const tbl = this.action.createElem('table', { class: 'tbl' });
    this.action.appEl(tbl, this.getTableHeader(), this.tableBody = this.getTableBody(tblDt));
    return tbl;
  }

  getTableHeader() {
    const tblHdr = this.action.createElem('thead', { class: 'tbl-hdr', id: 'tblHdr' });
    const tblHdrRw = this.action.createElem('tr', { class: 'tbl-hdr-rw' });
    [['en', 'english'], ['ru', 'russian'], ['crct', 'correct'], ['err', 'error'], ['prcnt', 'percent']]
      .forEach((el) => {
        const tblHdrItm = this.action.createElem('th', { class: 'tbl-hdr-itm' });
        const tblHdrBtn = this.action.createElem('button', { class: `hdng scr-stl tbl-hdr-btn tbl-hdr-${el[0]}-btn`, type: 'button', id: `${el[0]}Btn` }, el[1]);
        this.action.appEl(tblHdrItm, tblHdrBtn);
        this.action.appEl(tblHdrRw, tblHdrItm);
      });
    this.action.appEl(tblHdr, tblHdrRw);
    this.sortButtonsArr = [...tblHdr.querySelectorAll('.tbl-hdr-btn')];
    return tblHdr;
  }

  getTableBody(tblDt, id = 'enBtn') {
    this.getSortButton(tblDt, id);

    const tblBd = this.action.createElem('tbody', { class: 'tbl-bd', id: 'tblBd' });
    tblDt.forEach((el) => {
      const tblBdRw = this.action.createElem('tr', { class: 'tbl-bd-rw' });
      const tblBdEngItm = this.action.createElem('td', { class: 'tbl-bd-itm' });
      this.action.appEl(tblBdEngItm, this.action.createElem('span', { class: 'hdng scr-stl tbl-bd-txt' }, el.en));
      const tblBdRusItm = this.action.createElem('td', { class: 'tbl-bd-itm' });
      this.action.appEl(tblBdRusItm, this.action.createElem('span', { class: 'hdng scr-stl tbl-bd-txt' }, el.ru));
      const tblBdCrctItm = this.action.createElem('td', { class: 'tbl-bd-itm' });
      this.action.appEl(tblBdCrctItm, this.action.createElem('span', { class: 'hdng scr-stl tbl-bd-txt' }, el.crct));
      const tblBdErrItm = this.action.createElem('td', { class: 'tbl-bd-itm' });
      this.action.appEl(tblBdErrItm, this.action.createElem('span', { class: 'hdng scr-stl tbl-bd-txt' }, el.err));
      const tblBdPrcntItm = this.action.createElem('td', { class: 'tbl-bd-itm' });
      this.action.appEl(tblBdPrcntItm, this.action.createElem('span', { class: 'hdng scr-stl tbl-prcnt-txt' }, `${el.prcnt}%`));
      this.action.appEl(tblBdRw, tblBdEngItm, tblBdRusItm, tblBdCrctItm, tblBdErrItm, tblBdPrcntItm);
      this.action.appEl(tblBd, tblBdRw);
    });
    return tblBd;
  }

  getSortButton(tblDt, id) {
    this.sortButtonsArr.forEach((el) => {
      if (el.id === id) {
        if (el.classList.contains('tbl-hdr-btn-srt')) {
          el.classList.remove('tbl-hdr-btn-srt');
          el.classList.add('tbl-hdr-btn-rvrs');
          tblDt.reverse();
        } else if (el.classList.contains('tbl-hdr-btn-rvrs')) {
          el.classList.remove('tbl-hdr-btn-rvrs');
          el.classList.add('tbl-hdr-btn-srt');
          this.action.srtArr(tblDt, id.replace(/...$/, ''));
        } else {
          el.classList.remove('tbl-hdr-btn-rvrs');
          el.classList.add('tbl-hdr-btn-srt');
          this.action.srtArr(tblDt, id.replace(/...$/, ''));
        }
      } else {
        el.classList.remove('tbl-hdr-btn-srt');
        el.classList.remove('tbl-hdr-btn-rvrs');
      }
    });
  }

  replaceTableBody(nwTblBd) {
    this.action.replEl(nwTblBd, this.tableBody);
    this.tableBody = nwTblBd;
  }

  plusCorrectData(id) {
    const dt = this.action.getElByID(this.scoreData, id);
    dt.crct++;
    dt.prcnt = Math.round((dt.crct + dt.err !== 0) ? (100 / (dt.crct + dt.err)) * dt.crct : 0);
    this.saveScoreData();
  }

  plusErrorData(id) {
    const dt = this.action.getElByID(this.scoreData, id);
    dt.err++;
    dt.prcnt = Math.round((dt.crct + dt.err !== 0) ? (100 / (dt.crct + dt.err)) * dt.crct : 0);
    this.saveScoreData();
  }

  getRepeatGame(dt) {
    this.action.srtArr(this.scoreData, 'err');
    return {
      id: 'rptWrds',
      nm: 'Repeat words',
      dt: [].concat(...dt.map((el) => el.dt)).filter((el) => this.scoreData.map(({ id }) => id).slice(-8).includes(el.id)),
    };
  }

  saveScoreData() {
    this.action.setStrgDt('scoreData', this.scoreData);
  }

  getSaveScoreData() {
    return this.action.getStrgDt('scoreData');
  }

  removeSaveScoreData() {
    this.action.rmvStrgDt('scoreData');
  }
}
