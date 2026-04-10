const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // on bloque l'envoi pour tester

  // Input Full Name
  const inputs = document.querySelectorAll("input[type='text']");

  inputs.forEach(function (input) {
    const error = input.nextElementSibling;

    if (!input.value.trim()) {
      error.hidden = false;
    } else {
      error.hidden = true;
    }
  });

  // Input Email
  const inputEmail = document.querySelector("input[type='email']");

  const errorEmail = inputEmail.nextElementSibling;

  if (!inputEmail.value.trim()) {
    errorEmail.hidden = false;
  } else {
    errorEmail.hidden = true;
  }

  // Input Radio
  const inputsRadio = document.querySelectorAll("input[name='query-type']");
  const errorRadio = document.getElementById("error-radio");

  let isChecked = false;

  inputsRadio.forEach(function (radio) {
    if (radio.checked) {
      isChecked = true;
    } else {
      isChecked = false;
    }
  });

  if (!isChecked) {
    errorRadio.hidden = false;
  } else {
    errorRadio.hidden = true;
  }

  // Texte area
  const textArea = document.getElementById("message");
  const errorText = textArea.nextElementSibling;

  if (!textArea.value.trim()) {
    errorText.hidden = false;
  } else {
    errorText.hidden = true;
  }

  // Check Consent
  const inputCheck = document.getElementById("consent");
  const errorCheck = document.getElementById("erro-consent");

  if (!inputCheck.checked) {
    errorCheck.hidden = false;
  } else {
    errorCheck.hidden = true;
  }
});
