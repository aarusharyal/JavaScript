import express from "express";
import path from "path";

const app = express();

app.use((req, res) => {
  res.status(404).render("Error", { message: "Page Not Found" });
});
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
