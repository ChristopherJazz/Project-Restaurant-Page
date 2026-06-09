import { createHeader } from "./header";
import { createNav } from "./nav";

export function initializePage() {
  const content = document.getElementById("content");

  content.appendChild(createHeader());
  content.appendChild(createNav());

  const main = document.createElement("main");
  main.id = "main-content";

  content.appendChild(main);
}