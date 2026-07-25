const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log("Login.js Loaded");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  validateForm();
});

function validateForm() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    // showError(email, "Please enter a valid email address");
    email.setCustomValidity("Please enter a valid email address");
  } else {
    // showSuccess(email);
    email.setCustomValidity("");
  }

  if (passwordValue === "" || passwordValue.length <= 7) {
    // showError(password, "Password must be at least 8 characters long");
    password.setCustomValidity("Password must be at least 8 characters long");
  } else {
    // showSuccess(password);
    password.setCustomValidity("");
  }
  return form.reportValidity();
}

// function showError(input, message) {
//   const formControl = input.parentElement;
//   formControl.classList.add("error");
//   formControl.classList.remove("success");
//   const small = formControl.querySelector(".error-message");
//   small.innerText = message;
//   small.style.display = "block";
// }

// function showSuccess(input) {
//   const formControl = input.parentElement;
//   formControl.classList.add("success");
//   formControl.classList.remove("error");
// }

// function submitForm(event) {
//   validateForm();
//   if (validateForm() == true) {
//     event.preventDefault();
//     location.href = "index.html";
//     submitForm();
//   } else {
//     event.preventDefault();
//     showError(username, "Please Fill the required fields");
//     showError(password, "Please Fill the required fields");
//   }
// }
