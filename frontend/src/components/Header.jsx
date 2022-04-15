/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/no-unresolved */
import React from "react";
import logoToto from "@assets/logo_toto.png";
import "../App.css";
// import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <img src={logoToto} alt="logo d'un tatou, mascotte de l'application" />

        <h1>T&apos;As Tout Quiz</h1>
      </nav>
    </div>
  );
}

export default Header;
