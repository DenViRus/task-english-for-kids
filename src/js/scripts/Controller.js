export default class Controller {
  constructor(box, header, burger, navigation, mode, main, footer, action) {
    this.box = box;
    this.header = header;
    this.burger = burger;
    this.navigation = navigation;
    this.mode = mode;
    this.main = main;
    this.footer = footer;
    this.action = action;

    this.headerEl = null;
    this.burgerEl = null;
    this.navigationEl = null;
    this.modeEl = null;
    this.mainEl = null;
    this.footerEl = null;
  }

  start() {
    this.headerEl = this.header.getHeaderEl();
    this.modeEl = this.mode.getModeEl();
    this.burgerEl = this.burger.getBurgerEl(this.mode.modeText.textContent);
    this.mainEl = this.main.getMainEl(this.mode.modeText.textContent);
    this.navigationEl = this.navigation.getNavigationEl(this.main.mainContent.id);
    this.footerEl = this.footer.getFooterEl();
    this.action.appEl(this.box, this.headerEl, this.burgerEl, this.navigationEl, this.modeEl, this.mainEl, this.footerEl);
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
      this.main.replaceMainContent(this.main.game.getGameEl(trgt.closest('.mnPgCrd').id), this.mode.modeText.textContent);
    }

    if (trgt.closest('.gm-strt-btn')) {
      e.preventDefault();
      this.main.game.startGame();
      this.mode.toggleModeDisable();
      this.burger.toggleBurgerDisable();
    }

    if (trgt.closest('.gmCrd') && !trgt.closest('.gmCrd-btn')) {
      e.preventDefault();
      this.main.game.showGameModeAction(this.mode.modeText.textContent, trgt.closest('.gmCrd').id);

      if (this.mode.modeText.textContent === 'Play' && this.main.game.gameButton.id === 'gmRptBtn') {
        if (parseInt(this.main.game.gameAnswersCorrectText.textContent, 10) === 0 || parseInt(this.main.game.gameAnswersErrorText.textContent, 10) === 0) {
          this.main.replaceMainContent(this.main.popup.getPopupEl({
            res: `${(parseInt(this.main.game.gameAnswersCorrectText.textContent, 10) === 0) ? 'wn' : 'ls'}`,
            crctAns: `${this.main.game.gameCardsDataArr.length - parseInt(this.main.game.gameAnswersCorrectText.textContent, 10)}`,
            errAns: `${Math.floor(this.main.game.gameCardsDataArr.length / 2) - parseInt(this.main.game.gameAnswersErrorText.textContent, 10)}`,
          }), this.mode.modeText.textContent);
          this.mode.toggleModeDisable();
          this.burger.toggleBurgerDisable();
        }
      }
    }

    if (trgt.closest('.gmCrd-btn')) {
      e.preventDefault();
      this.main.game.showTransformGameCard(trgt.closest('.gmCrd').id);
    }

    if (trgt.closest('.gm-rpt-btn')) {
      e.preventDefault();
      this.main.game.repeatWord();
    }

    if (trgt.closest('.ppp-cls-btn')) {
      e.preventDefault();
      this.main.replaceMainContent(this.main.mainPage.getMainPageEl(), this.mode.modeText.textContent);
      this.navigation.getItemActive(this.main.mainContent.id);
    }

    if (this.navigationEl.classList.contains('nv-actv') && !trgt.closest('.nv') && !trgt.closest('.brg') && !trgt.closest('.md')) {
      e.preventDefault();
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }

    if (trgt.closest('.nv-lst-mnPg-itm-txt')) {
      e.preventDefault();
      this.main.replaceMainContent(this.main.mainPage.getMainPageEl(), this.mode.modeText.textContent);
      this.navigation.getItemActive(this.main.mainContent.id);
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }

    if (trgt.closest('.nv-lst-gm-itm-txt')) {
      e.preventDefault();
      this.main.replaceMainContent(this.main.game.getGameEl(trgt.closest('.nv-lst-gm-itm').dataset.id), this.mode.modeText.textContent);
      this.navigation.getItemActive(this.main.mainContent.id);
      this.burger.toggleBurgerActive();
      this.navigation.toggleNavigationActive();
    }
  };

  listener2 = (e) => {
    const trgt = e.target;
    const rltdTrgt = e.relatedTarget;

    if (!rltdTrgt) return; // throw an error when switching to another window  )))
    if (trgt.classList.contains('gmCrd-rw') && trgt.closest('.gmCrd-rtt') && !rltdTrgt.closest('.gmCrd-rtt')) {
      e.preventDefault();
      this.main.game.showTransformGameCard(trgt.closest('.gmCrd-rtt').id);
    } else if ((trgt.classList.contains('gm-cont-bx') || trgt.closest('.gm-cont-bx')) && (rltdTrgt.classList.contains('gmCrd-rw') && rltdTrgt.closest('.gmCrd'))) {
      e.preventDefault();
      this.main.game.checkTransformGameCard(rltdTrgt.closest('.gmCrd').id);
    } else if ((trgt.classList.contains('gm-cont-bx') || trgt.closest('.gm-cont-bx')) && !rltdTrgt.closest('.gm-cont-bx')) {
      e.preventDefault();
      this.main.game.checkTransformGameCard();
    }
  };

  control() {
    this.start();
    document.addEventListener('click', this.listener1);
    document.addEventListener('mouseout', this.listener2);
  }
}
