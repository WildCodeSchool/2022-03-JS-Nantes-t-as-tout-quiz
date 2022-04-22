/* eslint-disable import/no-duplicates */
/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import Countdown from "@components/CountDownTimer";
import "../App.css";
import "./Home.css";
import "./Jeux.css";
import "../components/countdown.css";
import React from "react";
import { useState, useEffect } from "react";
import prairie from "@assets/prairieChampignons.jpg";
import CountDown from "@components/CountDownTimer";

// eslint-disable-next-line consistent-return
function Jeux() {
  const [question, setQuestion] = useState({});
  useEffect(() => getQuestion(), []);
  const getQuestion = () => {
    fetch("https://sheetdb.io/api/v1/tuyf4vlxxrniq")
      .then((response) => response.json())
      .then((data) => {
        setQuestion(data[0]);
        console.warn(data[0]);
      });
  };
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* <CountDown /> */}
          <p className="question">{question.question}</p>
        </div>
        <Bouton name={question.proposition1} className="buttonResponse" />
        <Bouton name={question.proposition2} className="buttonResponse" />
        <Bouton name={question.proposition3} className="buttonResponse" />
        <Bouton name={question.proposition4} className="buttonResponse" />
      </div>
    </div>
  );
}

export default Jeux;
