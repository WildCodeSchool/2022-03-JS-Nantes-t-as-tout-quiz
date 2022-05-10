/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import "../App.css";
import "./Home.css";
import prairie from "@assets/prairieChampignons.jpg";
import { Link } from "react-router-dom";
import logoToto from "@assets/logo_toto.png";

function Home() {
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
      <div />
      <div
        style={{
          marginTop: "13rem",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          gap: "4rem",
        }}
      >
        <Link to="/Regles">
          <Bouton name="Règles" className="smallButton" />
        </Link>
        <Link to="/Themes">
          <Bouton name="JOUER" className="bigButton" />
        </Link>
        <Link to="/Contact">
          <Bouton name="Contact" className="smallButton" />
        </Link>
        <img
          className="totoHome"
          src={logoToto}
          alt="logo d'un tatou, mascotte de l'application"
        />
      </div>
    </div>
  );
}

export default Home;
