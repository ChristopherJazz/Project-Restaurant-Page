import { createElement } from "./elements";

export function createMenuCard(item) {
  const card = createElement("div");
  card.classList.add("menu-card");

  const name = createElement("h3", item.name);
  const price = createElement("p", `₱${item.price}`);

  card.append(name, price);

  return card;
}