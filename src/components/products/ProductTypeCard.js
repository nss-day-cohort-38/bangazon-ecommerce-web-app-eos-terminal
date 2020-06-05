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
                <h3><a onClick={() => props.history.push(`/categories/${props.productType.id}`)} className="detail-link">{props.productType.name} ({finalProductAmount})</a></h3>
            
        
                <ul>
                    {props.productType.products.slice(0, 3).map(product =>
                        <li key={parseInt(product.url.split('/')[4])} className="detail-link"><a key={parseInt(product.url.split('/')[4])} onClick={() => props.history.push(`/products/${parseInt(product.url.split('/')[4])}`)}><strong>{product.title} ({product.quantity})</strong></a></li>
                        
                        )
                    }
                </ul>
            </div>
        </>
    )
}

export default ProductTypeCard