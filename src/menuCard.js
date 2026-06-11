import { createElement } from "./elements";

export function createMenuCard(item) {
  const card = createElement("div");
  card.classList.add("menu-card");

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;

  const name = createElement("h3", item.name);

  const description = createElement(
    "p",
    item.description
  );

  const price = createElement(
    "p",
    `₱${item.price}`
  );

  card.append(
    image,
    name,
    description,
    price
  );

  return card;
}