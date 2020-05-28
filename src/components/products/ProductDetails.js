import React, { useState, useEffect } from 'react'
import ProductManager from '../../modules/ProductManager';
import ProductTypeManager from '../../modules/ProductTypeManager';
const ProductDetail = (props) => {
    const [product, setProduct] = useState({ title: "", price: 0.00, description: "", quantity: 0, location: "", imagePath: "", productTypeId: 0 });
    const [productType, setProductType] = useState("")
    useEffect(() => {
        ProductManager.getProductById(props.productId).then(product => {
            setProduct({
                title: product.title,
                price: product.price,
                description: product.description,
                quantity: product.quantity,
                location: product.location,
                imagePath: product.imagePath,
                productTypeId: product.productTypeId
            })
            ProductTypeManager.getAll().then(productTypes => {
                let filteredProductType = ""
                productTypes.forEach(productType => {
                    if(productType.id === product.product_type_id) {
                        filteredProductType = productType.name
                    }
                })
                setProductType(filteredProductType)
            })
        })
    }, [])
    return (
        <div>
            <button type="button" onClick={() => props.history.push("/products")}>View All Products</button>
            <h1>Product Detail:</h1>
            {/* <picture>
                <img src={require("")} alt="" />
            </picture> */}
            <p>Title: {product.title}</p>
            <p>Product Type: {productType}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
            <p>Location: {product.location}</p>
            <p>Quantity: {product.quantity}</p>
        </div>
    )
}
export default ProductDetail;