import Controller from './scripts/Controller.js';
import Header from './scripts/Header.js';
import Burger from './scripts/Burger.js';
import Navigation from './scripts/Navigation.js';
import Mode from './scripts/Mode.js';
import Main from './scripts/Main.js';
import MainPage from './scripts/MainPage.js';
import Game from './scripts/Game.js';
import Popup from './scripts/Popup.js';
import Score from './scripts/Score.js';
import Footer from './scripts/Footer.js';
import { projectData, defaultData } from './scripts/projectData.js';
import action from './scripts/action.js';

const projectBox = document.getElementById('projBx');
const header = new Header(action);
const burger = new Burger(action);
const navigation = new Navigation(action);
const mode = new Mode(action);
const mainPage = new MainPage(action);

const score = new Score(action);

const game = new Game(score, action);
const popup = new Popup(action);

const main = new Main(mainPage, game, action);

const footer = new Footer(action);

const controller = new Controller(
  projectBox,
  header,
  burger,
  navigation,
  mode,
  main,
  mainPage,
  game,
  popup,
  score,
  footer,
  projectData,
  defaultData,
  action,
);
controller.control();
