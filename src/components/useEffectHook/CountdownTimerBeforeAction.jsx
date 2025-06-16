import { useState } from "react";

const CountdownTimerBeforeAction = () => {
  const [count, setCount] = useState(10);
  const startCountdown = () => {
    const intervalId = setInterval(() => {
      setCount((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          alert("Time's up!!");
          return 0;
        } else {
          return prev - 1;
        }
      });
    }, 1000);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={startCountdown}>Start</button>
    </div>
  );
};

export default CountdownTimerBeforeAction;
