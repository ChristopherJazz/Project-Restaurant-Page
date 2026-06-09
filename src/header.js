export function createHeader() {
  const header = document.createElement("header");

  const title = document.createElement("h1");
  title.textContent = "Jazz's Restaurant";

  header.appendChild(title);

  return header;
}