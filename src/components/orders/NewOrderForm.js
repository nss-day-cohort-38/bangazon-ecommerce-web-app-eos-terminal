import React, { useState } from "react";
import OrderManager from "../../modules/OrderManager";


const NewOrderForm = props => {
  const [order] = useState({
    created_at: "",
    payment_type_id: "",
  });

  const [isLoading, setIsLoading] = useState(false);


  const constructNewOrder = evt => {
    evt.preventDefault();

      setIsLoading(true);

      OrderManager.post(order).then(() => props.history.push("/order"));
  };

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">

            <button
              type="button"
              disabled={isLoading}
              onClick={constructNewOrder}
            >
              Open New Order
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default NewOrderForm;
