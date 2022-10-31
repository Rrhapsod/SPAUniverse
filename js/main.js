import { Router } from "./router.js";
import { Events } from "./events.js";

const home = document.querySelector("#home");
const universo = document.querySelector("#universo");
const exploracao = document.querySelector("#exploracao");

const router = new Router();
const events = Events({ home, universo, exploracao });

router.add("#home", "/pages/home.html");
router.add("#about", "/pages/universo.html");
router.add("#explorer", "/pages/exploracao.html");
router.add(404, "/pages/error.html");

router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();
events.ButtonEvents();

window.onhashchange = () => {
  events.ButtonEvents();
};

