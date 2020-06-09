import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";
import OrderProductManager from "../../modules/OrderProductManager";

const OrderDetail = props => {
  const [order, setOrder] = useState({ name: "" });
  const [products, setProducts] = useState([]);
  const [date, setDate] = useState("")

  const getUserProducts = () => {
    const productArray = []
    OrderProductManager.getOrderProducts().then(orderProducts => {
      orderProducts.map(orderProduct => {
        if(parseInt(orderProduct.order.url.split('/')[4]) === props.orderId) {
          productArray.push(orderProduct)
        }
      })
      setProducts(productArray)
    })
  } 

  useEffect(() => {
    getUserProducts()
    //get(id) from OrderManager and hang on to the data; put it into state
    OrderManager.get(props.orderId).then(order => {
      setOrder({
        created_at: order.created_at
      });
      setDate(order.created_at.split('T')[0])
    });

  }, [props.orderId]);

    return (
    <div className="content">
    <div className="card">
      <div className="card-content">
      <div>    <button
          type="button"
          onClick={() => {
            props.history.push("/orderhistory")
          }}
        >Back
        </button> </div>
        <picture></picture>
        <h3>
          Order ID: <span style={{ color: "darkslategrey" }}>{props.orderId}</span>
        </h3>
        <h3>
          Created On: <span style={{ color: "darkslategrey" }}>{date}</span>
        </h3>
        <ul>
        <div>
        {products.map(product => 
          <li key={product.id}>
            <span>Title: {product.product.title}</span>
            <span> -- Price: ${product.product.price}</span>
          </li>
        )}
        </div>
        </ul>

      </div>
    </div>
    </div>
  );
};

export default OrderDetail;
