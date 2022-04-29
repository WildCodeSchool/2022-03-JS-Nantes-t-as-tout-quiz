import Bouton from "@components/Bouton";
import "@components/Answer.css";

export default function Answer() {
  return (
    <>
      <Bouton name="Celestia" className="button answ-one" />
      <Bouton name="Azeroth" className="button answ-two" />
      <Bouton name="Tyrie" className="button answ-three" />
      <Bouton name="Koprolu" className="button answ-four" />
    </>
  );
}
