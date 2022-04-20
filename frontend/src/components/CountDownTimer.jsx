import React from "react";
import useCountdown from "./useCountdown";
import "./countdown.css";

function nextPage() {
  console.warn(`time's up`);
}
// eslint-disable-next-line react/prop-types
function CountdownTimer({ targetDate }) {
  const seconds = useCountdown(targetDate);

  // eslint-disable-next-line react/prop-types
  if (seconds === 0) {
    nextPage();
  }
  console.warn(targetDate);
  return (
    <div>
      <p>{seconds}</p>
    </div>
  );
}

export default CountdownTimer;
