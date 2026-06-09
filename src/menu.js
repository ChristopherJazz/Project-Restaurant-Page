import { clearMain } from "./dom";

export function loadMenu() {
  const main = clearMain();

  const heading = document.createElement("h2");
  heading.textContent = "Menu";

  const burger = document.createElement("p");
  burger.textContent = "Burger - ₱250";

  const fries = document.createElement("p");
  fries.textContent = "Fries - ₱100";

  main.append(heading, burger, fries);
}