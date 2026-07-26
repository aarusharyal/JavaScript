const form = document.getElementById("loginForm");
const email = document.getElementById("email");
const password = document.getElementById("password");

console.log("Login.js Loaded");

email.addEventListener("input", () => {
  email.setCustomValidity("");
});

password.addEventListener("input", () => {
  password.setCustomValidity("");
});

form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (validateForm()) {
    form.submit();
  }
});

function validateForm() {
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (emailValue === "" || !emailRegex.test(emailValue)) {
    email.setCustomValidity("Please enter a valid email address");
  } else {
    email.setCustomValidity("");
  }

  if (passwordValue === "" || passwordValue.length <= 7) {
    password.setCustomValidity("Password must be at least 8 characters long");
  } else {
    password.setCustomValidity("");
  }

  return form.reportValidity();
}
