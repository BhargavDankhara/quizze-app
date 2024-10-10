import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuizList from "./pages/QuizList ";
import Navbar from "./components/Navbar";
import QuizDetail from "./pages/QuizDetail";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/quizzes" element={<QuizList />} />
        <Route exact path="/quizzes/detail" element={<QuizDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
