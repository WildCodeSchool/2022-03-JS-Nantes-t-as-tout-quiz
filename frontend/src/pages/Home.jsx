/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import "../App.css";
import "../Accueil.css";
import prairie from "@assets/prairieChampignons.jpg";

function Home() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        height: "1200px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div
        style={{
          marginTop: "150px",
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
