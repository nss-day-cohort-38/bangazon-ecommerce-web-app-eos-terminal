// Cart (current open order)
import React, { useState, useEffect } from "react";
import OrderManager from "../../modules/OrderManager";
import OrderProductManager from "../../modules/OrderProductManager";
import ProductManager from "../../modules/ProductManager";

const Cart = (props) => {

  const [order, setOrder] = useState({ url: "", created_at: "", payment_type: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([])

  const getCurrentOrder = () => {
    return OrderManager.getAll()
        .then((ordersFromAPI) => {
            ordersFromAPI.map(orderobj => 
                {if(orderobj.payment_type === null) {
                    setOrder(orderobj)
                }})
        });
    };

  const getOrderProducts = () => {
    const productArray = []
    return OrderProductManager.getOrderProducts()
      .then(orderProductsResp => {
        orderProductsResp.map(product => {
          if(parseInt(product.order.url.split('/')[4]) === order.id) {
            productArray.push(product)
          }
        })
        setProducts(productArray)
      })
  }
  const handleDelete = () => {
      setIsLoading(true);
      OrderManager.delete(order.id).then(() =>
          props.history.push("/cart"),
          setIsLoading(false),
          setOrder({ url: "", created_at: "", payment_type: "" })
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
          props.history.push("/categories"))
  };
  
  useEffect(() => {
    getCurrentOrder()
      .then(getOrderProducts())
  }, [order.id]);

  if (order.payment_type === null && order) {
    return (
        <>
        <div className="content">
            Welcome to your cart.
            <p>Your cart was opened on {order.created_at.split('T')[0]}</p>
        <div>{products.map(product => 
          <li key={product.id}>
            <span>Title: {product.product.title}</span>
            <span> -- Price: ${product.product.price}</span>
            <button 
            type="button"
            disabled={isLoading}
            onClick={() => handleOPDelete(parseInt(product.product.url.split('/')[4]))}>Remove</button>
           </li>
        )}</div>
        <br /><br />
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