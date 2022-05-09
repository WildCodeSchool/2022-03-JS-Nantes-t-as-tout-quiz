import React from "react";
// eslint-disable-next-line import/no-unresolved
import Accordeon from "@components/Accordeon";
// eslint-disable-next-line import/no-unresolved
import mongolfieres from "@assets/mongolfieres.jpg";
import "../App.css";

export default function Themes() {
  return (
    <div
      className="App"
      style={{
        backgroundImage: `url(${mongolfieres})`,
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      <div style={{ marginTop: "150px" }}>
        <Accordeon />
      </div>
    </div>
  );
}
