import React, { useState, useEffect } from "react";
import "./countdown.css";
// import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function CountDown({ max = 10, nbQuestion, setNbQuestion }) {
  const [count, setCount] = useState(max);
  // const navigate = useNavigate();
  // function timeUp() {
  // navigate("/Score");
  // }
  // if (count === 0 && nbQuestion > 10) {
  //   timeUp();
  // }
  // if (count === 0 && nbQuestion < 10) {
  //   setNbQuestion(nbQuestion + 1);
  // }
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
  useEffect(() => {
    setCount(max);
  }, [max]);
  return (
    <div className={count <= 3 ? "timeUp" && "pulse" : "countdown"}>
      <h1>{count}</h1>
    </div>
  );
}

export default CountDown;
