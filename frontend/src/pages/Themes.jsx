import React from "react";
// eslint-disable-next-line import/no-unresolved
import Accordeon from "@components/Accordeon";
// eslint-disable-next-line import/no-unresolved
import cascade from "@assets/cascade_eau.jpg";
// eslint-disable-next-line import/no-unresolved
import Filter from "@components/filter";
// eslint-disable-next-line import/no-unresolved
import Filterlvl from "@components/filterlvl";
import "../App.css";

export default function Themes() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${cascade})`,
        height: "1200px",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="filtergene">
        <Filter />
        <Filterlvl />
      </div>
      <div>
        <Accordeon />
      </div>
    </div>
  );
}
