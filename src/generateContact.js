function generateContact() {
  const content = document.querySelector("#content");
  const section = document.createElement("div");

  const fieldHeader = document.createElement("fieldset");
  fieldHeader.classList.add("field");

  const form = document.createElement("form");
  form.setAttribute("action", "action_page.php");

  const firstLabel = document.createElement("label");
  firstLabel.textContent = "First Name:";
  firstLabel.setAttribute("for", "fname");
  form.appendChild(firstLabel);

  const firstInput = document.createElement("input");
  firstInput.setAttribute("type", "text");
  firstInput.setAttribute("id", "fname");
  firstInput.setAttribute("name", "firstname");
  firstInput.setAttribute("placeholder", "Your name...");

  form.appendChild(firstInput);

  const secondLabel = document.createElement("label");
  secondLabel.textContent = "Last Name:";
  secondLabel.setAttribute("for", "fname");
  form.appendChild(secondLabel);

  const secondInput = document.createElement("input");
  secondInput.setAttribute("type", "text");
  secondInput.setAttribute("id", "lname");
  secondInput.setAttribute("name", "lastname");
  secondInput.setAttribute("placeholder", "Your last name...");
  form.append(secondInput);

  const reservationLabel = document.createElement("label");
  reservationLabel.textContent = "How many person?";
  reservationLabel.setAttribute("for", "persons");
  form.append(reservationLabel);

  const reservationSelection = document.createElement("select");
  reservationSelection.setAttribute("id", "reservation");
  reservationSelection.setAttribute("name", "reservation");

  const option1 = document.createElement("option");
  option1.value = "1";
  option1.text = "1 person";
  reservationSelection.add(option1);

  const option2 = document.createElement("option");
  option2.value = "2";
  option2.text = "2 person";
  reservationSelection.add(option2);

  const option4 = document.createElement("option");
  option4.value = "4";
  option4.text = "4 person";
  reservationSelection.add(option4);

  const option5 = document.createElement("option");
  option5.value = "5";
  option5.text = "5 person";
  reservationSelection.add(option5);

  const option6 = document.createElement("option");
  option6.value = "6";
  option6.text = "6 person";
  reservationSelection.add(option6);

  const option7 = document.createElement("option");
  option7.value = "7";
  option7.text = "7 person";
  reservationSelection.add(option7);

  const option8 = document.createElement("option");
  option8.value = "8";
  option8.text = "8 person";
  reservationSelection.add(option8);

  form.appendChild(reservationSelection);

  const submitLabel = document.createElement("label");
  submitLabel.textContent = "Some other remarks:";
  submitLabel.setAttribute("for", "remarks");
  form.appendChild(submitLabel);

  const textArea = document.createElement("textarea");
  textArea.setAttribute("id", "text");
  textArea.setAttribute("name", "text");
  textArea.setAttribute("placeholder", "Write something");
  textArea.setAttribute("style", "height:200px");
  form.appendChild(textArea);

  const input = document.createElement("input");
  input.setAttribute("type", "submit");
  input.setAttribute("value", "Submit");

  form.appendChild(input);
  fieldHeader.appendChild(form);
  section.appendChild(fieldHeader);
  content.appendChild(section);
}

export default generateContact;
