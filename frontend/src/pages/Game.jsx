/* eslint-disable import/no-unresolved */
import QuestionNumber from "@components/QuestionNumber";
import CountDown from "@components/CountDownTimer";
import Question from "@components/Question";
import Answer from "@components/Answer";
import prairie from "@assets/prairieChampignons.jpg";
import "./Game.css";

export default function Game() {
  return (
    <main
      style={{
        backgroundImage: `url(${prairie})`,
        height: "1200px",
        backgroundSize: "cover",
      }}
    >
      <section>
        <QuestionNumber />
        <CountDown />
      </section>
      <section>
        <Question />
        <Answer />
      </section>
    </main>
  );
}
