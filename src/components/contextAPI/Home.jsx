import { useContext } from "react";
import { ModeContext } from "./CreateModeContext";
const Home = () => {
  const { mode } = useContext(ModeContext);
  return (
    <div
      className={`h-screen ${
        mode ? "bg-black text-white" : "text-black bg-white"
      }`}
    >
      <h1>Welcome to the Home Page</h1>
      <p>This is some dummy content for the Home component.</p>
      <ul>
        <li>Item One</li>
        <li>Item Two</li>
        <li>Item Three</li>
      </ul>
    </div>
  );
};

export default Home;
