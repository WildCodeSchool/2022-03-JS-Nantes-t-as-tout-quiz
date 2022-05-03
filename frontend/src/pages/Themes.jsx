import React from "react";
// eslint-disable-next-line import/no-unresolved
import Accordeon from "@components/Accordeon";
// eslint-disable-next-line import/no-unresolved
import cascade from "@assets/cascade_eau.jpg";
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
      <div style={{ marginTop: "150px" }}>
        <Accordeon />
      </div>
    </div>
  );
}
