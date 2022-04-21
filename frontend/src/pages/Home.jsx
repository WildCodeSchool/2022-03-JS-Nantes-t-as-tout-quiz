/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import Countdown from "@components/CountdownTimer";
import "../App.css";
import "./Home.css";
import "../components/countdown.css";
import prairie from "@assets/prairieChampignons.jpg";

// eslint-disable-next-line consistent-return
function Home() {
  return (
    <div
      style={{
        backgroundImage: `url(${prairie})`,
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
