/* eslint-disable import/no-unresolved */
import AnswerButton from "@components/AnswerButton";
import "@components/Answer.css";
import { useState, useEffect } from "react";
import prairie from "@assets/prairieChampignons.jpg";

export default function Answer() {
  const [questionNumber, setQuestionNumber] = useState(0);
  const [proposition, setProposition] = useState("");
  const [questions, setQuestions] = useState({});
  const getQuestion = () => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((data) => {
        console.warn(data.animaux.débutant[questionNumber].question);
        setQuestions(data.animaux.débutant[questionNumber]);
      });
  };
  useEffect(() => setQuestionNumber(questionNumber + 1), [proposition]);
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
