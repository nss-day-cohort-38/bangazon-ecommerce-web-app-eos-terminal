import React from "react";
import "./Home.css"
import ProductTypeList from "../products/ProductTypeList";

const HomeProductsCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        <p key={props.product.id} className="detail-link">
        <a
          onClick={() => {
            props.history.push(`/products/${props.product.id}`);
          }}
        >
          {props.product.title}
        </a>
        </p>
      </div>
    </div>
  );
};

export default HomeProductsCard;
