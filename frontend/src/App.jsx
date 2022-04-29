import { Route, Routes } from "react-router-dom";
/* eslint-disable import/no-unresolved */
import Header from "@components/Header";
import Home from "@pages/Home";
import Regles from "@pages/Regles";
// import Game from "@pages/Game";
import Contact from "@pages/Contact";
import NotificationMessage from "@components/NotificationMessage";

import "./App.css";
import "./pages/Home.css";
import "@components/Header.css";
import Themes from "@pages/Themes";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Regles" element={<Regles />} />
        <Route path="/Jouer" element={<Themes />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/NotificationMessage" element={<NotificationMessage />} />
      </Routes>
    </div>
  );
}

export default App;
