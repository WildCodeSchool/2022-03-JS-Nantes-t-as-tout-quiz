import "./Contact.css";
import prairie from "@assets/prairieChampignons.jpg";

export default function Contact() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${prairie})`,
        height: "1200px",
        backgroundSize: "cover",
      }}
    >
      <h2>Contact</h2>
      <form>
        <div>
          <input
            className="inputClass"
            type="text"
            id="name"
            name="name"
            placeholder="Votre nom et prénom"
            required
          />
        </div>
        <div>
          <input
            className="inputClass"
            type="mail"
            id="mail"
            name="mail"
            placeholder="Votre email"
            required
          />
        </div>
        <div>
          <select name="sujet" size="1">
            <option value="Choisissez votre sujet" selected>
              Choisissez votre sujet
            </option>
            <option value="Signaler un bug">Signaler un bug</option>
            <option value="Suggérer une amélioration / modification">
              Suggérer une amélioration / modification
            </option>
            <option value="autre">Autre</option>
          </select>
        </div>
        <div>
          <textarea id="message" name="message" placeholder="Votre message" />
        </div>
        <div>
          <input className="inputSubmit" type="submit" value="Envoyer" />
        </div>
      </form>
    </div>
  );
}
