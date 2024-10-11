import { useState } from "react";
import PropTypes from "prop-types";

const QuizCard = ({ quiz }) => {
  const [isQuizActive, setIsQuizActive] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState({}); // Store user's answers
  const [score, setScore] = useState(null); // Store score after submission

  const handleAnswerChange = (questionId, answer) => {
    setSelectedAnswers((prev) => ({ ...prev, [questionId]: answer }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let scoreCount = 0;

    quiz.questions.forEach((question) => {
      if (selectedAnswers[question._id] === question.correctAnswer) {
        scoreCount += 1;
      }
    });

    setScore(scoreCount);
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform duration-300 transform hover:scale-105 mt-8">
      <div className="p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-3">{quiz.title}</h2>
        <p className="text-gray-700 mb-5">{quiz.description}</p>

        {!isQuizActive ? (
          <button
            onClick={() => setIsQuizActive(true)}
            className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
          >
            Start Quiz
          </button>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {quiz.questions.map((question) => (
              <div key={question._id} className="border-b pb-4 mb-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {question.questionText}
                </h3>
                <div className="flex flex-col mt-2">
                  {question.answerChoices.map((choice) => (
                    <label
                      key={choice}
                      className="flex items-center mb-2 cursor-pointer"
                    >
                      <input
                        type="radio"
                        name={question._id}
                        value={choice}
                        checked={selectedAnswers[question._id] === choice}
                        onChange={() =>
                          handleAnswerChange(question._id, choice)
                        }
                        className="mr-2 h-4 w-4 border-gray-300 rounded-full checked:bg-blue-500 checked:border-blue-500 focus:ring-blue-500"
                      />
                      {choice}
                    </label>
                  ))}
                </div>
              </div>
            ))}
            <button
              type="submit"
              className="bg-blue-600 text-white py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>
            {score !== null && (
              <p className="mt-4 text-lg font-semibold text-gray-800">
                Your Score: {score} / {quiz.questions.length}
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    questions: PropTypes.arrayOf(
      PropTypes.shape({
        _id: PropTypes.string.isRequired,
        questionText: PropTypes.string.isRequired,
        answerChoices: PropTypes.arrayOf(PropTypes.string).isRequired,
        correctAnswer: PropTypes.string.isRequired,
      })
    ).isRequired,
  }).isRequired,
};

export default QuizCard;
