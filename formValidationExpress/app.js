import express from "express";
import { sessionMiddleware } from "./config/session.js";
import pageRoutes from "./routes/pageRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { showNotFound } from "./controller/pageController.js";

const app = express();

app.use(express.static("./view/CSS"));
app.use(express.static("./view/JS"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(sessionMiddleware);

app.use(pageRoutes);
app.use(authRoutes);

app.use(showNotFound);

export default app;