import logo from '../../img/ftr-img/pamLogo.png';

export default class Ftr {
  constructor(act) {
    this.act = act;
    this.ftr = null;
  }

  getFtr() {
    this.ftr = this.act.createElem('footer', { class: 'ftr', id: 'ftr' });
    const ftrRw = this.act.createElem('div', { class: 'rw ftr-rw' });
    const ftrCtctBx = this.act.createElem('div', { class: 'ftr-ctct-bx' });
    const ftrUpsBx = this.act.createElem('div', { class: 'ftr-ups-bx' });

    const ftrCtctDt = [
      {
        class: 'hdng mn-stl ftr-ctct-phn-lnk', id: 'ftrCtctPhnLnk', href: 'tel:+381629381067', cont: '+(381)629381067',
      },
      {
        class: 'hdng mn-stl ftr-ctct-tlg-lnk', id: 'ftrCtctTlgLnk', href: 'https://t.me/DenViRus83', cont: '@Denis Efremenko',
      },
      {
        class: 'hdng mn-stl ftr-ctct-ml-lnk', id: 'ftrCtctMlLnk', href: 'mailto:serb.efremenko@gmail.com', cont: 'serb.efremenko@gmail.com',
      },
      {
        class: 'hdng mn-stl ftr-ctct-hb-lnk', id: 'ftrCtctHbLnk', href: 'https://github.com/DenViRus', cont: 'DenViRus',
      },
    ];

    const ftrUpsLnk = this.act.createElem('a', {
      class: 'hdng mn-stl ftr-ups-lnk', id: 'ftrUpsLnk', href: 'https://github.com/rolling-scopes-school/js-fe-course-en/tree/main/UpSkillMe', target: '_blank',
    });
    const ftrUpsLnkImg = this.act.createElem('img', { class: 'ftr-ups-lnk-img', src: logo, alt: 'UpSkillMe logotype' });

    for (const dt of ftrCtctDt) {
      const ftrCtctLnk = this.act.createElem('a', {
        class: dt.class, id: dt.id, href: dt.href, target: '_blank',
      }, dt.cont);
      this.act.appEl(ftrCtctBx, ftrCtctLnk);
    }

    this.act.appEl(ftrUpsLnk, ftrUpsLnkImg);
    this.act.appEl(ftrUpsBx, ftrUpsLnk);

    this.act.appEl(ftrRw, ftrCtctBx, ftrUpsBx);
    this.act.appEl(this.ftr, ftrRw);
    return this.ftr;
  }

  ftrControl() {

  }
}
