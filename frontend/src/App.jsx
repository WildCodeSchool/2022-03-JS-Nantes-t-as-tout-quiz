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
import ReponseContext from "@components/ReponseContext";
import QuizContext from "@components/QuizContext";

import "./App.css";
import "./pages/Home.css";
import "@components/Header.css";
import Themes from "@pages/Themes";
import { useState } from "react";

function App() {
  const [reponse, setReponse] = useState(0);
  const [quiz, setQuiz] = useState("");
  const [difficulte, setDifficulte] = useState("");
  return (
    <div>
      <ReponseContext.Provider value={{ reponse, setReponse }}>
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
      </ReponseContext.Provider>
    </div>
  );
}

export default App;
