const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // on bloque l'envoi pour tester

  let isValid = true;
  let isChecked = false;

  // Input Full Name
  const inputs = document.querySelectorAll("input[type='text']");

  inputs.forEach(function (input) {
    const error = input.nextElementSibling;

    if (!input.value.trim()) {
      error.hidden = false;
      isValid = false;
    } else {
      error.hidden = true;
    }
  });

  // Input Email
  const inputEmail = document.querySelector("input[type='email']");

  const errorEmail = inputEmail.nextElementSibling;

  if (!inputEmail.value.trim()) {
    errorEmail.hidden = false;
    isValid = false;
  } else {
    errorEmail.hidden = true;
  }

  // Input Radio
  const radioChecked = document.querySelector(
    "input[name='query-type']:checked",
  );
  const errorRadio = document.getElementById("error-radio");

  if (!radioChecked) {
    errorRadio.hidden = false;
    isValid = false;
  } else {
    errorRadio.hidden = true;
  }

  // Texte area
  const textArea = document.getElementById("message");
  const errorText = textArea.nextElementSibling;

  if (!textArea.value.trim()) {
    errorText.hidden = false;
    isValid = false;
  } else {
    errorText.hidden = true;
  }

  // Check Consent
  const inputCheck = document.getElementById("consent");
  const errorCheck = document.getElementById("erro-consent");

  if (!inputCheck.checked) {
    errorCheck.hidden = false;
    isValid = false;
  } else {
    errorCheck.hidden = true;
  }

  const success = document.getElementById("success");

  if (isValid) {
    success.hidden = false;
    form.reset();

    setTimeout(function () {
      success.hidden = true;
    }, 2000);
  }
});
