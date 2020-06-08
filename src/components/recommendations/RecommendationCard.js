import React from "react";

const RecommendationCard = (props) => {
  return (
    <>
      <p
        key={parseInt(props.recommendation.product.url.split("/")[4])}
        className="detail-link"
      >
        <a
          className="detail-link"
          onClick={() =>
            props.history.push(
              `/products/${parseInt(
                props.recommendation.product.url.split("/")[4]
              )}`
            )
          }
        >
          <strong>{props.recommendation.product.title}</strong> (
          {props.recommendation.product.quantity}) $
          {props.recommendation.product.price.toFixed(2)}
        </a>
      </p>
    </>
  );
};

export default RecommendationCard;
