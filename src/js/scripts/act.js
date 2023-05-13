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

  getRndItm(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  getRndArr(arr) {
    const rndArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      let numb = this.getRndItm(0, len);
      if (rndArr.includes(numb)) {
        numb = this.getRndItm(0, len);
        i--;
      } else {
        rndArr.push(numb);

        // if (j === 3 || j === 5 || j === 7) pageVal.reverse();
      }

      // const element = array[index];
    }
    return rndArr;
  },

  plyAud(url) {
    new Audio(url).play();
  },
};
export default act;
