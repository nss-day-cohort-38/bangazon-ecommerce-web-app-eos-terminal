import React from "react";

const HomeProductsCard = (props) => {
  return (
    <div className="card">
      <div className="card-content">
        {/* <h3>Name:</h3> */}
        <a
          href=""
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
