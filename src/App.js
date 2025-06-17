import { BrowserRouter, Route, Routes } from "react-router-dom";
import Cart from "./components/cartApp.jsx/Cart";
import { CartContextProvider } from "./components/cartApp.jsx/CartContext";
import Home from "./components/cartApp.jsx/Home";
import Products from "./components/cartApp.jsx/Products";


function App() {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/cart" element={<Cart/>}/>
        <Route path="*" element={<h1>No page found!!</h1>}/>
      </Routes>
    </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
