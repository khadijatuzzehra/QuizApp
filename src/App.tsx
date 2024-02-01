import React, { useState } from "react";
import QuestionCard from "./components/QuestionCard";
import { fetchQuizQuestions } from "./Api";
import { QuestionsState, Difficulty } from "./Api";
type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const TOTAL_QUESTIONS = 10;
function App() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  console.log(fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY));
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    const newQuestions = await fetchQuizQuestions(
      TOTAL_QUESTIONS,
      Difficulty.EASY
    );
    setQuestions(newQuestions);
  };
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};
  const nextQuestion = () => {};
  return (
    <div className="App">
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}></button>
      <p className="score">Score: </p>
      <p>Loading Questions ...</p>
      {/* <QuestionCard
        questionNum={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : false}
        callback={checkAnswer}
      /> */}
      <button className="next-question" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;
