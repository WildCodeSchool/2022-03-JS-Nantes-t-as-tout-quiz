/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import CountDown from "@components/CountDownTimer";
// import RenderQuestion from "@components/RenderQuestion";
import "../App.css";
import "./Home.css";
import "./Jeux.css";
import "../components/countdown.css";
import React from "react";
import { useState, useEffect } from "react";
import prairie from "@assets/prairieChampignons.jpg";

// eslint-disable-next-line consistent-return
function Jeux() {
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  const [question, setQuestion] = useState({});
  const getQuestion = () => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data.animaux.débutant[getRandomInt(11)]);
        // console.warn(question.réponse);
      });
  };
  useEffect(() => getQuestion(), []);
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
      <div />
      <div
        style={{
          marginTop: "13rem",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
        }}
      >
        <div>
          <CountDown />
          <p className="question">{question.question}</p>
        </div>
        <Bouton
          name={question.propositions ? question.propositions[0] : ""}
          className="buttonResponse"
          reponse={question.réponse}
          anecdot={question.anecdote ? question.anecdote : ""}
        />
        <Bouton
          name={question.propositions ? question.propositions[1] : ""}
          className="buttonResponse"
          reponse={question.réponse}
          anecdot={question.anecdote ? question.anecdote : ""}
        />
        <Bouton
          name={question.propositions ? question.propositions[2] : ""}
          className="buttonResponse"
          reponse={question.réponse}
          anecdot={question.anecdote ? question.anecdote : ""}
        />
        <Bouton
          name={question.propositions ? question.propositions[3] : ""}
          className="buttonResponse"
          reponse={question.réponse}
          anecdot={question.anecdote ? question.anecdote : ""}
        />
      </div>
    </div>
  );
}

export default Jeux;
