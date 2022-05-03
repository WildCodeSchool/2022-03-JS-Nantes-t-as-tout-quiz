/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import AnswerButton from "@components/AnswerButton";
import ReponseContext from "@components/ReponseContext";
import QuizContext from "@components/QuizContext";
import "@components/Game.css";
import React, { useState, useEffect, useContext } from "react";
import prairie from "@assets/prairieChampignons.jpg";
import { useNavigate } from "react-router-dom";

export default function Game() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const { reponse, setReponse } = useContext(ReponseContext);
  const { quiz, difficulte } = useContext(QuizContext);
  const [proposition, setProposition] = useState("");
  const [questions, setQuestions] = useState({});
  const navigate = useNavigate();
  function timeUp() {
    navigate("/Score");
  }
  const getQuestion = () => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data[quiz][difficulte][questionNumber]);
      });
  };
  useEffect(() => {
    if (questionNumber < 10) {
      setQuestionNumber(questionNumber + 1);
    } else {
      timeUp();
    }
    if (proposition === questions.réponse) {
      setReponse(reponse + 1);
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
