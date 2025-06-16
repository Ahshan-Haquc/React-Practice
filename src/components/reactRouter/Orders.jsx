import { useEffect } from "react";
const Orders = () => {
  useEffect(() => {
    document.title = "Orders";
  }, []);
  return (
    <div>
      <h2>Orders:</h2>
      <ul>
        <li>T-shirt : 500tk</li>
        <li>T-shirt : 500tk</li>
        <li>T-shirt : 500tk</li>
        <li>T-shirt : 500tk</li>
        <li>T-shirt : 500tk</li>
        <li>T-shirt : 500tk</li>
      </ul>
    </div>
  );
};

export default Orders;
