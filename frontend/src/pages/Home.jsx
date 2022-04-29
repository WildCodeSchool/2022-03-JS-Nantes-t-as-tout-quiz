/* eslint-disable import/no-unresolved */
import Bouton from "@components/Bouton";
import "../App.css";
import prairie from "@assets/prairieChampignons.jpg";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        height: "1200px",
        backgroundSize: "cover",
      }}
    >
      <Link to="/Themes">
        <Bouton name="JOUER" className="bigButton" />
      </Link>
    </div>
  );
}
