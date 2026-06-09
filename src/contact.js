export function loadContact() {
  const main = document.getElementById("main-content");

  main.textContent = "";

  const heading = document.createElement("h2");
  heading.textContent = "Contact";

  const phone = document.createElement("p");
  phone.textContent = "0917-123-4567";

  main.append(heading, phone);
}