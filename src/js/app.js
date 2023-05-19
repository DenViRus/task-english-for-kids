import Controller from './scripts/Controller.js';
import Header from './scripts/Header.js';
import Burger from './scripts/Burger.js';
import Navigation from './scripts/Navigation.js';
import Mode from './scripts/Mode.js';
import Main from './scripts/Main.js';
import MainPage from './scripts/MainPage.js';
import Game from './scripts/Game.js';
import Popup from './scripts/Popup.js';
import Footer from './scripts/Footer.js';
import { projectData, defaultData } from './scripts/projectData.js';
import action from './scripts/action.js';

const projectBox = document.getElementById('projBx');
const header = new Header(action);
const burger = new Burger(action);
const navigation = new Navigation(projectData, action);
const mode = new Mode(action);
const mainPage = new MainPage(projectData, action);
const game = new Game(projectData, defaultData, action);
const popup = new Popup(defaultData, action);

const main = new Main(mainPage, game, popup, action);

const footer = new Footer(action);

const controller = new Controller(projectBox, header, burger, navigation, mode, main, footer, action);
controller.control();
