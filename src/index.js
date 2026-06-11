import "./styles.css";

import { initializePage } from "./page";
import { loadHome } from "./home";
import { loadMenu } from "./menu";
import { loadContact } from "./contact";

initializePage();

function setActiveButton(activeButton) {
  const buttons = document.querySelectorAll("nav button");

  buttons.forEach((button) => {
    button.classList.remove("active");
  });

  activeButton.classList.add("active");
}

const homeBtn = document.getElementById("home-btn");
const menuBtn = document.getElementById("menu-btn");
const contactBtn = document.getElementById("contact-btn");

loadHome();
setActiveButton(homeBtn);

homeBtn.addEventListener("click", () => {
  loadHome();
  setActiveButton(homeBtn);
});

menuBtn.addEventListener("click", () => {
  loadMenu();
  setActiveButton(menuBtn);
});

contactBtn.addEventListener("click", () => {
  loadContact();
  setActiveButton(contactBtn);
});