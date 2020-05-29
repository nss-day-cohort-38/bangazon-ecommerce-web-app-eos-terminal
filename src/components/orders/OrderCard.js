import React from "react";

const OrderCard = (props) => {
  return (
  
    <div className="card">
      <div className="card-content">
        <h3>Created At:</h3>
        <p>
            {props.order.created_at}
        </p>
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
