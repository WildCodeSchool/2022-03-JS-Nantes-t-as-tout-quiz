/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
import logoToto from "@assets/logo_toto.png";
import "../App.css";
import "./Header.css";
import { NavLink } from "react-router-dom";
import ScoreContext from "@components/ScoreContext";

function Header() {
  const { setScore } = useContext(ScoreContext);
  return (
    <div
      style={{
        position: "fixed",
        zIndex: 3,
        width: "100%",
      }}
    >
      <nav>
        <NavLink to="/">
          <img
            src={logoToto}
            alt="logo d'un tatou, mascotte de l'application"
            onClick={() => setScore(0)}
          />
        </NavLink>
        <h1>T&apos;As Tout Quiz</h1>
      </nav>
    </div>
  );
}

export default Header;
