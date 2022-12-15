function generateMenu() {
  const content = document.querySelector("#content");

  const menu = document.createElement("img");
  menu.classList.add("imageM");
  menu.setAttribute("src", "../dist/images/menu.jpg");
  menu.setAttribute("alt", "menu");

  content.appendChild(menu);
}

export default generateMenu;
