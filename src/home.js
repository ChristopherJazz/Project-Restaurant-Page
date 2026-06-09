import { createHeader } from "./header";
import { createNav } from "./nav";

export function loadHome() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNav());

  const paragraph = document.createElement("p");
  paragraph.textContent = "Best food in town.";

  content.appendChild(paragraph);
}