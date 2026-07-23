import express from "express";
import path from "path";

const app = express();

app.use(express.static("./view/CSS"));
app.use(express.static("./view/JS"));

app.get("/", (req, res) => {
  const absoluteValue = path.join(__dirname, "view/Html/login.html");
  res.sendFile(absoluteValue);
  console.log("Dashboard Loaded Succesfully");
});
app.get("/register", (req, res) => {
  const absoluteValue = path.join(__dirname, "view/Html/register.html");
  res.sendFile(absoluteValue);
  console.log("Register Page loaded succesfully");
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
