export default class Main {
  constructor(mainPage, game, popup, action) {
    this.mainPage = mainPage;
    this.game = game;
    this.popup = popup;
    this.action = action;

    this.mainEl = null;
    this.mainHeading = null;
    this.mainModeText = null;
    this.mainContentBox = null;
    this.mainContent = null;
  }

  getMainEl(md) {
    this.mainEl = this.action.createElem('main', { class: 'mn', id: 'mn' });
    const mnRw = this.action.createElem('div', { class: 'rw mn-rw' });
    this.mainHeading = this.action.createElem('h2', { class: 'hdng mn-stl mn-hdng' }, 'Train & Play:');
    this.mainModeText = this.action.createElem('span', { class: 'hdng mn-stl mn-md-txt' });
    this.mainContentBox = this.action.createElem('div', { class: 'mn-cont-bx' });
    this.mainContent = this.mainPage.getMainPageEl();
    this.action.appEl(this.mainHeading, this.mainModeText);
    this.action.appEl(this.mainContentBox, this.mainContent);
    this.action.appEl(mnRw, this.mainHeading, this.mainContentBox);
    this.action.appEl(this.mainEl, mnRw);
    this.toggleMainMode(md);
    return this.mainEl;
  }

  toggleMainMode(md) {
    md === 'Play' ? this.mainModeText.classList.add('mn-md-txt-gmMd') : this.mainModeText.classList.remove('mn-md-txt-gmMd');
    this.mainModeText.textContent = md;
    if (this.mainContent.id === 'mnPg') this.mainPage.toggleMainPageMode(md);
    if (/^game/.test(this.mainContent.id)) this.game.toggleGameMode(md);
  }

  replaceMainContent(nwCont, md) {
    this.action.replEl(nwCont, this.mainContent);
    this.mainContent = nwCont;
    this.toggleMainMode(md);
  }
}
