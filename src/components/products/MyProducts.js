// user can view all products they currently have for sale
import React, { useState, useEffect } from "react";
import ProductManager from "../../modules/ProductManager";
import useSimpleAuth from '../auth/useSimpleAuth';

const MyProducts = (props) => {
    const [products, setProducts] = useState([]);
    const { isAuthenticated } = useSimpleAuth();

    const getProducts = () => {
        if(isAuthenticated()) {
            ProductManager.getProductsByUser()
            .then(result => {
                setProducts(result)
            })
        }
    };

    const deleteProduct = (productId) => {
        ProductManager.deleteProduct(productId)
            .then(getProducts)
    }

    useEffect(() => {
        getProducts();
       
    }, []);

    return (
        <div className="content">
        <div>
            <h2>My Current Listings</h2>
            <div>
                {products.map(product => 
                    <div key={product.id}>
                    <p key={product.id} className="detail-link" onClick={() => props.history.push(`/products/${parseInt(product.id)}`)}>{product.title}</p>
                    <button onClick={() => { deleteProduct(product.id) }}>Remove Listing</button>
                    <hr className='lineBreak'></hr>
                    </div>
                )}
            </div>
            </div>
        </div>

    )

}

export default MyProducts