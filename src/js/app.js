import Ctrlr from './scripts/Ctrlr.js';
import Hdr from './scripts/Hdr.js';
import Brg from './scripts/Brg.js';
import Nv from './scripts/Nv.js';
import Md from './scripts/Md.js';
import Mn from './scripts/Mn.js';
import MnPg from './scripts/MnPg.js';
import Gm from './scripts/Gm.js';

import Ftr from './scripts/Ftr.js';
import dt from './scripts/dt.js';
import act from './scripts/act.js';

const projBx = document.getElementById('projBx');
const hdr = new Hdr(act);
const brg = new Brg(act);
const nv = new Nv(dt, act);
const md = new Md(act);
const mnPg = new MnPg(dt, act);
const gm = new Gm(dt, act);

const mn = new Mn(mnPg, gm, act);

const ftr = new Ftr(act);

const ctrlr = new Ctrlr(projBx, hdr, brg, nv, md, mn, ftr, act);
ctrlr.ctrlrControl();

console.log(window.innerWidth);
