import { Router } from "express";
import { showLogin, showRegister, showDashboard } from "../controller/pageController.js";
import { requireAuth } from "../middleware/requireAuth.js";

const router = Router();

router.get("/", showLogin);
router.get("/login", showLogin);
router.get("/register", showRegister);

router.get("/dashboard", requireAuth, showDashboard);
router.post("/dashboard", requireAuth, showDashboard);

export default router;