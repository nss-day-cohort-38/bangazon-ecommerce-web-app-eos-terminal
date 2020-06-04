import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";
import OrderProductManager from "../../modules/OrderProductManager";

const OrderDetail = props => {
  const [order, setOrder] = useState({ name: "" });
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserProducts = () => {
    OrderProductManager.getOrderProducts().then(orderProducts => {
      setProducts(orderProducts)
    })
  } 

  useEffect(() => {
    getUserProducts()
    //get(id) from OrderManager and hang on to the data; put it into state
    OrderManager.get(props.orderId).then(order => {
      setOrder({
        created_at: order.created_at
      });
      setIsLoading(false);
    });
  }, [props.orderId]);

  const handleOPDelete = (product_id) => {
    setIsLoading(true);
    products.map(product => {
      product_id = product.id
    })
    OrderProductManager.deleteOrderProduct(product_id).then(() =>
    props.history.push("/order"))
  };

  const handleDelete = () => {
    //invoke the delete function in OrderManger and re-direct to the order list.
    setIsLoading(true);
    OrderManager.delete(props.orderId).then(() =>
      props.history.push("/order")
    );
  };

  return (
    <div className="content">
    <div className="card">
      <div className="card-content">
        <picture></picture>
        <h3>
          Order ID: <span style={{ color: "darkslategrey" }}>{props.orderId}</span>
        </h3>
        <h3>
          Created At: <span style={{ color: "darkslategrey" }}>{order.created_at}</span>
        </h3>
        <ul>
        <div>{products.map(product => 
          <li key={product.id}>
            <span>Title: {product.product.title}</span>
            <span> -- Price: ${product.product.price}</span>
            <button 
            type="button"
            disabled={isLoading}
            onClick={handleOPDelete}>Remove</button>
           </li>
        )}</div>
        </ul>

        <button
          type="button"
          onClick={() => props.history.push(`/order/${props.orderId}/edit`)}
        >
          Complete Order
        </button>
        <button type="button" disabled={isLoading} onClick={handleDelete}>
          Cancel Order
        </button>

      </div>
    </div>
    </div>
  );
};

export default OrderDetail;
