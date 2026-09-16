export function about() {
  const contentsContainer = document.getElementById("content");
  const h1AboutEl = document.createElement("h1");
  h1AboutEl.textContent = "About content";
  h1AboutEl.classList.add("about-header");
  contentsContainer.appendChild(h1AboutEl);
}
