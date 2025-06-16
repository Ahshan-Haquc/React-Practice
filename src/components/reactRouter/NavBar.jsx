import { NavLink } from "react-router-dom";
const NavBar = () => {
  return (
    <div className="p-3 flex gap-4 bg-green-300">
      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Home
        </NavLink>
      </div>
      <div>
        <NavLink
          to={"/dashboard"}
          className={({ isActive }) => (isActive ? "text-red-600" : "")}
        >
          Dashboard
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
