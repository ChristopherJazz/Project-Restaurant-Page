import burgerImg from "./images/burger.jpg";
import friesImg from "./images/fries.jpg";
import pizzaImg from "./images/pizza.jpg";
import pastaImg from "./images/pasta.jpg";
import { clearMain } from "./dom";
import { createElement } from "./elements";
import { createMenuCard } from "./menuCard";


const menuItems = [
  {
    name: "Burger",
    price: 250,
    image: burgerImg,
    description: "Juicy beef burger with cheese",
  },
  {
    name: "Fries",
    price: 100,
    image: friesImg,
    description: "Crispy golden fries",
  },
  {
    name: "Pizza",
    price: 450,
    image: pizzaImg,
    description: "Wood-fired pizza",
  },
  {
    name: "Pasta",
    price: 300,
    image: pastaImg,
    description: "Creamy pasta dish",
  },
];

export function loadMenu() {
  const main = clearMain();

  main.appendChild(createElement("h2", "Menu"));

  menuItems.forEach((item) => {
    main.appendChild(createMenuCard(item));
  });
}