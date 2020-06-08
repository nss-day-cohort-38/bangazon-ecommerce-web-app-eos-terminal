import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";
import OrderProductManager from "../../modules/OrderProductManager";
import ProductManager from "../../modules/ProductManager";

const OrderDetail = props => {
  const [order, setOrder] = useState({ name: "" });
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getUserProducts = () => {
    OrderProductManager.getOrderProducts().then(orderProducts => {
      setProducts(orderProducts)
    })
  } 
  
  const handleDelete = () => {
    //invoke the delete function in OrderManger and re-direct to the order list.
    setIsLoading(true);
    OrderManager.delete(props.orderId).then(() =>
      props.history.push("/order")
    );
  };

  const handleOPDelete = (product_id, orderProduct_id, quantity) => {
    setIsLoading(true);
    products.map(product => {
      if(parseInt(product.product.url.split('/')[4]) === product_id) {
        orderProduct_id = product.id
        quantity = product.product.quantity
      }
    })
    OrderProductManager.deleteOrderProduct(orderProduct_id)
      .then(ProductManager.updateProductQuantity({quantity: quantity + 1, id: product_id}))
        .then(() =>
          props.history.push("/order"))
  };

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

  const handleDelete = () => {
    //invoke the delete function in OrderManger and re-direct to the order list.
    setIsLoading(true);
    OrderManager.delete(props.orderId).then(() =>
      props.history.push("/order")
    );
  };

  if (order.payment_type !== null) {
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
        </div>
      </div>
      </div>
    )
  } else {
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
        <>
          <li key={product.id}>
            <span>Title: {product.product.title}</span>
            <span> -- Price: ${product.product.price}</span>
            <button 
            type="button"
            disabled={isLoading}
            onClick={() => handleOPDelete(parseInt(product.product.url.split('/')[4]))}>Remove</button>
           </li></>
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
  }
};

export default OrderDetail;
