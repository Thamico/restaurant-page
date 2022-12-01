import generateHome from "./generateHome";
import generateMenu from "./generateMenu";

generateHome();

function clearContent() {
  content.innerHTML = "";
}

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#homeBtn");
const menuBtn = document.querySelector("#menuBtn");
const contactBtn = document.querySelector("#contact-btn");

homeBtn.addEventListener("click", () => {
  clearContent();
  generateHome();
});

menuBtn.addEventListener("click", () => {
  clearContent();
  generateMenu();
});

contactBtn.addEventListener("click", () => {
  clearContent();
  generateContact();
});
