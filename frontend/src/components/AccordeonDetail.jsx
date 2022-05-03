/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable import/no-unresolved */
// eslint-disable-next-line import/no-unresolved
import React, { useState, useContext } from "react";
import "@components/Accordeon.css";
import PropTypes from "prop-types";
import QuizContext from "@components/QuizContext";
import { useNavigate } from "react-router-dom";

function AccordeonDetail({ themeName, quizTheme }) {
  const { quiz, setQuiz, setDifficulte } = useContext(QuizContext);
  const navigate = useNavigate();
  function timeUp() {
    navigate("/Game");
  }
  const [deplier, setDeplier] = useState(true);
  const handleChange = (event) => {
    const { value } = event.currentTarget;
    setQuiz(quizTheme);
    setDifficulte(value);
    timeUp();
  };
  return (
    <section id="drop">
      <button
        className="thematique"
        type="button"
        onClick={() => setDeplier(!deplier)}
      >
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

// AccordeonDetail.propTypes = {
//   themes: PropTypes.arrayOf(PropTypes.string),
//   themeName: PropTypes.string,
// };
// AccordeonDetail.defaultProps = {
//   themes: [],
//   themeName: "",
// };

export default AccordeonDetail;
