export default class Main {
  constructor(mainPage, game, action) {
    this.mainPage = mainPage;
    this.game = game;
    this.action = action;

    this.mainModeText = null;
    this.mainContent = null;
  }

  getMainEl(dt, md) {
    const mnEl = this.action.createElem('main', { class: 'mn', id: 'mn' });
    const mnRw = this.action.createElem('div', { class: 'rw mn-rw' });
    const mnHdng = this.action.createElem('h2', { class: 'hdng mn-stl mn-hdng' }, 'Train & Play:');
    this.mainModeText = this.action.createElem('span', { class: 'hdng mn-stl mn-md-txt' });
    const mnCntntBx = this.action.createElem('div', { class: 'mn-cont-bx' });

    this.mainContent = this.mainPage.getMainPageEl(dt);

    this.action.appEl(mnHdng, this.mainModeText);
    this.action.appEl(mnCntntBx, this.mainContent);
    this.action.appEl(mnRw, mnHdng, mnCntntBx);
    this.action.appEl(mnEl, mnRw);
    this.toggleMainMode(md);
    return mnEl;
  }

  toggleMainMode(md) {
    md === 'Play' ? this.mainModeText.classList.add('mn-md-txt-gmMd') : this.mainModeText.classList.remove('mn-md-txt-gmMd');
    this.mainModeText.textContent = md;
    if (this.mainContent.id === 'mnPg') this.mainPage.toggleMainPageMode(md);
    if (/^game/.test(this.mainContent.id)) this.game.toggleGameMode(md);
    if (this.mainContent.id === 'rptWrds') this.game.toggleGameMode(md);
  }

  replaceMainContent(nwCont, md) {
    this.action.replEl(nwCont, this.mainContent);
    this.mainContent = nwCont;
    this.toggleMainMode(md);
  }
}
