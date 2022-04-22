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
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quam
          voluptate alias porro repellendus commodi temporibus, quis,
          repudiandae perspiciatis aut soluta magnam nesciunt, aspernatur
          eveniet quisquam. Dolore nemo atque harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          sapiente pariatur voluptas a ullam nam, id nihil, necessitatibus,
          consequuntur cumque non dignissimos. Quia fugit incidunt laborum neque
          reprehenderit beatae dolorem?
        </p>
      </div>
    </div>
  );
}
