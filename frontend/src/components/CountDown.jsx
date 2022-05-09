import React, { useEffect } from "react";
import "./countdown.css";

// eslint-disable-next-line react/prop-types
function CountDown({ count, setCount }) {
  useEffect(() => {
    if (count > 0) {
      setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
  });
  return (
    <div className={count <= 3 ? "timeUp" && "pulse" : "countdown"}>
      <h1>{count}</h1>
    </div>
  );
}

export default CountDown;
