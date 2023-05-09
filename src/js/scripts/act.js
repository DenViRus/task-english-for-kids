const act = {
  createElem(el, elAttr, cont = '') {
    const elem = document.createElement(el);
    for (const prop in elAttr) {
      if (Object.hasOwnProperty.call(elAttr, prop)) {
        const val = elAttr[prop];
        elem.setAttribute(prop, val);
      }
    }
    if (cont !== '') elem.textContent = cont;
    return elem;
  },

  appEl(parEl, ...els) {
    parEl.append(...els);
  },

  prepEl(parEl, ...els) {
    parEl.prepend(...els);
  },

  replEl(el1, el2) {
    el2.replaceWith(el1);
  },

  beforEl(el, ...prevEls) {
    el.before(...prevEls);
  },

  afterEl(el, ...nextEls) {
    el.after(...nextEls);
  },

  getElByID(arr, id) {
    return arr.find((el) => el.id === id);
  },

  getElByDataID(arr, id) {
    return arr.find((el) => el.dataset.id === id);
  },

  getIndByID(arr, id) {
    return arr.findIndex((el) => el.id === id);
  },

  checkIncludeByID(arr, id) {
    return arr.map((data) => data.id).includes(id);
  },
};
export default act;
