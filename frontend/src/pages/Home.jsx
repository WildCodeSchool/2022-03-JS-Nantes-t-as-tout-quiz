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
      <Bouton name="Règles" className="petitBouton" />
      <Bouton name="JOUER" className="grosBouton" />
      <Bouton name="Contact" className="petitBouton" />
    </div>
  );
}

export default Home;
