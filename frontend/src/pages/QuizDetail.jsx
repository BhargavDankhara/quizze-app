import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const QuizDetail = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const response = await axios.get(`/api/quizzes/get/${id}`);
        setQuiz(response.data.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching quiz:", error);
        setError("Failed to fetch quiz. Please try again.");
        setLoading(false);
      }
    };

    fetchQuiz();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!quiz) return <div>No quiz found.</div>; // For extra safety

  return (
    <div>
      <h1>{quiz.title}</h1>
      <p>{quiz.description}</p>
      {quiz.questions.map((question) => (
        <div key={question._id}>
          <h2>{question.questionText}</h2>
          {question.answerChoices.map((choice) => (
            <div key={choice}>
              <input type="radio" name={question._id} value={choice} />
              <label>{choice}</label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default QuizDetail;
