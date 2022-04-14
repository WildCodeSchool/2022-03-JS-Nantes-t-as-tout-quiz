/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import "../App.css";
import prairie from "@assets/prairieChampignons.jpg";

function Home() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        height: "1200px",
        backgroundSize: "cover",
      }}
    >
      <Bouton name="Règles" className="smallButton" />
      <Bouton name="JOUER" className="bigButton" />
      <Bouton name="Contact" className="smallButton" />
    </div>
  );
}

export default Home;
