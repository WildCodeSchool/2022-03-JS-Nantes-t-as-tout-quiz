/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import AnswerButton from "@components/AnswerButton";
import ScoreContext from "@components/ScoreContext";
import QuizContext from "@components/QuizContext";
import CountDownContext from "@components/CountDownContext";
import "@components/Game.css";
import "@components/countdown.css";
import React, { useState, useEffect, useContext } from "react";
import cascade from "@assets/cascade_eau.jpg";
import { useNavigate } from "react-router-dom";
import { stockData } from "@pages/data";
import swal from "sweetalert";
import confetti from "https://cdn.skypack.dev/canvas-confetti";
import CountDown from "@components/CountDown";

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { score, setScore } = useContext(ScoreContext);
  const { count, setCount } = useContext(CountDownContext);
  const { quiz, difficulte } = useContext(QuizContext);
  const [proposition, setProposition] = useState("");
  const [questions, setQuestions] = useState({});
  const navigate = useNavigate();
  const getQuestion = () => {
    setQuestions(stockData[quiz][difficulte][questionNumber]);
  };

  useEffect(() => {
    if (count === 0) {
      setCount(null);
      swal(
        `Time up !     

      La réponse était :

      ${questions.réponse}`,
        { className: "popup2", icon: "error" }
      )
        .then(() => setQuestionNumber(questionNumber + 1))
        .then(() => getQuestion())
        .then(() => setCount(10));
    }
    if (count === 0 && questionNumber === 10) {
      setCount(null);
      swal(
        `Time up !

      La réponse était :

      ${questions.réponse}`,
        { className: "popup2", icon: "error" }
      )
        .then(() => navigate("/score"))
        .then(() => {
          if (score > 5) {
            confetti({
              particleCount: 1000,
              spread: 150,
              angle: 100,
              startVelocity: 75,
              shapes: ["square", "circle", "square"],
              colors: ["F4F700", "FF5733", "00ECF7", "F700D9"],
              gravity: 0.4,
              origin: { x: 550, y: 750 },
            });
          }
        });
    }
  }, [count]);

  useEffect(() => {
    if (
      questionNumber < 10 &&
      proposition === questions.réponse &&
      proposition !== ""
    ) {
      setCount(null);
      swal(
        `Bravo ! 
        
        Le savais-tu ?

${questions.anecdote}`,
        { icon: "success", className: "popup" }
      )
        .then(() => setCount(10))
        .then(() => setQuestionNumber(questionNumber + 1))
        .then(() => setScore(score + 1))
        .then(() => getQuestion());
    }
    if (
      questionNumber < 10 &&
      proposition !== questions.réponse &&
      proposition !== ""
    ) {
      setCount(null);
      swal(
        `Dommage ! 
        La réponse était :

${questions.réponse}`,
        {
          icon: "error",
          button: {
            className: "swal-button",
          },
          className: "popup2",
        }
      )
        .then(() => setCount(10))
        .then(() => setQuestionNumber(questionNumber + 1))
        .then(() => getQuestion());
    }
    if (questionNumber === 10 && proposition !== questions.réponse) {
      setCount(null);
      swal(
        `Dommage !
          La réponse était :

    ${questions.réponse}`,
        {
          icon: "error",
          button: {
            className: "swal-button",
          },
          className: "popup2",
        }
      )
        .then(() => setQuestionNumber(questionNumber + 1))
        .then(() => navigate("/score"))
        .then(() => {
          if (score > 5) {
            confetti({
              particleCount: 1000,
              spread: 300,
              angle: 100,
              startVelocity: 75,
              shapes: ["square", "circle", "square"],
              colors: ["F4F700", "FF5733", "00ECF7", "F700D9"],
              gravity: 0.4,
            });
          }
        });
    }
    if (questionNumber === 10 && proposition === questions.réponse) {
      setCount(null);
      swal(
        `Bravo ! 
        
        Le savais-tu ?

${questions.anecdote}`,
        {
          icon: "success",
          button: {
            className: "swal-button",
          },
          className: "popup",
        }
      )
        .then(() => setScore(score + 1))
        .then(() => navigate("/score"))
        .then(() => {
          if (score > 5) {
            confetti({
              particleCount: 1000,
              spread: 300,
              angle: 100,
              startVelocity: 75,
              shapes: ["square", "circle", "square"],
              colors: ["F4F700", "FF5733", "00ECF7", "F700D9"],
              gravity: 0.4,
            });
          }
        });
    }
  }, [proposition]);

  useEffect(() => {
    setScore(0);
    setCount(10);
    setQuestionNumber(questionNumber + 1);
    getQuestion();
  }, []);

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
      <CountDown />
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
