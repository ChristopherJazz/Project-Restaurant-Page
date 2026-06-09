import { clearMain } from "./dom";

export function loadContact() {
  const main = clearMain();

  const heading = document.createElement("h2");
  heading.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "0917-123-4567";

  main.append(heading, phone);
}