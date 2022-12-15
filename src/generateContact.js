function generateContact() {
  const content = document.querySelector("#content");
  const section = document.createElement("div");

  const fieldHeader = document.createElement("fieldset");
  fieldHeader.classList.add("field");
  fieldHeader.textContent = "Test!";
  section.appendChild(fieldHeader);

  const h2 = document.createElement("h2");
  h2.textContent = "You can contact";
  content.appendChild(section);
}

export default generateContact;
