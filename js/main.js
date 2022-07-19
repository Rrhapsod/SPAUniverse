import { Router } from "./router.js";

const home = document.querySelector("#home");
const universo = document.querySelector("#universo");
const exploracao = document.querySelector("#exploracao");
const botao = document.querySelector("#saber");

const router = new Router();
router.add("/", "/pages/home.html");
router.add("/universo", "/pages/universo.html");
router.add("/exploracao", "/pages/exploracao.html");
router.add(404, "/pages/error.html");

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();

home.addEventListener("click", function () {
  document.body.classList.add("home");
  document.body.classList.remove("universo");
  document.body.classList.remove("exploracao");
  home.classList.add("selected");
  universo.classList.remove("selected");
  exploracao.classList.remove("selected");
});

universo.addEventListener("click", function () {
  document.body.classList.remove("home");
  document.body.classList.add("universo");
  document.body.classList.remove("exploracao");
  home.classList.remove("selected");
  universo.classList.add("selected");
  exploracao.classList.remove("selected");
});

exploracao.addEventListener("click", function () {
  document.body.classList.remove("home");
  document.body.classList.remove("universo");
  document.body.classList.add("exploracao");
  home.classList.remove("selected");
  universo.classList.remove("selected");
  exploracao.classList.add("selected");
});
