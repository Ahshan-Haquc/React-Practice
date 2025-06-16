//There will be multiple buttons (red, green, blue). When clicked, the entire div will be colored with its color.

import { useState } from "react";

const GPT_Prob4 = () => {
  const [color, setColor] = useState("Red");
  const handleColorChange = (newColor) => {
    setColor(newColor);
  };
  return (
    <div
      style={{
        backgroundColor: color,
        height: "100vh",
        width: "97vw",
        padding: "0px",
        margin: "0px",
      }}
    >
      <h1>Ahshanul Haquc</h1>
      <button
        onClick={() => {
          handleColorChange("Red");
        }}
      >
        Red
      </button>
      <button
        onClick={() => {
          handleColorChange("Green");
        }}
      >
        Green
      </button>
      <button
        onClick={() => {
          handleColorChange("Blue");
        }}
      >
        Blue
      </button>
    </div>
  );
};

export default GPT_Prob4;
