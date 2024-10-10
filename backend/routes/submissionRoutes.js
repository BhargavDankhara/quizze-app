import express from "express";
import { submitQuiz } from "../controllers/submissionController.js";

const router = express.Router();

router.post("/:id/submit", submitQuiz);

export default router;
