/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import Countdown from "@components/CountdownTimer";
import "../App.css";
import "./Home.css";
import "../components/countdown.css";
import prairie from "@assets/prairieChampignons.jpg";
import cascade from "@assets/cascade_eau.jpg";
import parc from "@assets/parc_sous_pluie.jpg";
import pont from "@assets/pont_tronc_arbre.jpg";
import lac from "@assets/lac_ponton.jpg";
import mongolfiere from "@assets/mongolfieres.jpg";
import pontSousBois from "@assets/pont_sous_bois.jpg";
import prairieFleurie from "@assets/prairie_fleurie.jpg";
import prairie2 from "@assets/prairie.jpg";
import montagnesMaison from "@assets/montagnes_maison.jpg";

// function debut à refactoriser
// eslint-disable-next-line consistent-return
function debut() {
  let background = 0;
  background = Math.random();
  if (background < 0.15) {
    return prairie;
  }
  if (background > 0.15 && background < 0.25) {
    return cascade;
  }
  if (background > 0.25 && background < 0.35) {
    return parc;
  }
  if (background > 0.35 && background < 0.45) {
    return pont;
  }
  if (background > 0.45 && background < 0.55) {
    return lac;
  }
  if (background > 0.55 && background < 0.65) {
    return mongolfiere;
  }
  if (background > 0.65 && background < 0.75) {
    return pontSousBois;
  }
  if (background > 0.75 && background < 0.85) {
    return prairieFleurie;
  }
  if (background > 0.85 && background < 0.95) {
    return prairie2;
  }
  if (background > 0.95 && background < 1) {
    return montagnesMaison;
  }
}

function Home() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${debut()})`,
        height: "50rem",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="countdown">
        <Countdown />
      </div>
      <div
        style={{
          marginTop: "50px",
          display: "flex",
          flexFlow: "column nowrap",
          alignItems: "center",
          gap: "5rem",
        }}
      >
        <Bouton name="Règles" className="smallButton" />
        <Bouton name="JOUER" className="bigButton" />
        <Bouton name="Contact" className="smallButton" />
      </div>
    </div>
  );
}

export default Home;
