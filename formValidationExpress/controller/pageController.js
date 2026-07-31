import path from "path";

export const showLogin = (req, res) => {
  res.sendFile(path.resolve("./view/Html/login.html"));
  console.log("Login Loaded Succesfully");
};

export const showRegister = (req, res) => {
  res.sendFile(path.resolve("./view/Html/register.html"));
  console.log("Register Page loaded succesfully");
};

export const showDashboard = (req, res) => {
  res.sendFile(path.resolve("./view/Html/dashboard.html"));
  console.log("Dashboard Page loaded succesfully");
};

export const showNotFound = (req, res) => {
  res.status(404).sendFile(path.resolve("./view/Html/error.html"));
};
