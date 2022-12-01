function generateMenu() {
  const content = document.querySelector("#content");
  const section = document.createElement("div");

  section.classList.add("menu");

  const menuHeader = document.createElement("div");
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  menuHeader.appendChild(h1);

  section.appendChild(menuHeader);
  content.appendChild(section);
}

export default generateMenu;
