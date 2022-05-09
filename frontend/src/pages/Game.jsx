/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import AnswerButton from "@components/AnswerButton";
import ScoreContext from "@components/ScoreContext";
import QuizContext from "@components/QuizContext";
import "@components/Game.css";
import "@components/countdown.css";
import React, { useState, useEffect, useContext } from "react";
import cascade from "@assets/cascade_eau.jpg";
import { useNavigate } from "react-router-dom";
import { stockData } from "@pages/data";
import swal from "sweetalert";
import confetti from "https://cdn.skypack.dev/canvas-confetti";

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const { quiz, difficulte } = useContext(QuizContext);
  const [proposition, setProposition] = useState("");
  const [questions, setQuestions] = useState({});
  const navigate = useNavigate();
  function lastQuestion() {
    navigate("/Score");
    confetti();
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

      swal(
        `Bravo ! 
        
        Le savais-tu ?

${questions.anecdote}`,
        {
          button: {
            className: "swal-button",
            closeModal: true,
          },
          className: "popup",
        }
      );
    }
  }, [proposition]);

  useEffect(() => getQuestion(), [proposition]);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${cascade})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <p className="question">
        {questions.question ? questions.question : ""}{" "}
      </p>

      <h1 className="scoring">{questionNumber} / 10</h1>
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
    </div>
  );
}
