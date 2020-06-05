import React, { useState, useEffect } from 'react'
import ProductManager from '../../modules/ProductManager';
import ProductTypeManager from '../../modules/ProductTypeManager';
import OrderProductManager from '../../modules/OrderProductManager';
import "./ProductDetails.css"

const ProductDetail = (props) => {
    const [product, setProduct] = useState({ title: "", price: 0.00, description: "", quantity: 0, location: "", imagePath: "", productTypeId: 0 });
    const [initialQuantity, setInitialQuantity] = useState(0)
    const [selectProduct, setSelectProduct] = useState("")
    const [productType, setProductType] = useState("")
    const [select, setSelect] = useState(false)

    const handleOrderAdd = () => {
        const newItemToAdd = {
            product_id: props.productId
        };
        OrderProductManager.addOrderProduct(newItemToAdd).then(
            window.alert("Item has been added to your cart.")
        )
    }

    const onSelectHandler = e => {
        setSelect(true);
        setSelectProduct(e.target.value);
        const stateToChange = { ...product };
        stateToChange["quantity"] = initialQuantity - e.target.value;
        setProduct(stateToChange);
      };

    useEffect(() => {
        ProductManager.getProductById(props.productId).then(product => {
            setProduct({
                title: product.title,
                price: product.price.toFixed(2),
                description: product.description,
                quantity: product.quantity,
                location: product.location,
                image: product.image,
                productTypeId: product.productTypeId
            })
            setInitialQuantity(product.quantity)
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

    let i = 1;
    const quantity = initialQuantity
    const selectOptions = []

    for(i=1; i < quantity+1; i++) {
        selectOptions.push(i)
    }

    return (
        <div className="content">
            <button type="button" onClick={() => props.history.push("/categories")}>View All Products</button>
            <h1>Product Detail:</h1>
            <picture>
                <img src={product.image} alt="" />
            </picture>
            <p>Title: {product.title}</p>
            <p>Product Type: {productType}</p>
            <p>Price: ${product.price}</p>
            <p>Description: {product.description}</p>
            {
               product.location !== "null" || null
               ? <p>Local Delivery Available In: {product.location}</p>
               : null
            }
            <p>Quantity: {product.quantity}</p>
            <select
              id="quantity"
              onChange={onSelectHandler}
            >
                <selected></selected>
                {selectOptions.map(option => (
                    <option id="quantity" value={option}>{option}</option>
                ))}
            </select>
            <button type="button" onClick={() => handleOrderAdd()}>Add to Order</button>
        </div>
    )
}
export default ProductDetail;