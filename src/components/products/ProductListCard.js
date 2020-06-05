import React from "react";


const ProductListCard = props => {

    return (
        <>
            <p key={parseInt(props.product.url.split('/')[4])} className="detail-link">
                <a className="detail-link" onClick={() => props.history.push(`/products/${parseInt(props.product.url.split('/')[4])}`)}>
                    <strong>{props.product.title}</strong> ({props.product.quantity}) ${(props.product.price).toFixed(2)}
                </a>
            </p>
        </>
    )
}

export default ProductListCard