const form = document.querySelector(".form");

form.addEventListener("submit", function (e) {
  e.preventDefault(); // on bloque l'envoi pour tester

  const inputs = document.querySelectorAll("input[type='text']");

  inputs.forEach(function (input) {
    const error = input.nextElementSibling;

    if (!input.value.trim()) {
      error.hidden = false;
    } else {
      error.hidden = true;
    }
  });

  const inputEmail = document.querySelector("input[type='email']");

  const errorEmail = inputEmail.nextElementSibling;

  if (!inputEmail.value.trim()) {
    errorEmail.hidden = false;
  } else {
    errorEmail.hidden = true;
  }

  const inputsRadio = document.querySelectorAll("input[name='query-type']");
  const errorRadio = document.getElementById("error-radio");

  let isChecked = false;

  inputsRadio.forEach(function (radio) {
    if (radio.checked) {
      isChecked = true;
      console.log("ok");
    } else {
      console.log("no ok");
    }
  });

  if (!isChecked) {
    errorRadio.hidden = false;
  } else {
    errorRadio.hidden = true;
  }
});
