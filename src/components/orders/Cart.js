// Cart (current open order)
import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";

const Cart = (props) => {

  const [order, setOrder] = useState({ url: "", created_at: "", payment_type: "" });
  const [isLoading, setIsLoading] = useState(false);

  const getCurrentOrder = () => {
    return OrderManager.getAll()
        .then((ordersFromAPI) => {
            ordersFromAPI.map(orderobj => 
                {if(orderobj.payment_type === null) {
                    setOrder(orderobj)
                }})
        });
    };

    const handleDelete = () => {
        setIsLoading(true);
        OrderManager.delete(order.id).then(() =>
            props.history.push("/cart"),
            setIsLoading(false),
            setOrder({ url: "", created_at: "", payment_type: "" })
        );
        };  

  useEffect(() => {
    getCurrentOrder()
  }, []);

  if (order.payment_type === null && order) {
    return (
        <>
        <div className="content">
            Welcome to your cart.
            <p>Your cart was opened on {order.created_at.split('T')[0]}</p>
        </div>
        <div>
        <button
        type="button"
        onClick={() => props.history.push(`/order/${order.id}/edit`)}
        >
        Complete Order
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Cancel Order
        </button>
        </div>
        </>
      ) 
  } else {
    return (
        <div className="content">
            There is nothing in your cart!
        </div>
    )
  }

};
export default Cart;