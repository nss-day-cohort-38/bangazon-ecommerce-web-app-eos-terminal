import React, { useEffect, useState } from "react";
import RecommendedProductManager from "../../modules/RecommendedProductManager";

const RecommendationForm = (props) => {
  const [newRecommendation, setNewRecommendation] = useState({
    recommendedUserId: 1,
    product_id: props.history.location.pathname.split("/")[2],
  });
  const [recommendedUsers, setRecommendedUsers] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...newRecommendation };
    stateToChange[evt.target.id] = evt.target.value;
    setNewRecommendation(stateToChange);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newRecommendationObj = {
      product_id: parseInt(newRecommendation.product_id),
      recommended_user_id: parseInt(newRecommendation.recommendedUserId),
    };

    RecommendedProductManager.post(newRecommendationObj).then(() =>
      props.history.go(-1)
    );
  };

  useEffect(() => {
    RecommendedProductManager.getAllCustomers().then((allRecommendedUsers) => {
      setRecommendedUsers(allRecommendedUsers);
    });
  }, []);

  return (
    <form className="form--login" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal"></h1>
      <fieldset>
        <label htmlFor="recommendedUserId"> Recommend To: </label>
        <select
          className="form-control"
          id="recommendedUserId"
          value={newRecommendation.recommendedUserId}
          onChange={handleFieldChange}
        >
          {recommendedUsers.map((recommendedUser) => (
            <option key={recommendedUser.id} value={recommendedUser.id}>
              {recommendedUser.user.username}
            </option>
          ))}
        </select>
      </fieldset>
      <fieldset>
        <button type="submit">Send Notification</button>
      </fieldset>
    </form>
  );
};

export default RecommendationForm;
