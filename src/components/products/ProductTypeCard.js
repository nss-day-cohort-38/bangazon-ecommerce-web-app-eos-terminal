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
            
            <p>
                <ul>
                    {props.productType.products.map(product =>
                        <a className="detail-link"onClick={() => props.history.push(`/products/${parseInt(product.url.split('/')[4])}`)}><li>{product.title} ({product.quantity})</li></a>
                        
                        )
                    }
                </ul>
            </p>
            </div>
        </>
    )
}

export default ProductTypeCard