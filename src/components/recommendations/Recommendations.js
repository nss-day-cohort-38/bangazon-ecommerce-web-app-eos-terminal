// viewing a list of past recommendations

import React, { useState, useEffect } from "react";
//import the components we will need
import RecommendationCard from "./RecommendationCard";
import RecommendedProductManager from "../../modules/RecommendedProductManager";

const RecommendationList = (props) => {
  // The initial state is an empty array
  //setRecommendations is used to change the state of recommendations
  const [recommendations, setRecommendations] = useState([]);

  const getRecommendations = () => {
    // After the data comes back from the API, we
    //  use the setRecommendations function to update state
    return RecommendedProductManager.getAll().then((recommendationsFromAPI) => {
      setRecommendations(recommendationsFromAPI);
    });
  };

  useEffect(() => {
    getRecommendations();
  }, []);

  return (
    <div className="content">
      <div></div>
      <div className="container-cards">
        {recommendations.map((recommendation) => (
          <RecommendationCard
            key={recommendation.id}
            recommendation={recommendation}
            {...props}
          />
        ))}
      </div>
    </div>
  );
};
export default RecommendationList;
