import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MultiSelect } from "react-multi-select-component";
import "./filter.css";

export default function Filter() {
  const options = [
    { label: "🐼 Animaux 🐼", value: "Animaux" },
    { label: "🌐 Web 🌐", value: "Web" },
    { label: "🎮 Loisirs 🎮", value: "Loisirs" },
    { label: "🏰 Disney 🏰", value: "Disney" },
    { label: "⛰️ Travel ⛰️", value: "Travel", disabled: true },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div className="filterCss">
      <h1>Select Thèmes</h1>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}
