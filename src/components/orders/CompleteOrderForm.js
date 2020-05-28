import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";
import PaymentTypeManager from "../../modules/PaymentTypeManager";


const CompleteOrderForm = props => {
  const [order, setOrder] = useState({

    payment_type: ""
  });
  const [PaymentType, setPaymentType] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleFieldChange = evt => {
    const stateToChange = { ...order };
    stateToChange[evt.target.id] = evt.target.value;
    setOrder(stateToChange);
  };

  const updateExistingOrder = evt => {
    evt.preventDefault();
    setIsLoading(true);

    const editedOrder = {
      id: props.match.params.orderId,
      created_at: order.created_at,
      payment_type_id: parseInt(order.payment_type)
    };

    OrderManager.update(editedOrder).then(() =>
      props.history.push("/order")
    );
  };

  useEffect(() => {
    OrderManager.get(props.match.params.orderId).then(order => {
      setOrder(order);
      PaymentTypeManager.getPaymentTypesByUser(PaymentType).then(payment => {
          console.log(payment)
        setPaymentType(payment);
      });
      setIsLoading(false);
    });
  }, []);

  return (
    <>
      <form>
        <fieldset>
          <div className="formgrid">


            <select
              className="form-control"
              id="payment_type"
              value={order.payment_type}
              onChange={handleFieldChange}
            >
              {PaymentType.map(payment => (
                <option key={payment.id} value={payment.id}>
                  {payment.merchant_name}
                </option>
              ))}
            </select>
            <label htmlFor="payment_type">PaymentType</label>
          </div>
          <div className="alignRight">
            <button
              type="button"
              disabled={isLoading}
              onClick={updateExistingOrder}
              className="btn btn-primary"
            >
              Submit
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
};

export default CompleteOrderForm;
