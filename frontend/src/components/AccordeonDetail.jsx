/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
import "@components/Accordeon.css";
import QuizContext from "@components/QuizContext";
import { useNavigate } from "react-router-dom";

function AccordeonDetail({ themeName, quizTheme }) {
  const { quiz, setQuiz, setDifficulte } = useContext(QuizContext);
  const navigate = useNavigate();
  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setQuiz(quizTheme);
    setDifficulte(value);
    navigate("/Game");
  };
  return (
    <section className="drop">
      <button className="thematique" type="button">
        {themeName}
      </button>
      <select name="quiz" defaultValue={quiz} onChange={handleChange}>
        <option value="">Choix de la difficulté</option>
        <option value="débutant">Débutant</option>
        <option value="confirmé">Confirmé</option>
        <option value="expert">Expert</option>
      </select>
    </section>
  );
}

export default AccordeonDetail;
