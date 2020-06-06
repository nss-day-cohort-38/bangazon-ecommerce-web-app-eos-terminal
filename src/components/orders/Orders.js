// viewing a list of past orders (all orders that have a payment type attached)

import React, { useState, useEffect } from "react";
//import the components we will need
import OrderCard from "./OrderCard";
import OrderManager from "../../modules/OrderManager";

const OrderList = (props) => {
  // The initial state is an empty array
  //setOrders is used to change the state of orders
  const [orders, setOrders] = useState([]);
  //state from nav in order to push to myaccount
  const [editReset, setEditReset] = useState({ isRouting: true });

  const getOrders = () => {
    // After the data comes back from the API, we
    //  use the setOrders function to update state
    //TODO: filter/reduce ordersfromapi into new array of just orders with payment types OR
    //forEach and create new array and .push each thing that matches criteria, then set created array to = orders
    return OrderManager.getAll().then((ordersFromAPI) => {
      const pastOrders = ordersFromAPI.filter(order => order.payment_type !== null)
      setOrders(pastOrders)
    });
  };

  //function from nav in order to push to myaccount
  const resetEdit = () => {
    props.history.push({
      pathname: "/myaccount",
      state: { editReset: editReset.isRouting },
    });
  };


  let orderCount = 1

  useEffect(() => {
    getOrders();
  }, []);

  return (
    <div className="content">
    <div>    <button
          type="button"
          onClick={() => {
            resetEdit();
          }}
        >Back
        </button> </div>
      <div className="container-cards">
        {orders.map((order) => (
          <OrderCard key={order.id} order={order} orderCount={orderCount++} {...props} />
        ))}
      </div>
    </div>
  );
};
export default OrderList;
