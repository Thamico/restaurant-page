function generateMenu() {
  const content = document.querySelector("#content");
  const section = document.createElement("div");

  section.classList.add("menu");

  const menuHeader = document.createElement("div");
  menuHeader.classList.add("mintro");
  const h1 = document.createElement("h1");
  h1.textContent = "Menu";
  menuHeader.appendChild(h1);

  section.appendChild(menuHeader);
  const menuDescription = document.createElement("div");
  menuDescription.textContent =
    "Unique wood fired pizzas or be tempted by our pasta, antipasto, focaccias, salads and Bruschetta dishes. Relax in the friendly ambience as you enjoy the aromas of the wood ovens or sit al fresco and soak up the Mildura sunshine.";

  section.appendChild(menuDescription);
  content.appendChild(section);
}

export default generateMenu;
