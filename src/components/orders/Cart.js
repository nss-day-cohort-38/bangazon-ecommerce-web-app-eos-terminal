// Cart (current open order)
import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import OrderManager from "../../modules/OrderManager";

const Cart = (props) => {

  const [order, setOrder] = useState([{ customer: "", created_at: "", payment_type: "" }]);
  const [orders, setOrders] = useState([]);

  const getCurrentOrder = () => {
    OrderManager.getAll()
        .then((ordersFromAPI) => {
            setOrders(ordersFromAPI)
        });
  };

  useEffect(() => {
    getCurrentOrder();
  }, []);

  return (
    <div className="content">
        Welcome to your cart.
        {orders.map(order => order.)}
    </div>
  );
};
export default Cart;