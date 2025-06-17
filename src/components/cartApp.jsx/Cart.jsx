import { useContext } from "react";
import { CartContext } from "./CartContext";
import NavBar from "./NavBar";

const Cart = () => {
  const { cartProducts, setCartProducts } = useContext(CartContext);
  let totalPrice = 0;

  const removeItems = (productId) => {
    setCartProducts(cartProducts.filter((element) => element.id !== productId));
  };
  return (
    <>
      <NavBar />
      <div>----------------Products & Price---------------</div>
      {cartProducts.map((product, id) => {
        totalPrice += product.price;
        return (
          <div key={id}>
            {product.name} - Price : {product.price}{" "}
            <button
              className="border p-2 bg-red-400"
              onClick={() => removeItems(product.id)}
            >
              Remove
            </button>
          </div>
        );
      })}
      <div>-------------------------------</div>
      <h2>Total price : {totalPrice}</h2>
    </>
  );
};

export default Cart;
