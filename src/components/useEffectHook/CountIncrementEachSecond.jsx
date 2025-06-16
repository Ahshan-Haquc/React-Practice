import { useEffect, useRef, useState } from "react";

const CountIncrementEachSecond = () => {
  const [count, setCount] = useState(0);
  const [status, setStatus] = useState(true);
  const intervalRef = useRef(null);

  useEffect(() => {
    if (status) {
      intervalRef.current = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [status]);

  const handleStop = () => {
    clearInterval(intervalRef.current);
    setStatus(!status);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleStop}>{status ? "Stop" : "Start"}</button>
      <br />
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </div>
  );
};

export default CountIncrementEachSecond;
