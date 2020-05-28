import React from "react";

const OrderCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">


        <button
          type="button"
          onClick={() => {
            props.history.push(`/order/${props.order.id}`);
          }}
        >Details
        </button>
        <h3>Created At:</h3>
        <p>
            {props.order.created_at}
        </p>

      </div>
    </div>
  );
};

export default OrderCard;
