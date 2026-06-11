import { clearMain } from "./dom";
import { createElement } from "./elements";
import { createMenuCard } from "./menuCard";


const menuItems = [
  { name: "Burger", price: 250 },
  { name: "Fries", price: 100 },
  { name: "Pizza", price: 450 },
  { name: "Pasta", price: 300 },
];

export function loadMenu() {
  const main = clearMain();

  main.appendChild(createElement("h2", "Menu"));

  menuItems.forEach((item) => {
    main.appendChild(createMenuCard(item));
  });
}