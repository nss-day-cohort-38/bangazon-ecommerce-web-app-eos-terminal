import React, { useState, useEffect } from "react";
import HomeProductsCard from "./HomeProductsCard";
import ProductManager from "../../modules/ProductManager";

const Home = (props) => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    return ProductManager.getAllProducts().then((response) => {
      setProducts(response.reverse().slice(0, 20));
    });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="content">
      <h3>Welcome to Bangazon!</h3>
      <h3>Check out our most recent products</h3>
      <div className="">
        {products.map((product) => (
          <HomeProductsCard key={product.id} product={product} {...props} />
        ))}
      </div>

      <div className="content">
        <div></div>
      </div>
    </div>
  );
};

export default Home;
