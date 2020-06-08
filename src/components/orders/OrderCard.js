import React from "react";

const OrderCard = (props) => {
  return (
  
    <div className="card">
      <div className="card-content">
        <h3>Order {props.orderCount}</h3>
        <p>Order ID: {props.order.id}</p>
        <p>Created On: {props.order.created_at.split("T")[0]}</p>
        <p>Payment Type: {props.order.payment_type.merchant_name}</p>
        <button
          type="button"
          onClick={() => {
            props.history.push(`/order/${props.order.id}`);
          }}
        >Details
        </button>
      </div>
    </div>
  );
};

export default OrderCard;
