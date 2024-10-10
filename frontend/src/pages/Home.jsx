import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to QuizMaster!
      </h1>
      <p className="text-lg text-gray-700 text-center mb-6 max-w-lg">
        Test your knowledge with a variety of quizzes across different topics!
        Choose a quiz, answer multiple-choice questions, and see how you score.
      </p>
      <Link to="/quizzes">
        <button className="bg-blue-500 text-white font-semibold py-2 px-6 rounded shadow-lg hover:bg-blue-600 transition">
          Start Quizzes
        </button>
      </Link>
    </div>
  );
};

export default Home;
