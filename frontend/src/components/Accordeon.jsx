import React from "react";
import "../App.css";
// eslint-disable-next-line import/no-unresolved
import "@components/Accordeon.css";

import AccordeonDetail from "./AccordeonDetail";

function Accordeon() {
  return (
    <div className="calc">
      <div className="dropdown">
        <AccordeonDetail
          themeName="🐼 Animaux 🐼"
          quizTheme="animaux"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName="🌐 Automobile 🌐"
          quizTheme="automobile"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />

        <AccordeonDetail
          themeName="🎮 héroines 🎮"
          quizTheme="héroines"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
      </div>
    </div>
  );
}

export default Accordeon;
