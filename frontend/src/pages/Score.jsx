/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
import logoHome from "@assets/logo_home.png";
import logoTheme from "@assets/list_theme.png";
import pontTroncArbre from "@assets/pont_tronc_arbre.jpg";
import "@components/NotificationMessage.css";
import { NavLink } from "react-router-dom";
import ScoreContext from "@components/ScoreContext";

function Score() {
  const { score, setScore } = useContext(ScoreContext);
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${pontTroncArbre})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
      }}
    >
      <h2 className="notifMsg">
        {" "}
        Score <br /> {score} / 10{" "}
      </h2>
      <div className="boutonsScore">
        <div className="fondIcone">
          <NavLink to="/Themes">
            <img
              className="logoTheme"
              src={logoTheme}
              alt="logo qui permet le retour à la page thématique"
              title="Retour à la page thématique"
              onClick={() => setScore(0)}
            />
          </NavLink>
        </div>
        <div className="fondIcone">
          <NavLink to="/">
            <img
              className="logoHome"
              src={logoHome}
              alt="logo d'une maison: permet le retour à la page d'accueil"
              title="Retour à la page d'accueil"
              onClick={() => setScore(0)}
            />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Score;
