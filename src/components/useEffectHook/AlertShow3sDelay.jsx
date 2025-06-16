import { useEffect } from "react";

const AlertShow3sDelay = (props) => {
  useEffect(() => {
    const intervalId = setTimeout(() => {
      alert("Welcome Ahsan.");
    }, 3000);

    return () => clearTimeout(intervalId);
  }, []);
  return (
    <div>
      <h1>Hello {props.name}</h1>
      <h1>Hello {props.dept}</h1>
    </div>
  );
};

export default AlertShow3sDelay;
