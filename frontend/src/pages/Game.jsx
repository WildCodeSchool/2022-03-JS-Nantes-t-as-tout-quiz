/* eslint-disable no-alert */
/* eslint-disable import/no-unresolved */
import AnswerButton from "@components/AnswerButton";
import CountDownTimer from "@components/CountDownTimer";
import ScoreContext from "@components/ScoreContext";
import QuizContext from "@components/QuizContext";
import "@components/Game.css";
import React, { useState, useEffect, useContext } from "react";
import prairie from "@assets/prairieChampignons.jpg";
import { useNavigate } from "react-router-dom";
import { stockData } from "@pages/data";

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const { quiz, difficulte } = useContext(QuizContext);
  const [proposition, setProposition] = useState("");
  const [questions, setQuestions] = useState({});
  const navigate = useNavigate();
  function lastQuestion() {
    navigate("/Score");
  }
  const getQuestion = () => {
    setQuestions(stockData[quiz][difficulte][questionNumber]);
  };
  useEffect(() => {
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber + 1);
    } else {
      lastQuestion();
    }
    if (proposition === questions.réponse) {
      setScore(score + 1);
      alert(`Bravo ! Le savais-tu ?

${questions.anecdote}`);
    }
  }, [proposition]);
  useEffect(() => getQuestion(), [proposition]);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <section>
        <p className="question">
          {questions.question ? questions.question : ""}{" "}
        </p>
        <CountDownTimer nbQuestion={questionNumber} />
      </section>
      <section>
        <h1>{questionNumber} / 10</h1>
        <AnswerButton
          className="button answ-one"
          proposition={questions.question ? questions.propositions[0] : ""}
          setProposition={setProposition}
        />
        <AnswerButton
          className="button answ-two"
          proposition={questions.question ? questions.propositions[1] : ""}
          setProposition={setProposition}
        />
        <AnswerButton
          className="button answ-three"
          proposition={questions.question ? questions.propositions[2] : ""}
          setProposition={setProposition}
        />
        <AnswerButton
          className="button answ-four"
          proposition={questions.question ? questions.propositions[3] : ""}
          setProposition={setProposition}
        />
      </section>
    </div>
  );
}
