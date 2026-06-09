export function loadMenu() {
  const main = document.getElementById("main-content");

  main.textContent = "";

  const heading = document.createElement("h2");
  heading.textContent = "Menu";

  const burger = document.createElement("p");
  burger.textContent = "Burger - ₱250";

  const fries = document.createElement("p");
  fries.textContent = "Fries - ₱100";

  main.append(heading, burger, fries);
}