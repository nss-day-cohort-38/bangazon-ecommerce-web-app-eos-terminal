import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";
import PaymentTypeManager from "../../modules/PaymentTypeManager";


const CompleteOrderForm = props => {
  const [order, setOrder] = useState({
    payment_type: ""
  });
  const [paymentType, setPaymentType] = useState([]);
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
    alert("Your order is now complete.")).then(() =>
      props.history.push("/order")
    );
  };

  useEffect(() => {
    OrderManager.get(props.match.params.orderId).then(order => {
      setOrder(order);
      PaymentTypeManager.getPaymentTypesByUser(paymentType).then(payment => {
        setPaymentType(payment);
      });
      setIsLoading(false);
    });
  }, []);

  return (
    <div className="content">
      <form onSubmit={updateExistingOrder}>
        <fieldset>
          <label htmlFor="payment_type">PaymentType: </label>
            <select
              className="form-control"
              id="payment_type"
              required
              onChange={handleFieldChange}> 
             <option value="">Select Type</option>
              {paymentType.map(payment => (
             <option key={payment.id} value={payment.id}>
               {payment.merchant_name}
             </option>
              ))}
            </select>
          </fieldset>
          <fieldset>
            <button
              type="submit"
              disabled={isLoading}
            >
              Done
            </button>
        </fieldset>
      </form>
    </div>
  );
};

export default CompleteOrderForm;
