import express from "express";

import { isAdmin, requireSignIn } from "./../middlewares/authMiddleware.js";
import { khalti } from "../controllers/khaltiController.js";

const router = express.Router();

router.post("/", requireSignIn, khalti);

export default router;
