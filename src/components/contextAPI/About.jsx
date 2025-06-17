import { useContext } from "react";
import { ModeContext } from "./CreateModeContext";
const About = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div
      className={` h-screen ${
        mode ? "bg-black text-white" : "text-black bg-white"
      }`}
    >
      <h2>About Us</h2>
      <p>
        Welcome to our website! We are dedicated to providing the best service
        possible.
      </p>
      <ul>
        <li>Contact : +8801534235643</li>
        <li>Contact : +8801534235643</li>
        <li>Contact : +8801534235643</li>
        <li>Contact : +8801534235643</li>
        <li>Contact : +8801534235643</li>
        <li>Contact : +8801534235643</li>
      </ul>
    </div>
  );
};

export default About;
