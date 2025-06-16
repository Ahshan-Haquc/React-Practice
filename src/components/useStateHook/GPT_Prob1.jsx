import { useState } from "react";

const GPT_Prob1 = () => {
  const [count, setCount] = useState(1);
  const changeCount = (operationName) => {
    operationName === "increment" ? setCount(count + 1) : setCount(count - 1);
  };
  return (
    <>
      <h2>{count}</h2>
      <button
        onClick={() => {
          changeCount("increment");
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          changeCount("decrement");
        }}
      >
        Decrease
      </button>
    </>
  );
};

export default GPT_Prob1;
