/* eslint-disable import/no-unresolved */
import React from "react";
import "../App.css";
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
          themeName="🚗 Automobile 🚗"
          quizTheme="automobile"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />

        <AccordeonDetail
          themeName="🦹‍♀️ héroines 🦹‍♀️"
          quizTheme="héroines"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName="🐲 Dragon 🐲"
          quizTheme="dragon"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName="👸 Princesses Disney 👸"
          quizTheme="Princesses Disney"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName=" Cinquième Élément "
          quizTheme="Cinquième Élément"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName=" Dessins animés "
          quizTheme="Dessins animés"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName=" Pokémon "
          quizTheme="pokemon"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName=" chimie "
          quizTheme="chimie"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName=" parlons sexe "
          quizTheme="parlons sexe"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName=" star trek "
          quizTheme="star trek"
          themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
        />
      </div>
    </div>
  );
}

export default Accordeon;
