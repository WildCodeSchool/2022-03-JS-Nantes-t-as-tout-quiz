import React from "react";
import logoToto from "@assets/logo_toto.png";
import "../App.css";
import "../Header.css";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <nav>
        <NavLink to="/">
          <img
            src={logoToto}
            alt="logo d'un tatou, mascotte de l'application"
          />
        </NavLink>
        <h1>T&apos;As Tout Quiz</h1>
      </nav>
    </div>
  );
}

export default Header;
