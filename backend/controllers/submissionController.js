import Quiz from "../models/Quiz.js";
import asyncHandler from "express-async-handler";
import QuizSubmission from "../models/QuizSubmission .js";

export const submitQuiz = asyncHandler(async (req, res, next) => {
  const { responses } = req.body;

  try {
    const quiz = await Quiz.findById(req.params.id);
    if (!quiz) {
      return res
        .status(404)
        .json({ success: false, message: "Quiz not found." });
    }

    let score = 0;

    // Calculate the score based on the responses
    responses.forEach((response) => {
      const question = quiz.questions.id(response.questionId);
      if (question && question.correctAnswer === response.selectedAnswer) {
        score += 1;
      }
    });

    // Create a new QuizSubmission entry
    const submission = new QuizSubmission({
      quiz: quiz,
      responses,
      score,
    });

    await submission.save();

    res.status(201).json({ success: true, data: { submission, score } });
  } catch (error) {
    console.error("Error submitting quiz:", error);
    next(error);
  }
});
