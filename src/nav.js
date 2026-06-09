export function createNav() {
  const nav = document.createElement("nav");

  const homeBtn = document.createElement("button");
  homeBtn.textContent = "Home";
  homeBtn.id = "home-btn";

  const menuBtn = document.createElement("button");
  menuBtn.textContent = "Menu";
  menuBtn.id = "menu-btn";

  const contactBtn = document.createElement("button");
  contactBtn.textContent = "Contact";
  contactBtn.id = "contact-btn";

  nav.append(homeBtn, menuBtn, contactBtn);

  return nav;
}