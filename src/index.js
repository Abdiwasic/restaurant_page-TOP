import "./styles.css";
import { home } from "./modules/home.js";
import { menu } from "./modules/menu.js";
import { about } from "./modules/about.js";
import { contact } from "./modules/contact.js";
import { createIcons, Utensils } from "lucide";

createIcons({
  icons: {
    Utensils,
  },
});
const contentsContainer = document.getElementById("content");
const navEl = document.querySelector("nav");
home();
navEl.addEventListener("click", (e) => {
  contentsContainer.textContent = "";
  if (e.target.matches(".home")) {
    home();
  }
  if (e.target.matches(".menu")) {
    menu();
  }
  if (e.target.matches(".about")) {
    about();
  }
  if (e.target.matches(".contact")) {
    contact();
  }
});
