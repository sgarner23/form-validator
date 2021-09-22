const form = document.querySelector(".form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");



function showError(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector("small");
  errorMessage.textContent = message;
  errorMessage.style.visibility = "unset";
  input.style.borderColor = "#e74c3c";
}

function showSuccess (input){
  input.style.borderColor = '#2ecc71';
}

function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

function checkForEmptyField(inputArr) {
  inputArr.forEach((input) => {
    if (input.value === "") {
      showError(input, `${getFieldName(input)} is required`);
    } else {
      showSuccess(input)
    }
  });
}

function checkLength(input, min, max){
  if (input.value.length < min){
    showError(input, `${getFieldName(input)} must be at least ${min} characters`)
  } else if (input.value.length > max){
    showError(input, `${getFieldName(input)} can't be longer than ${max} characters`)
  } else {
    showSuccess(input)
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkForEmptyField([username, email, password, password2]);
  checkLength(username, 3, 15)
  checkLength(password, 6, 20)
  
});
