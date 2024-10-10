import asyncHandler from "express-async-handler";
import Quiz from "../models/Quiz.js";

export const createQuiz = async (req, res, next) => {
  try {
    const { title, description, questions, courseId } = req.body;

    // Ensure required fields are provided
    if (!title || !questions || questions.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Title and questions are required fields.",
      });
    }

    // Create new quiz instance
    const quiz = new Quiz({
      title,
      description,
      questions,
      course: courseId,
    });

    await quiz.save();

    return res.status(201).json({
      success: true,
      message: "Quiz created successfully!",
      data: quiz,
    });
  } catch (error) {
    next(error);
  }
};

// Get all quizzes
export const getAllQuizzes = asyncHandler(async (req, res) => {
  const quizzes = await Quiz.find();
  res.status(200).json({ success: true, data: quizzes });
});

// Get a specific quiz by ID
export const getQuizById = asyncHandler(async (req, res) => {
  const quiz = await Quiz.findById(req.params.id);
  if (!quiz)
    return res.status(404).json({ success: false, message: "Quiz not found" });
  res.status(200).json({ success: true, data: quiz });
});
