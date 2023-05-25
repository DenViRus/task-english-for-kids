export default class Controller {
  constructor(box, header, burger, navigation, mode, main, mainPage, game, popup, score, footer, projectData, defaultData, action) {
    this.box = box;
    this.header = header;
    this.burger = burger;
    this.navigation = navigation;
    this.mode = mode;
    this.main = main;
    this.mainPage = mainPage;
    this.game = game;
    this.popup = popup;
    this.score = score;
    this.footer = footer;
    this.projectData = projectData;
    this.defaultData = defaultData;
    this.action = action;
  }

  start() {
    const hdr = this.header.getHeaderEl();
    const md = this.mode.getModeEl();
    const brg = this.burger.getBurgerEl(this.mode.modeText.textContent);
    const mn = this.main.getMainEl(this.projectData, this.mode.modeText.textContent);
    const nav = this.navigation.getNavigationEl(this.projectData, this.main.mainContent.id);
    const ftr = this.footer.getFooterEl();
    this.score.getScoreData(this.projectData);
    this.action.appEl(this.box, hdr, brg, nav, md, mn, ftr);
  }

  listener1 = (e) => {
    const trgt = e.target;

    if (trgt.closest('.brg')) {
      e.preventDefault();
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }

    if (trgt.closest('.md')) {
      e.preventDefault();
      this.mode.toggleMode();
      this.burger.toggleBurgerMode(this.mode.modeText.textContent);
      this.main.toggleMainMode(this.mode.modeText.textContent);
    }

    if (trgt.closest('.mnPgCrd')) {
      e.preventDefault();
      this.main.replaceMainContent(this.game.getGameEl(this.action.getElByID(this.projectData, trgt.closest('.mnPgCrd').id)), this.mode.modeText.textContent);
    }

    if (trgt.closest('.gm-strt-btn')) {
      e.preventDefault();
      this.game.startGame();
      this.mode.toggleModeDisable();
      this.burger.toggleBurgerDisable();
    }

    if (trgt.closest('.gmCrd') && !trgt.closest('.gmCrd-btn')) {
      e.preventDefault();
      this.game.showGameModeAction(this.defaultData, this.mode.modeText.textContent, trgt.closest('.gmCrd').id);

      if (this.mode.modeText.textContent === 'Play' && this.game.gameButton.id === 'gmRptBtn') {
        if (parseInt(this.game.gameAnswersCorrectText.textContent, 10) === 0 || parseInt(this.game.gameAnswersErrorText.textContent, 10) === 0) {
          this.main.replaceMainContent(this.popup.getPopupEl(this.defaultData, {
            res: `${(parseInt(this.game.gameAnswersCorrectText.textContent, 10) === 0) ? 'wn' : 'ls'}`,
            crctAns: `${this.game.gameCardsDataArr.length - parseInt(this.game.gameAnswersCorrectText.textContent, 10)}`,
            errAns: `${Math.floor(this.game.gameCardsDataArr.length / 2) - parseInt(this.game.gameAnswersErrorText.textContent, 10)}`,
          }), this.mode.modeText.textContent);
          this.mode.toggleModeDisable();
          this.burger.toggleBurgerDisable();
        }
      }
    }

    if (trgt.closest('.gmCrd-btn')) {
      e.preventDefault();
      this.game.showTransformGameCard(trgt.closest('.gmCrd').id);
    }

    if (trgt.closest('.gm-rpt-btn')) {
      e.preventDefault();
      this.game.repeatWord();
    }

    if (trgt.closest('.ppp-cls-btn')) {
      e.preventDefault();
      this.main.replaceMainContent(this.mainPage.getMainPageEl(this.projectData), this.mode.modeText.textContent);
      this.navigation.getItemActive(this.main.mainContent.id);
    }

    if (this.box.querySelector('.nv-actv') && !trgt.closest('.nv') && !trgt.closest('.brg') && !trgt.closest('.md')) {
      e.preventDefault();
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }

    if (trgt.closest('.nv-lst-mnPg-itm-txt')) {
      e.preventDefault();
      this.main.replaceMainContent(this.mainPage.getMainPageEl(this.projectData), this.mode.modeText.textContent);
      this.navigation.getItemActive(this.main.mainContent.id);
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }

    if (trgt.closest('.nv-lst-gm-itm-txt')) {
      e.preventDefault();
      this.main.replaceMainContent(this.game.getGameEl(this.action.getElByID(this.projectData, trgt.closest('.nv-lst-gm-itm').dataset.id)), this.mode.modeText.textContent);
      this.navigation.getItemActive(this.main.mainContent.id);
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }

    if (trgt.closest('.nv-lst-scr-itm-txt')) {
      e.preventDefault();

      this.main.replaceMainContent(this.score.getScoreEl(this.score.scoreData), this.mode.modeText.textContent);
      this.navigation.getItemActive(this.main.mainContent.id);
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }

    if (trgt.closest('.tbl-hdr-btn')) {
      e.preventDefault();
      this.score.replaceTableBody(this.score.getTableBody(this.score.scoreData, trgt.id));
    }

    if (trgt.closest('.scr-rst-btn')) {
      e.preventDefault();
      this.score.removeSaveScoreData();
      this.score.sortButtonsArr.forEach((el) => {
        el.classList.remove('tbl-hdr-btn-srt');
        el.classList.remove('tbl-hdr-btn-rvrs');
      });
      this.score.replaceTableBody(this.score.getTableBody(this.score.getScoreData(this.projectData)));
    }

    if (trgt.closest('.scr-rpt-btn')) {
      e.preventDefault();
      this.main.replaceMainContent(this.game.getGameEl(this.score.getRepeatGame(this.projectData)), this.mode.modeText.textContent);
    }
  };

  listener2 = (e) => {
    const trgt = e.target;
    const rltdTrgt = e.relatedTarget;

    if (!rltdTrgt) return; // throw an error when switching to another window  )))
    if (trgt.classList.contains('gmCrd-rw') && trgt.closest('.gmCrd-rtt') && !rltdTrgt.closest('.gmCrd-rtt')) {
      e.preventDefault();
      this.game.showTransformGameCard(trgt.closest('.gmCrd-rtt').id);
    } else if ((trgt.classList.contains('gm-cont-bx') || trgt.closest('.gm-cont-bx')) && (rltdTrgt.classList.contains('gmCrd-rw') && rltdTrgt.closest('.gmCrd'))) {
      e.preventDefault();
      this.game.checkTransformGameCard(rltdTrgt.closest('.gmCrd').id);
    } else if ((trgt.classList.contains('gm-cont-bx') || trgt.closest('.gm-cont-bx')) && !rltdTrgt.closest('.gm-cont-bx')) {
      e.preventDefault();
      this.game.checkTransformGameCard();
    }
  };

  control() {
    this.start();

    document.addEventListener('click', this.listener1);
    document.addEventListener('mouseout', this.listener2);
  }
}
