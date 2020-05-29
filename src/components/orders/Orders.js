// viewing a list of past orders

import React, { useState, useEffect } from "react";
//import the components we will need
import OrderCard from "./OrderCard";
import OrderManager from "../../modules/OrderManager";

const OrderList = (props) => {
  // The initial state is an empty array
  //setOrders is used to change the state of orders
  const [orders, setOrders] = useState([]);

  const getOrders = () => {
    // After the data comes back from the API, we
    //  use the setOrders function to update state
    return OrderManager.getAll().then((ordersFromAPI) => {
      setOrders(ordersFromAPI);
    });
  };

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
    <div>    <button
          type="button"
          onClick={() => {
            props.history.push(`/neworder`);
          }}
        >Create new order
        </button> </div>
      <div className="container-cards">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} {...props} />
        ))}
      </div>
    </>
  );
};
export default OrderList;
