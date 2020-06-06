import React from "react";

const OrderCard = (props) => {
  return (
  
    <div className="card">
      <div className="card-content">
        <h3>Order {props.orderCount}</h3>
        <p>{props.order.created_at.split("T")[0]}</p>
        <p>{props.order.payment_type.merchant_name}</p>
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
