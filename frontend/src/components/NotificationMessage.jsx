/* eslint-disable import/no-unresolved */
import React from "react";
import logoHome from "@assets/logo_home.png";
import prairie from "@assets/prairieChampignons.jpg";
import "./NotificationMessage.css";

import { NavLink } from "react-router-dom";

function NotificationMessage() {
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
      <h2 className="notifMsg">Message envoyé</h2>
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

export default NotificationMessage;
