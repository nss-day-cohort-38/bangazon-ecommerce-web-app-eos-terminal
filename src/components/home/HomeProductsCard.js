import React from "react";
import "./Home.css"
import ProductTypeList from "../products/ProductTypeList";

const HomeProductsCard = (props) => {
  return (
    <div className="product-card">
        <div className="product-image">
          {
            props.product.image
          ?<img src={props.product.image}></img>
          : null
          }
        </div>
        <div className="product-info" key={props.product.id}>
          <a onClick={() => { props.history.push(`/products/${props.product.id}`); }}>{props.product.title}</a>
          <h6>${props.product.price}</h6>
        </div>
    </div>
  );
};

export default HomeProductsCard;
