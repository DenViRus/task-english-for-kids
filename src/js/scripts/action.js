const action = {
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

  getElByID(arr, curId, el = arr.find(({ id }) => id === curId)) {
    return el;
  },

  getElByDataID(arr, curId, el = arr.find(({ dataset }) => dataset.id === curId)) {
    return el;
  },

  getIndByID(arr, curId, ind = arr.findIndex(({ id }) => id === curId)) {
    return ind;
  },

  rmvElById(arr, curId, needEl = this.getElByID(arr, curId)) {
    if (needEl) {
      const needInd = this.getIndByID(arr, curId);
      arr.splice(needInd, 1);
    }
  },

  checkIncludeByID(arr, id) {
    return arr.map((data) => data.id).includes(id);
  },

  getRndItm(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  srtArr(arr, val) {
    arr.sort((a, b) => {
      if (a[val] < b[val]) return -1;
      if (a[val] > b[val]) return 1;
      return 0;
    });
  },

  getRndArr(arr) {
    const rndArr = [];
    for (let i = 0, len = arr.length; i < len; i++) {
      let numb = this.getRndItm(0, len);
      if (rndArr.includes(numb)) {
        numb = this.getRndItm(0, len);
        i--;
      } else {
        rndArr.push(arr[i]);
        if (i % 2 === 0) rndArr.reverse();
      }
    }
    return rndArr;
  },

  plyAud(url) {
    new Audio(url).play();
  },

  setStrgDt(key, val) {
    localStorage.setItem(key, JSON.stringify(val));
  },

  getStrgDt(key) {
    return JSON.parse(localStorage.getItem(key));
  },

  rmvStrgDt(key) {
    localStorage.removeItem(key);
  },
};
export default action;
