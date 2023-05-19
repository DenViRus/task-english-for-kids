export default class Burger {
  constructor(action) {
    this.action = action;

    this.burgerEl = null;
    this.burgerItem = null;
  }

  getBurgerEl(md) {
    this.burgerEl = this.action.createElem('div', { class: 'brg', id: 'brg' });
    const brgBx = this.action.createElem('div', { class: 'brg-bx' });
    this.burgerItem = this.action.createElem('div', { class: 'brg-itm' });
    this.action.appEl(brgBx, this.burgerItem);
    this.action.appEl(this.burgerEl, brgBx);
    this.toggleBurgerMode(md);
    return this.burgerEl;
  }

  toggleBurgerMode(md) {
    md === 'Play' ? this.burgerItem.classList.add('brg-itm-gmMd') : this.burgerItem.classList.remove('brg-itm-gmMd');
  }

  toggleBurgerActive() {
    this.burgerEl.classList.toggle('brg-actv');
    this.burgerItem.classList.toggle('brg-itm-actv');
  }

  toggleBurgerDisable() {
    this.burgerEl.classList.toggle('brg-dsbl');
    this.burgerItem.classList.toggle('brg-itm-gmMd-dsbl');
  }
}
