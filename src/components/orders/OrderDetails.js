import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";


const OrderDetail = props => {
  const [order, setOrder] = useState({ name: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    //get(id) from OrderManager and hang on to the data; put it into state
    OrderManager.get(props.orderId).then(order => {
      setOrder({
        name: order.name
      });
      setIsLoading(false);
    });
  }, [props.orderId]);

  const handleDelete = () => {
    //invoke the delete function in OrderManger and re-direct to the order list.
    setIsLoading(true);
    OrderManager.delete(props.orderId).then(() =>
      props.history.push("/order")
    );
  };

  return (
    <div className="card">
      <div className="card-content">
        <picture></picture>
        <h3>
          Order ID: <span style={{ color: "darkslategrey" }}>{order.id}</span>
        </h3>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
