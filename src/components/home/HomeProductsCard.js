import React from "react";
import "./Home.css"

const HomeProductsCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <a
          onClick={() => {
            props.history.push(`/products/${props.product.id}`);
          }}
        >
          <p>{props.product.title}</p>
        </a>
      </div>
    </div>
  );
};

export default HomeProductsCard;
