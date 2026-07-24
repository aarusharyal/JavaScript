import express from "express";
import path from "path";
import fs from "fs";

const app = express();

app.use(express.static("./view/CSS"));
app.use(express.static("./view/JS"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  const absoluteValue = path.resolve("./view/Html/login.html");
  res.sendFile(absoluteValue);
  console.log("Login Loaded Succesfully");
});

app.get("/register", (req, res) => {
  const absoluteValue = path.resolve("./view/Html/register.html");
  res.sendFile(absoluteValue);
  console.log("Register Page loaded succesfully");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const absoluteValue = path.resolve("view/Html/login.html");
  res.sendFile(absoluteValue);
  console.log("Login Page loaded succesfully");
});

app.post("/dashboard", (req, res) => {
  const { email, password } = req.body;
  const absoluteValue = path.resolve("./view/Html/dashboard.html");
  res.sendFile(absoluteValue);
  console.log("Dashboard Page loaded succesfully");
});

app.get("/logout", (req, res) => {
  if (req.session) {
    req.session.destroy((err) => {
      res.redirect("/login");
    });
  } else {
    res.redirect("/login");
  }
});

app.use((req, res) => {
  res.status(404).sendFile(path.resolve("./view/Html/error.html"));
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
