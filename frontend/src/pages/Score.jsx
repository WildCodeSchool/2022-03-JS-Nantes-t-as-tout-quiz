/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
import React, { useContext } from "react";
import logoHome from "@assets/logo_home.png";
import prairie from "@assets/prairieChampignons.jpg";
import "@components/NotificationMessage.css";
import { NavLink } from "react-router-dom";
import ReponseContext from "@components/ReponseContext";

function Score() {
  const { reponse } = useContext(ReponseContext);
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
        Score <br /> {reponse} / 10{" "}
      </h2>
      <div className="fondIcone">
        <NavLink to="/">
          <img
            className="logoHome"
            src={logoHome}
            alt="logo d'une maison: permet le retour à la page d'accueil"
          />
        </NavLink>
      </div>
    </div>
  );
}

export default Score;
