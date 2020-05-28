import React, { useEffect } from "react";

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
            </div>
            <p>
                <ul>
                    {props.productType.products.map(product =>
                        <li>{product.title} ({product.quantity})</li>)}
                </ul>
            </p>
        </>
    )
}

export default ProductTypeCard