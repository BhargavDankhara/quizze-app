import express from "express";
import {
  createQuiz,
  getAllQuizzes,
  getQuizById,
} from "../controllers/quizController.js";
import { validateObjectId } from "../middleware/validateObjectId.js";

const router = express.Router();

router.post("/create", createQuiz);
router.get("/get", getAllQuizzes);
router.get("/get/:id", validateObjectId, getQuizById);

export default router;
