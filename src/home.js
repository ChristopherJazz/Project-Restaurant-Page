export function loadHome() {
  const main = document.getElementById("main-content");

  main.textContent = "";

  const heading = document.createElement("h2");
  heading.textContent = "Welcome to Jazz's Restaurant";

  const paragraph = document.createElement("p");
  paragraph.textContent = "Best food in town.";

  main.append(heading, paragraph);
}