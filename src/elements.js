export function createElement(tag, text = "") {
  const element = document.createElement(tag);

  if (text) {
    element.textContent = text;
  }

  return element;
}