export default class Game {
  constructor(projectData, defaultData, action) {
    this.projectData = projectData;
    this.defaultData = defaultData;
    this.action = action;

    this.gameData = null;
    this.gameCardsDataArr = null;
    this.gameEl = null;
    this.gameAnswersBox = null;
    this.gameAnswersCorrectText = null;
    this.gameAnswersErrorText = null;
    this.gameHeading = null;
    this.gameButton = null;
    this.gameContentBox = null;
    this.gameCardsArr = null;
    this.gameCardsDataRandomArr = null;
    this.gameRandomCardData = null;
  }

  // UI logic

  getGameEl(id) {
    this.gameData = this.action.getElByID(this.projectData, id);
    this.gameCardsDataArr = this.gameData.dt;
    this.gameEl = this.action.createElem('div', { class: 'gm', id: this.gameData.id });
    const gmRw = this.action.createElem('div', { class: 'gmRw' });
    const gmHdngBx = this.action.createElem('div', { class: 'gm-hdng-bx' });
    this.gameHeading = this.action.createElem('h3', { class: 'hdng gm-stl gm-hdng' }, this.gameData.nm);
    this.action.appEl(gmHdngBx, this.gameHeading);
    this.gameContentBox = this.action.createElem('div', { class: 'gm-cont-bx' });
    for (const el of this.gameCardsDataArr) {
      this.action.appEl(this.gameContentBox, this.getGameCardEl(el));
    }
    this.action.appEl(gmRw, gmHdngBx, this.gameContentBox);
    this.action.appEl(this.gameEl, gmRw);
    this.gameCardsArr = [...this.gameContentBox.querySelectorAll('.gmCrd')];
    return this.gameEl;
  }

  getGameAnswersBoxEl() {
    this.gameAnswersBox = this.action.createElem('div', { class: 'gm-ans-bx' });
    const gmAnsCrctBx = this.action.createElem('div', { class: 'gm-ans-crct-bx' });
    const gmAnsCrctHdng = this.action.createElem('h5', { class: 'hdng gm-stl gm-ans-crct-hdng' }, 'Right answers:');
    this.gameAnswersCorrectText = this.action.createElem('span', { class: 'hdng gm-stl gm-ans-crct-txt' }, 0);
    const gmAnsErrBx = this.action.createElem('div', { class: 'gm-ans-err-bx' });
    const gmAnsErrHdng = this.action.createElem('h5', { class: 'hdng gm-stl gm-ans-err-hdng' }, 'Wrong answers:');
    this.gameAnswersErrorText = this.action.createElem('span', { class: 'hdng gm-stl gm-ans-err-txt' }, 0);
    this.action.appEl(gmAnsCrctBx, gmAnsCrctHdng, this.gameAnswersCorrectText);
    this.action.appEl(gmAnsErrBx, gmAnsErrHdng, this.gameAnswersErrorText);
    this.action.appEl(this.gameAnswersBox, gmAnsCrctBx, gmAnsErrBx);
    return this.gameAnswersBox;
  }

  getGameStartButtonEl() {
    this.gameButton = this.action.createElem('button', { class: 'hdng gm-stl gm-strt-btn', type: 'button', id: 'gmStrtBtn' }, 'START');
    return this.gameButton;
  }

  getGameCardEl(dt) {
    const gmCrd = this.action.createElem('div', { class: 'gmCrd', id: dt.id });
    const gmCrdRw = this.action.createElem('div', { class: 'gmCrd-rw' });
    const gmCrdImgBx = this.action.createElem('div', { class: 'gmCrd-img-bx' });
    const gmCrdImg = this.action.createElem('img', { class: 'gmCrd-img', src: dt.img, alt: `word ${dt.en} image` });
    this.action.appEl(gmCrdImgBx, gmCrdImg);
    this.action.appEl(gmCrdRw, gmCrdImgBx);
    this.action.appEl(gmCrd, gmCrdRw);
    return gmCrd;
  }

  getGameCardElContentBox(dt) {
    const gmCrdContBx = this.action.createElem('div', { class: 'gmCrd-cont-bx' });
    const gmCrdHdng = this.action.createElem('h4', { class: 'hdng gm-stl gmCrd-hdng' }, dt.en);
    const gmCrdbtn = this.action.createElem('button', { class: 'hdng gm-stl gmCrd-btn', type: 'button' });
    this.action.appEl(gmCrdContBx, gmCrdHdng, gmCrdbtn);
    return gmCrdContBx;
  }

  toggleGameMode(md) {
    if (md === 'Play') {
      this.gameHeading.classList.add('gm-hdng-gmMd');
      this.action.beforEl(this.gameHeading, this.getGameAnswersBoxEl());
      this.action.afterEl(this.gameHeading, this.getGameStartButtonEl());
      this.gameCardsArr.forEach((el) => {
        el.querySelector('.gmCrd-rw').classList.add('gmCrd-rw-gmMd');
        el.querySelector('.gmCrd-img-bx').classList.add('gmCrd-img-bx-gmMd');
        el.querySelector('.gmCrd-img').classList.add('gmCrd-img-gmMd');
        if (el.querySelector('.gmCrd-cont-bx')) el.querySelector('.gmCrd-cont-bx').remove();
      });
    } else if (md === 'Train') {
      this.gameHeading.classList.remove('gm-hdng-gmMd');
      if (this.gameAnswersBox && this.gameButton) {
        this.gameAnswersBox.remove();
        this.gameButton.remove();
        this.gameAnswersBox = null;
        this.gameButton = null;
        this.gameAnswersCorrectText = null;
        this.gameAnswersErrorText = null;
      }
      this.gameCardsArr.forEach((el, i) => {
        el.querySelector('.gmCrd-rw').classList.remove('gmCrd-rw-gmMd');
        el.querySelector('.gmCrd-img-bx').classList.remove('gmCrd-img-bx-gmMd');
        el.querySelector('.gmCrd-img').classList.remove('gmCrd-img-gmMd');
        this.action.appEl(el.querySelector('.gmCrd-rw'), this.getGameCardElContentBox(this.gameCardsDataArr[i]));
      });
    }
  }

  showGameModeAction(md, id) {
    if (md === 'Train') {
      this.playGameCardAudio(id);
    }
    if (md === 'Play') {
      this.togglePause();
      if (this.gameCardsDataRandomArr && this.gameRandomCardData) {
        if (this.gameAnswersCorrectText.textContent > 0 && this.gameAnswersErrorText.textContent > 0) {
          (this.gameRandomCardData.id === id) ? this.correctAction(id) : this.errorAction(id);
        }
      }
      this.togglePause();
    }
  }

  // Train logic
  playGameCardAudio(id) {
    this.action.plyAud(this.action.getElByID(this.gameCardsDataArr, id).aud);
  }

  showTransformGameCard(id) {
    if (this.action.getElByID(this.gameCardsArr, id).classList.contains('gmCrd-rtt')) {
      this.action.getElByID(this.gameCardsArr, id).classList.remove('gmCrd-rtt');
      setTimeout(() => { this.action.getElByID(this.gameCardsArr, id).querySelector('.gmCrd-hdng').textContent = this.action.getElByID(this.gameCardsDataArr, id).en; }, 450);
    } else {
      this.action.getElByID(this.gameCardsArr, id).classList.add('gmCrd-rtt');
      setTimeout(() => { this.action.getElByID(this.gameCardsArr, id).querySelector('.gmCrd-hdng').textContent = this.action.getElByID(this.gameCardsDataArr, id).ru; }, 450);
    }
  }

  checkTransformGameCard(id) {
    this.gameCardsArr.filter((el) => el.classList.contains('gmCrd-rtt')).forEach((el) => {
      if (el.id !== id) {
        const needEl = el;
        needEl.classList.remove('gmCrd-rtt');
        setTimeout(() => { needEl.querySelector('.gmCrd-hdng').textContent = this.action.getElByID(this.gameCardsDataArr, needEl.id).en; }, 450);
      } else if (!id) {
        const needEl = el;
        needEl.classList.remove('gmCrd-rtt');
        setTimeout(() => { needEl.querySelector('.gmCrd-hdng').textContent = this.action.getElByID(this.gameCardsDataArr, needEl.id).en; }, 450);
      }
    });
  }

  // Game logic
  togglePause() {
    this.gameCardsArr.forEach((el) => el.classList.toggle('gmCrd-dsbl'));
  }

  repeatWord() {
    if (this.gameRandomCardData) this.action.plyAud(this.gameRandomCardData.aud);
  }

  getGameRepeatButtonEl() {
    const rptBtn = this.action.createElem('button', { class: 'hdng gm-stl gm-rpt-btn', type: 'button', id: 'gmRptBtn' }, 'REPEAT');
    this.action.replEl(rptBtn, this.gameButton);
    this.gameButton = rptBtn;
  }

  getGameRandomCardData(arr) {
    return arr[this.action.getRndItm(0, arr.length - 1)];
  }

  playRandomCardAudio(arr) {
    this.gameRandomCardData = this.getGameRandomCardData(arr);
    this.action.plyAud(this.gameRandomCardData.aud);
  }

  startGame() {
    this.gameAnswersCorrectText.textContent = this.gameCardsDataArr.length;
    this.gameAnswersErrorText.textContent = Math.floor(this.gameCardsDataArr.length / 2);
    this.getGameRepeatButtonEl();
    this.gameCardsDataRandomArr = this.action.getRndArr(this.gameCardsDataArr);
    this.gameRandomCardData = this.getGameRandomCardData(this.gameCardsDataRandomArr);
    this.action.plyAud(this.gameRandomCardData.aud);
  }

  finishGame() {
    this.gameCardsDataRandomArr = null;
    this.gameRandomCardData = null;
  }

  correctAction(id) {
    this.action.rmvElById(this.gameCardsDataRandomArr, id);
    this.action.getElByID(this.gameCardsArr, id).classList.remove('gmCrd-errAns');
    this.action.getElByID(this.gameCardsArr, id).querySelector('.gmCrd-rw').classList.remove('gmCrd-rw-gmMd-errAns');
    this.action.getElByID(this.gameCardsArr, id).classList.add('gmCrd-crctAns');
    this.action.getElByID(this.gameCardsArr, id).querySelector('.gmCrd-rw').classList.add('gmCrd-rw-gmMd-crctAns');
    this.gameAnswersCorrectText.textContent = parseInt(this.gameAnswersCorrectText.textContent, 10) - 1;
    this.action.plyAud(this.defaultData.crctAud);
    (parseInt(this.gameAnswersCorrectText.textContent, 10) > 0) ? this.playRandomCardAudio(this.gameCardsDataRandomArr) : this.finishGame();
  }

  errorAction(id) {
    this.action.getElByID(this.gameCardsArr, id).classList.add('gmCrd-errAns');
    this.action.getElByID(this.gameCardsArr, id).querySelector('.gmCrd-rw').classList.add('gmCrd-rw-gmMd-errAns');
    this.gameAnswersErrorText.textContent = parseInt(this.gameAnswersErrorText.textContent, 10) - 1;
    this.action.plyAud(this.defaultData.errAud);
    if (parseInt(this.gameAnswersErrorText.textContent, 10) === 0) this.finishGame();
  }
}
