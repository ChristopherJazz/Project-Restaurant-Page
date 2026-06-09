import { createElement } from "./elements";
import { clearMain } from "./dom";

const menuItems = [
  { name: "Burger", price: 250 },
  { name: "Fries", price: 100 },
  { name: "Pizza", price: 450 },
  { name: "Pasta", price: 300 },
];

export function loadMenu() {
  const main = clearMain();

  const heading = createElement("h2", "Menu");
  main.appendChild(heading);

  menuItems.forEach((item) => {
    const card = createElement("div");
    card.classList.add("menu-card");

    const name = createElement("h3", item.name);
    const price = createElement("p", `₱${item.price}`);

    card.append(name, price);

    main.appendChild(card);
  });
}