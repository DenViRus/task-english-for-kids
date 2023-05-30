import logo from '../../img/ftr-img/pamLogo.png';

export default class Footer {
  constructor(action) {
    this.action = action;
  }

  getFooterEl() {
    const ftrEl = this.action.createElem('footer', { class: 'ftr', id: 'ftr' });
    const ftrRw = this.action.createElem('div', { class: 'rw ftr-rw' });
    const ftrCtctBx = this.action.createElem('div', { class: 'ftr-ctct-bx' });
    const ftrUpsBx = this.action.createElem('div', { class: 'ftr-ups-bx' });

    const ftrCtctDt = [
      {
        class: 'hdng mn-stl ftr-ctct-lnk ftr-ctct-phn-lnk', id: 'ftrCtctPhnLnk', href: 'tel:+381629381067', cont: '+(381)629381067',
      },
      {
        class: 'hdng mn-stl ftr-ctct-lnk ftr-ctct-tlg-lnk', id: 'ftrCtctTlgLnk', href: 'https://t.me/DenViRus83', cont: '@Denis Efremenko',
      },
      {
        class: 'hdng mn-stl ftr-ctct-lnk ftr-ctct-ml-lnk', id: 'ftrCtctMlLnk', href: 'mailto:serb.efremenko@gmail.com', cont: 'serb.efremenko@gmail.com',
      },
      {
        class: 'hdng mn-stl ftr-ctct-lnk ftr-ctct-hb-lnk', id: 'ftrCtctHbLnk', href: 'https://github.com/DenViRus', cont: 'DenViRus',
      },
    ];

    const ftrUpsLnk = this.action.createElem('a', {
      class: 'hdng mn-stl ftr-ups-lnk', id: 'ftrUpsLnk', href: 'https://github.com/rolling-scopes-school/js-fe-course-en/tree/main/UpSkillMe', target: '_blank',
    });
    const ftrUpsLnkImg = this.action.createElem('img', { class: 'ftr-ups-lnk-img', src: logo, alt: 'UpSkillMe logotype' });

    for (const dt of ftrCtctDt) {
      const ftrCtctLnk = this.action.createElem('a', {
        class: dt.class, id: dt.id, href: dt.href, target: '_blank',
      }, dt.cont);
      this.action.appEl(ftrCtctBx, ftrCtctLnk);
    }

    this.action.appEl(ftrUpsLnk, ftrUpsLnkImg);
    this.action.appEl(ftrUpsBx, ftrUpsLnk);

    this.action.appEl(ftrRw, ftrCtctBx, ftrUpsBx);
    this.action.appEl(ftrEl, ftrRw);
    return ftrEl;
  }
}
