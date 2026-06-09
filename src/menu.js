import { clearMain } from "./dom";

const menuItems = [
  "Burger - ₱250",
  "Fries - ₱100",
  "Pizza - ₱450",
  "Pasta - ₱300",
];

export function loadMenu() {
  const main = clearMain();

  const heading = document.createElement("h2");
  heading.textContent = "Menu";

  main.appendChild(heading);

  menuItems.forEach((item) => {
    const p = document.createElement("p");
    p.textContent = item;

    main.appendChild(p);
  });
}