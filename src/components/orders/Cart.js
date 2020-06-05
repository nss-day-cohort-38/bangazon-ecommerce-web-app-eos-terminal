// Cart (current open order)
import React, { useState, useEffect } from "react";
import OrderCard from "./OrderCard";
import OrderManager from "../../modules/OrderManager";

const Cart = (props) => {

  const [order, setOrder] = useState([{ url: "", created_at: "", payment_type: {} }]);
  const [orders, setOrders] = useState([]);

  const getCurrentOrder = () => {
    return OrderManager.getAll()
        .then((ordersFromAPI) => {
            ordersFromAPI.map(orderobj => 
                {if(orderobj.payment_type != null) {
                    console.log(orderobj.payment_type.merchant_name)
                    console.log(orderobj)
                    setOrder(orderobj)
                }
                else {
                    console.log(orderobj.payment_type)
                }})
            setOrders(ordersFromAPI)
        });
    };

  useEffect(() => {
    getCurrentOrder()
  }, []);

  return (
    <div className="content">
        Welcome to your cart.
        
    </div>
  );
};
export default Cart;