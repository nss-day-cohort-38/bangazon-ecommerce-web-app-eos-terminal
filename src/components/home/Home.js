import React, { useState, useEffect } from "react";
import HomeProductsCard from "./HomeProductsCard";
import ProductManager from "../../modules/ProductManager";
import AccountManager from "../../modules/AccountManager"
import "./Home.css"

const Home = (props) => {
  const [products, setProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([])
  const [user, setUsers] = useState({ id: 0 })

  const token = sessionStorage.getItem("bangazon-token")

  const getProducts = () => {
    return ProductManager.getAllProducts().then((response) => {
      setProducts(response.reverse().slice(0, 20));
    });
  };

  const getUserProducts = () => {
    ProductManager.getProductsByUser()
      .then(result => {
        setUserProducts(result.reverse().slice(0, 5));
      })

  };

  const getUsers = () => {
    return AccountManager.getAll().then((res) => {
      setUsers(res)
    })
  }

  useEffect(() => {
    getProducts();
    getUsers();
    if (token){
    getUserProducts();
    } else {
      setUserProducts([])
    }
  }, [token]);

  return (
    <div className="content">
      <h3>Welcome to Bangazon!</h3>
      <h3>Check out our most recent products</h3>
      {
        token

          ? <><p className="user-products-header">Stuff You're Selling</p>
            <div className="products">        {userProducts.map((product) => (
              <HomeProductsCard key={product.id} product={product} {...props} />
            ))}</div></>
          : null

      }
            {
        token
        ? <div>Stuff Others Are Selling</div>
        : <div>All Products</div>
      }
      <div className="products">
      
        {products.map((product) => (
          
            (product.customer_id !== user.id)
              ? <HomeProductsCard key={product.id} product={product} user={user} {...props} />
              : null
          
        ))}
      </div>
    </div>
  );
};

export default Home;
