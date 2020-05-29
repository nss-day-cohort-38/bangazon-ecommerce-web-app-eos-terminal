// populates list of products in individual category
import React, { useState, useEffect } from "react";
import ProductListCard from "./ProductListCard";
import ProductTypeManager from "../../modules/ProductTypeManager";

const ProductList = (props) => {
    const [productType, setProductType] = useState("");
    const [products, setProducts] = useState([]);

    const getProductType = () => {
        return ProductTypeManager.getProductTypeById(props.productTypeId).then(response => {
            setProductType(response)
            setProducts(response.products)
        });
    };

    useEffect(() => {
        getProductType();
    }, []);

    return (
        <><div>
            <h2>{productType.name}</h2>
            <div>
                {products.map(product => 
                    <ProductListCard
                    key={product.id}
                    productType={productType}
                    product={product}
                    {...props}
                />)}
            </div>
            </div>
        </>

    )

}

export default ProductList