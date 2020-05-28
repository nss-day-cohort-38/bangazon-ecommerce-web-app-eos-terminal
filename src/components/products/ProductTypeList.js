import React, { useState, useEffect } from "react";
import ProductTypeCard from "./ProductTypeCard";
import ProductTypeManager from "../../modules/ProductTypeManager";

const ProductTypeList = (props) => {
    const [productTypes, setProductTypes] = useState([]);

    const getProductTypes = () => {
        return ProductTypeManager.getAll().then(productTypesArray => {
            setProductTypes(productTypesArray)
        });
    };

    useEffect(() => {
        getProductTypes();
    }, []);

    return (
        <><div>
            <div className="container-cards">
                {productTypes.map(productType =>
                    <ProductTypeCard
                        key={productType.id}
                        productType={productType}
                        {...props}
                    />
                )}
            </div>
            </div>
        </>

    )

}

export default ProductTypeList