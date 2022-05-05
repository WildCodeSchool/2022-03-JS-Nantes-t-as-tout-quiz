/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
import logoHome from "@assets/logo_home.png";
import prairie from "@assets/prairieChampignons.jpg";
import "@components/NotificationMessage.css";
import { NavLink } from "react-router-dom";
import ScoreContext from "@components/ScoreContext";

function Score() {
  const { score, setScore } = useContext(ScoreContext);

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
      <h2 className="notifMsg">
        {" "}
        Score <br /> {score} / 10{" "}
      </h2>
      <div className="fondIcone">
        <NavLink to="/">
          <img
            className="logoHome"
            src={logoHome}
            alt="logo d'une maison: permet le retour à la page d'accueil"
            onClick={() => setScore(0)}
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Score;
