import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import NavBar from "./NavBar";

const Products = () => {
  const [product1, setProduct1] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cartProducts, setCartProducts } = useContext(CartContext);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => {
        setProduct1(data.products);
        setLoading(false);
      });
  }, []);

  const addItems = (id, name, price) => {
    setCartProducts([...cartProducts, { id: id, name: name, price: price }]);
  };

  return (
    <>
      <NavBar />
      {loading ? <h1>Loading...</h1> : ""}
      <div className="p-3">
        {product1.map((product, id) => {
          return (
            <div className="my-1 p-3 bg-gray-100" key={id}>
              <div className="text-2xl font-bold">{product.title}</div>
              <div>Price : {product.price}</div>
              <div>Rating : {product.rating}</div>
              <button
                className="p-2 bg-blue-600 text-white rounded-md"
                onClick={() => addItems(id, product.title, product.price)}
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
