export function contact() {
  const contentsContainer = document.getElementById("content");
  const h1ContactEl = document.createElement("h1");
  h1ContactEl.textContent = "Contact content";
  h1ContactEl.classList.add("contact-header");
  contentsContainer.appendChild(h1ContactEl);
}
