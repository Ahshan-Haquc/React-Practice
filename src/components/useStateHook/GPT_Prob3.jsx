//There will be an input field and clicking on the button will show/hide the password.
import { useState } from "react";

const GPT_Prob3 = () => {
  const [typeName, setTypeName] = useState("text");
  const [buttonName, setButtonName] = useState("Hide");
  const changeInputType = () => {
    setTypeName(typeName === "text" ? "password" : "text");
    setButtonName(buttonName === "Show" ? "Hide" : "Show");
  };
  return (
    <>
      <input type={typeName} />
      <button onClick={changeInputType}>{buttonName}</button>
    </>
  );
};

export default GPT_Prob3;
