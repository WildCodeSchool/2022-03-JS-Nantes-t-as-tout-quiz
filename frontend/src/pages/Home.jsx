import Bouton from "@components/Bouton";
import "../App.css";
import prairie from "@assets/prairieChampignons.jpg";
import { NavLink } from "react-router-dom";

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
      <NavLink to="/Regles">
        <Bouton name="Règles" className="smallButton" />
      </NavLink>
      <Bouton name="JOUER" className="bigButton" />
      <NavLink to="/Contact">
        <Bouton name="Contact" className="smallButton" />
      </NavLink>
    </div>
  );
}
