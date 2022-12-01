function generateHome() {
  const content = document.querySelector("#content");

  const div = document.createElement("div");

  const subDiv = document.createElement("div");
  subDiv.classList.add("subpage");

  const restaurantLogo = document.createElement("img");
  restaurantLogo.setAttribute("src", "../dist/images/food.png");
  restaurantLogo.setAttribute("alt", "restaurant-picture");
  restaurantLogo.setAttribute("height", "40px");
  restaurantLogo.setAttribute("width", "40px");

  subDiv.appendChild(restaurantLogo);

  const header = document.createElement("h1");
  header.textContent = "Welcome to my Virtual Restaurant";
  subDiv.appendChild(header);

  subDiv.appendChild(restaurantLogo);
  div.appendChild(subDiv);

  const fieldHeader = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.classList.add("introduction");
  legend.textContent = "Gourmet Restaurant Michael in Karlsruhe";
  fieldHeader.appendChild(legend);

  const h2 = document.createElement("h2");
  h2.textContent = "Hello and welcome to the best Restaurant in the World";
  fieldHeader.appendChild(h2);

  div.appendChild(fieldHeader);

  const fieldImg = document.createElement("fieldset");
  fieldImg.classList.add("image");
  const img = document.createElement("img");
  img.setAttribute("src", "../dist/images/5star.jpg");
  img.setAttribute("alt", "restaurant");

  fieldImg.appendChild(img);

  div.appendChild(fieldImg);

  const fieldFooter = document.createElement("fieldset");
  const footerH2 = document.createElement("h2");
  footerH2.textContent =
    "Only at our place u can experience fine dining at the highest level";

  fieldFooter.appendChild(footerH2);

  div.appendChild(fieldFooter);

  content.appendChild(div);
}

export default generateHome;
