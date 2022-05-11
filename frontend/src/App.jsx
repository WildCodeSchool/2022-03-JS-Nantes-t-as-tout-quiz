/* eslint-disable react/jsx-no-constructed-context-values */
import { Route, Routes } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import Header from "@components/Header";
import Home from "@pages/Home";
import Regles from "@pages/Regles";
import Game from "@pages/Game";
import Score from "@pages/Score";
import Contact from "@pages/Contact";
import NotificationMessage from "@components/NotificationMessage";
import ScoreContext from "@components/ScoreContext";
import QuizContext from "@components/QuizContext";
// eslint-disable-next-line import/no-extraneous-dependencies
import ClimbingBoxLoader from "react-spinners/ClimbingBoxLoader";
import CountDownContext from "@components/CountDownContext";

import "./App.css";
import "./pages/Home.css";
import "@components/Header.css";
import Themes from "@pages/Themes";
import React, { useState, useEffect } from "react";

function App() {
  const [score, setScore] = useState(0);
  const [count, setCount] = useState(10);
  const [quiz, setQuiz] = useState("");
  const [difficulte, setDifficulte] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="loader">
          <ClimbingBoxLoader color="#FFE0B5" isLoading={isLoading} size={50} />
        </div>
      ) : null}
      <CountDownContext.Provider value={{ count, setCount }}>
        <ScoreContext.Provider value={{ score, setScore }}>
          <QuizContext.Provider
            value={{ quiz, setQuiz, difficulte, setDifficulte }}
          >
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Regles" element={<Regles />} />
              <Route path="/Game" element={<Game />} />
              <Route path="/Score" element={<Score />} />
              <Route path="/Contact" element={<Contact />} />
              <Route path="/Themes" element={<Themes />} />
              <Route
                path="/NotificationMessage"
                element={<NotificationMessage />}
              />
            </Routes>
          </QuizContext.Provider>
        </ScoreContext.Provider>
      </CountDownContext.Provider>
    </div>
  );
}

export default App;
