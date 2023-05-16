import Ctrlr from './scripts/Ctrlr.js';
import Hdr from './scripts/Hdr.js';
import Brg from './scripts/Brg.js';
import Nv from './scripts/Nv.js';
import Md from './scripts/Md.js';
import Mn from './scripts/Mn.js';
import MnPg from './scripts/MnPg.js';
import Gm from './scripts/Gm.js';
import Ppp from './scripts/Ppp.js';

import Ftr from './scripts/Ftr.js';
import { dt, dfltDt } from './scripts/dt.js';
import act from './scripts/act.js';

const projBx = document.getElementById('projBx');
const hdr = new Hdr(act);
const brg = new Brg(act);
const nv = new Nv(dt, act);
const md = new Md(act);
const mnPg = new MnPg(dt, act);
const gm = new Gm(dt, dfltDt, act);
const ppp = new Ppp(dfltDt, act);

const mn = new Mn(mnPg, gm, ppp, act);

const ftr = new Ftr(act);

const ctrlr = new Ctrlr(projBx, hdr, brg, nv, md, mn, ftr, act);
ctrlr.ctrlrControl();

console.log(window.innerWidth);
