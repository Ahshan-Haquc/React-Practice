import { useContext } from "react";
// useContext হুক ইম্পোর্ট করছি যাতে আমরা context থেকে ডেটা নিতে পারি
import { ItemContext } from "./CreateContext";
// ItemContext ইম্পোর্ট করছি যেটি createContext দিয়ে তৈরি করা হয়েছিল

const Cart = () => {
  const { productName, price, totalPrice, setTotalPrice } =
    useContext(ItemContext);
  // useContext দিয়ে context থেকে প্রোডাক্টের নাম, দাম, মোটদাম এবং সেট করার ফাংশন নিচ্ছি

  return (
    <div>
      <h1>Products in Cart:</h1>
      <p>{productName}</p>
      {/* প্রোডাক্টের নাম দেখাচ্ছি */}
      <p>{price}</p>
      {/* প্রোডাক্টের দাম দেখাচ্ছি */}
      <p>Total price : {totalPrice}</p>
      {/* মোট দাম দেখাচ্ছি */}
    </div>
  );
};

export default Cart;
// Cart component কে export করছি যাতে App.js-এ ব্যবহার করা যায়
