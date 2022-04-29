import React from "react";
// eslint-disable-next-line import/no-unresolved
import Accordeon from "@components/Accordeon";
// eslint-disable-next-line import/no-unresolved
import cascade from "@assets/cascade_eau.jpg";
// eslint-disable-next-line import/no-unresolved
import Filter from "@components/filter";
import "../App.css";

export default function Themes() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${cascade})`,
        height: "1200px",
        backgroundSize: "cover",
      }}
    >
      <Filter />
      <div>
        <Accordeon />
      </div>
    </div>
  );
}
