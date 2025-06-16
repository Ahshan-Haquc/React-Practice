//Clicking a button: “Hello” → “Goodbye” → “Hello” … will toggle like this.
import { useState } from "react";
const GPT_Prob2 = () => {
  const [text, setText] = useState("Hello");
  const toggleText = () => {
    setText((prevText) => (prevText === "Hello" ? "GoodBye" : "Hello"));
  };
  return (
    <>
      <h2>{text}</h2>
      <button onClick={toggleText}>Toggle</button>
    </>
  );
};
export default GPT_Prob2;
