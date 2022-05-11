/* eslint-disable import/no-unresolved */
import React, { useEffect, useContext } from "react";
import "./countdown.css";
import CountDownContext from "@components/CountDownContext";

function CountDown() {
  const { count, setCount } = useContext(CountDownContext);
  useEffect(() => {
    let timer = null;
    if (count > 0) {
      timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);
    }
    return () => {
      clearTimeout(timer);
    };
  });

  return (
    <div className={count <= 3 ? "timeUp" && "pulse" : "countdown"}>
      <h1>{count}</h1>
    </div>
  );
}

export default CountDown;
