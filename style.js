const submit = document.querySelector(".a-btn");
const errorMsg = document.querySelector(".error-msg");
const input = document.querySelector("input");
const error = document.querySelector(".error-icon");

submit.addEventListener("click", validateEmail);

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validateEmail() {
  const email = input.value;
  if (!isValidEmail(email)) {
    errorMsg.style.display = "block";
    error.style.display = "block";
  } else {
    errorMsg.style.display = "none";
    error.style.display = "none";
    alert("Thank you for subscribing!");

  }



}
