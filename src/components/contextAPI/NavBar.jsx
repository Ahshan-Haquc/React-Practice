import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ModeContext } from "./CreateModeContext";
const NavBar = () => {
  const { mode, setMode } = useContext(ModeContext);
  const toggleMode = () => {
    setMode(!mode);
  };
  return (
    <div
      className={`${
        mode ? "bg-gray-600 text-white" : "text-gray-600 bg-gray-200"
      } p-3 flex items-center justify-between`}
    >
      <div className="flex gap-4">
        <NavLink to={"/"}>
          {({ isActive }) => (
            <div
              className={`p-2 ${
                isActive ? (mode ? "bg-black" : "bg-white") : ""
              } hover:text-green-500`}
            >
              Home
            </div>
          )}
        </NavLink>
        <NavLink to={"/about"}>
          {({ isActive }) => (
            <div
              className={`p-2 ${
                isActive ? (mode ? "bg-black" : "bg-white") : ""
              } hover:text-green-500`}
            >
              About
            </div>
          )}
        </NavLink>
      </div>
      <div
        className={`${
          mode ? "bg-black text-white" : "bg-white"
        } bg-black p-1 border hover:text-green-500 hover:cursor-pointer`}
        onClick={toggleMode}
      >
        {mode ? "Light Mode" : "Dark Mode"}
      </div>
    </div>
  );
};

export default NavBar;
