export function menu() {
  const contentsContainer = document.getElementById("content");
  const h1MenuEl = document.createElement("h1");
  h1MenuEl.textContent = "Menu content";
  h1MenuEl.classList.add("menu-header");
  contentsContainer.appendChild(h1MenuEl);
}
