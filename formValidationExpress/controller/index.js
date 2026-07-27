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

app.post("/register", (req, res) => {
  const { fullname, email, username, password } = req.body;
  const dataPath = path.resolve("./model/data.json");

  let users = [];
  if (fs.existsSync(dataPath)) {
    const rawData = fs.readFileSync(dataPath, "utf-8").trim();
    if (rawData) {
      try {
        users = JSON.parse(rawData);
      } catch (error) {
        users = [];
      }
    }
  }

  const existingUser = users.find(
    (user) => user.email.toLowerCase() === email.toLowerCase(),
  );
  if (existingUser) {
    return res.redirect("/register?error=EmailAlreadyExists");
  }

  users.push({ fullname, email, username, password });
  fs.writeFileSync(dataPath, JSON.stringify(users, null, 2));

  res.redirect("/login?registered=true");
});

app.get("/login", (req, res) => {
  res.sendFile(path.resolve("./view/Html/login.html"));
});
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  const dataPath = path.resolve("./model/data.json");

  let users = [];
  if (fs.existsSync(dataPath)) {
     const rawData = fs.readFileSync(dataPath, "utf-8").trim();
     if (rawData) {
        try {
           users = JSON.parse(rawData);
        } catch (error) {
           users = [];
        }
     }
  }

  const user = users.find(
     (u) => u.email.toLowerCase() === email.toLowerCase() && u.password === password
  );

  if (user) {
     return res.redirect("/dashboard");
  } else {
     return res.redirect("/login?error=InvalidCredentials");
  }
});

app.post("/dashboard", (req, res) => {
  const { email, password } = req.body;
  const absoluteValue = path.resolve("./view/Html/dashboard.html");
  res.sendFile(absoluteValue);
  console.log("Dashboard Page loaded succesfully");
});

app.get("/dashboard", (req, res) => {
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
