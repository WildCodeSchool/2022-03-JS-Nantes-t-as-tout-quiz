/* eslint-disable import/no-unresolved */
import React, { useState } from "react";
// eslint-disable-next-line import/no-extraneous-dependencies
import { MultiSelect } from "react-multi-select-component";
import "./filterlvl.css";

export default function Filterlvl() {
  const options = [
    { label: "⭐", value: "lvl 1" },
    { label: "⭐⭐", value: "lvl 2" },
    { label: "⭐⭐⭐", value: "lvl 3" },
    { label: "⭐⭐⭐⭐", value: "lvl 4" },
    { label: "⭐⭐⭐⭐⭐", value: "Tlvl 5", disabled: false },
  ];

  const [selected, setSelected] = useState([]);

  return (
    <div className="filterLvlCss">
      <h1>Select Level</h1>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}
