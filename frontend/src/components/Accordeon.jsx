import React from "react";
import "../App.css";
// eslint-disable-next-line import/no-unresolved
import "@components/Accordeon.css";

import AccordeonDetail from "./AccordeonDetail";

function Accordeon() {
  return (
    <div className="dropdown">
      <AccordeonDetail
        themeName="Animaux"
        quizTheme="animaux"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName="Automobile"
        quizTheme="automobile"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />

      <AccordeonDetail
        themeName="Héroines"
        quizTheme="héroines"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName="Dragon"
        quizTheme="dragon"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName="Princesses Disney"
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
        themeName=" Chimie "
        quizTheme="chimie"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Parlons sexe "
        quizTheme="parlons sexe"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Star Trek "
        quizTheme="star trek"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Nombre "
        quizTheme="nombre"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Playstation 2 "
        quizTheme="playstation 2"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Nintendo "
        quizTheme="nintendo"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Faune et flore marine "
        quizTheme="faune et flore marine"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Culture generale "
        quizTheme="culture generale"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Culture generale 2 "
        quizTheme="culture generale 2"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
      <AccordeonDetail
        themeName=" Jurassic Park "
        quizTheme="jurassic park"
        themes={["Débutant⭐", "Confirmé⭐⭐", "Expert⭐⭐⭐"]}
      />
    </div>
  );
}

export default Accordeon;
