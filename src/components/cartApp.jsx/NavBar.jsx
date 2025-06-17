import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";

const NavBar = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  return (
    <div className="p-3 bg-gray-600 text-white flex justify-between">
      <div className="flex gap-4">
        <NavLink
          to={"/"}
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to={"/products"}
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Products
        </NavLink>
      </div>
      <div className="w-fit">
        <NavLink
          to={"/cart"}
          className={({ isActive }) => (isActive ? "text-green-500" : "")}
        >
          Cart
          <span className="p-1 bg-black text-blue-300 w-8 h-4 ">
            {cartProducts.length}
          </span>
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
