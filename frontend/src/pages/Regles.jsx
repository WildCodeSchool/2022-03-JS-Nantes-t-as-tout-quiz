import "./Regles.css";
import prairie from "@assets/prairieChampignons.jpg";

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
          disponibles en appuyant sur le bouton <b>« JOUER »</b>. Choisissez
          parmi une des <b>thématiques</b> proposées, en fonction de son niveau
          de <b>difficulté</b>, et le <b>quiz</b> se lancera ensuite.
        </p>
        <p>
          🔥 <b>Attention :</b> Vous n&apos;aurez que 10 secondes par question !
        </p>
      </div>
    </div>
  );
}
