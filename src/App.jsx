// App.jsx
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useState } from "react";

import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import QuizQuestion from "./pages/QuizQuestion.jsx";
import Result from "./pages/Result.jsx";
import Review from "./pages/Review.jsx";
import Leaderboard from "./pages/Leaderboard.jsx";

import { AppContext } from "./context/Appcontext.jsx";
import { Layout } from "./components/Layout.jsx";


function AnimatedRoutes({
  setQuizQuestions,
  setQuizAnswers,
  name,
  questions,
  answers,
  setName
}) {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>

        <Route
          path="/"
          element={
            <Layout>
              <Home setName={setName} />
            </Layout>
          }
        />

        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/quiz"
          element={
            <Layout>
              <QuizQuestion
                setQuizQuestions={setQuizQuestions}
                setQuizAnswers={setQuizAnswers}
              />
            </Layout>
          }
        />

        <Route
          path="/result"
          element={
            <Layout>
              <Result
                name={name}
                setQuizQuestions={setQuizQuestions}
                setQuizAnswers={setQuizAnswers}
              />
            </Layout>
          }
        />

        <Route
          path="/leaderboard"
          element={
            <Layout>
              <Leaderboard
                setQuizQuestions={setQuizQuestions}
                setQuizAnswers={setQuizAnswers}
              />
            </Layout>
          }
        />

        <Route
          path="/review"
          element={
            <Layout>
              <Review questions={questions} answers={answers} />
            </Layout>
          }
        />

      </Routes>
    </AnimatePresence>
  );
}


function App() {
  const [username, setUsername] = useState(null);
  const [name, setName] = useState("");
  const [questions, setQuizQuestions] = useState([]);
  const [answers, setQuizAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [questionLength, setQuestionLength] = useState(0);
  const [quizTimer, setQuizTimer] = useState(null);
  const [category, setCategory] = useState(null);

  return (
    <AppContext.Provider
      value={{
        score,
        setScore,
        questionLength,
        setQuestionLength,
        username,
        setUsername,
        quizTimer,
        setQuizTimer,
        category,
        setCategory,
      }}
    >
      <BrowserRouter>
        <AnimatedRoutes
          setQuizQuestions={setQuizQuestions}
          setQuizAnswers={setQuizAnswers}
          name={name}
          questions={questions}
          answers={answers}
          setName={setName}
        />
      </BrowserRouter>
    </AppContext.Provider>
  );
}

export default App;