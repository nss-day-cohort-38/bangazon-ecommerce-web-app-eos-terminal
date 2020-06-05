// Cart (current open order)
import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import OrderManager from "../../modules/OrderManager";

const Cart = (props) => {

  const [order, setOrder] = useState([{ url: "", created_at: "", payment_type: "" }]);
  const [orders, setOrders] = useState([]);

  const getCurrentOrder = () => {
    return OrderManager.getAll()
        .then((ordersFromAPI) => {
            ordersFromAPI.map(orderobj => 
                {if(orderobj.payment_type != null) {
                    console.log(orderobj.payment_type.merchant_name)
                    console.log(orderobj)
                }
                else {
                    console.log(orderobj.payment_type)
                    setOrder(orderobj)
                }})
            setOrders(ordersFromAPI)
        });
    };

  useEffect(() => {
    getCurrentOrder()
  }, []);

  if (order.payment_type === null) {
    return (
        <div className="content">
            Welcome to your cart.
            <p>Your cart was opened on {order.created_at.split('T')[0]}</p>
        </div>
      ) 
  } else {
    return (
        <div className="content">
            There is nothing in your cart!
        </div>
    )
  }

};
export default Cart;