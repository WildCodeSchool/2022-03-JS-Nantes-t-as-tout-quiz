/* eslint-disable import/no-unresolved */
import "./Regles.css";
import prairie from "@assets/prairieChampignons.jpg";
import { Link } from "react-router-dom";

export default function Regles() {
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
      <h2>Règles</h2>
      <div className="instructions">
        <h3>🎯 Principe</h3>
        <p>
          L&apos;ensemble des questions du <b>T&apos;As Tout Quiz</b> sont
          disponibles en appuyant sur le bouton <b>« JOUER »</b>. Choisis parmi
          une des <b>thématiques</b> proposées, en fonction de son niveau de{" "}
          <b>difficulté</b>, et le <b>quiz</b> se lancera ensuite.
          <p>
            🔥 <b>Attention :</b> Tu n&apos;as que 10 secondes par question !
          </p>
          N&apos;hésite pas à cliquer sur notre tatou pour revenir à la page
          d&apos;accueil !
        </p>
      </div>
      <Link to="/Themes" className="jouer">
        <h4>JOUER</h4>
      </Link>
    </div>
  );
}
