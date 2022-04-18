import React from "react";
import Accordeon from "@components/Accordeon";
import cascade from "@assets/cascade_eau.jpg";
import "../App.css";

export default function Themes() {
  return (
    <>
      <div
        className="App"
        style={{
          backgroundImage: `url(${cascade})`,
          height: "1200px",
          width: "1200px",
          backgroundSize: "cover",
        }}
      />
      <Accordeon />
    </>
  );
}
