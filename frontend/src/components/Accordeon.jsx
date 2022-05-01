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
          themes={["Chats⭐⭐⭐⭐", "Chiens⭐⭐", "Canards⭐⭐⭐"]}
        />
        <AccordeonDetail
          themeName="🌐 Web 🌐"
          themes={[
            "Appli⭐⭐⭐⭐",
            "Chiens⭐⭐",
            "Canards⭐⭐⭐",
            "Concombre ⭐ ",
          ]}
        />

        <AccordeonDetail
          themeName="🎮 Loisirs 🎮"
          themes={["Nintendo⭐⭐⭐⭐", "Playstation II⭐⭐", "WoW⭐⭐⭐"]}
        />
      </div>
    </div>
  );
}

export default Accordeon;
