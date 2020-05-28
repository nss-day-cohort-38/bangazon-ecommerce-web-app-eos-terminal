import React, { useEffect } from "react";
import "./ProductType.css"

const ProductTypeCard = props => {


    const productAccumulator = () => {
        let productAmount = 0
        props.productType.products.map(product => {
            productAmount += product.quantity
        })
        return productAmount
    }

    const finalProductAmount = productAccumulator()

    return (
        <>
            <div>
                <h3>{props.productType.name} ({finalProductAmount})</h3>
            
        
                <ul>
                    {props.productType.products.map(product =>
                        <a key={parseInt(product.url.split('/')[4])}className="detail-link"onClick={() => props.history.push(`/products/${parseInt(product.url.split('/')[4])}`)}><strong><li key={parseInt(product.url.split('/')[4])}>{product.title} ({product.quantity})</li></strong></a>
                        
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductTypeCard