import { clearMain } from "./dom";
import restaurantImage from "./images/burger-and-fries.jpg";

export function loadHome() {
  const main = clearMain();

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Jazz's Restaurant";

  const image = document.createElement("img");
  image.src = restaurantImage;
  image.alt = "Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Best food in town.";

  main.append(
    heading,
    image,
    paragraph
  );
}