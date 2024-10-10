import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const QuizCard = ({ quiz }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300 ease-in-out p-6">
      <h3 className="text-xl font-semibold mb-2 text-gray-800">{quiz.title}</h3>
      <p className="text-gray-600 mb-4">{quiz.description}</p>
      <div className="flex justify-between items-center">
        <Link to={`/quiz/${quiz._id}`}>
          <button className="bg-indigo-500 text-white font-semibold py-2 px-4 rounded hover:bg-indigo-600 transition duration-200">
            Start Quiz
          </button>
        </Link>
        <span className="text-gray-500 text-sm">
          {quiz.questionCount} Questions
        </span>
      </div>
    </div>
  );
};

QuizCard.propTypes = {
  quiz: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    questionCount: PropTypes.string.isRequired,
  }).isRequired,
};

export default QuizCard;
