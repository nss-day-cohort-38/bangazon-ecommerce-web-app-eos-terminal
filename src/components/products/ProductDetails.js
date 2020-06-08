import React, { useState, useEffect } from 'react'
import {Route} from "react-router-dom";
import ProductManager from '../../modules/ProductManager';
import AccountManager from "../../modules/AccountManager";
import ProductTypeManager from '../../modules/ProductTypeManager';
import OrderProductManager from '../../modules/OrderProductManager';
import useSimpleAuth from "../auth/useSimpleAuth";
import "./ProductDetails.css"

const ProductDetail = (props) => {
    const [product, setProduct] = useState({ title: "", price: 0.00, description: "", quantity: 0, location: "", imagePath: "", productTypeId: 0 });
    const [initialQuantity, setInitialQuantity] = useState(0)
    const [selectProduct, setSelectProduct] = useState("")
    const [productType, setProductType] = useState("")
    const [select, setSelect] = useState(false)
    const [newQuantity, setNewQuantity] = useState({ quantity: "", id: props.productId })
    const [user, setUser] = useState({ id: 0 })
    const [isEditing, setIsEditing] = useState(false);
    const {isAuthenticated} = useSimpleAuth();
    const [isLoading, setIsLoading] = useState(true);
    
    let i = 1;
    const quantity = initialQuantity
    const selectOptions = [0]

    for(i=1; i < quantity+1; i++) {
        selectOptions.push(i)
    }

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const handleOrderAdd = () => {
        const newItemToAdd = {
            product_id: props.productId
        };
        if (initialQuantity - product.quantity > 0) {
            {for( i=0; i < initialQuantity - product.quantity; i++) {
                OrderProductManager.addOrderProduct(newItemToAdd)
            }};
            alert(`${i} item(s) have been added to your cart.`);
        } else {
            alert("You must select at least one item to add to your order.")
        }
    }
    
    const handleFieldChange = (evt) => {
        const stateToChange = { ...newQuantity };
        stateToChange[evt.target.id] = evt.target.value;
        setNewQuantity(stateToChange);
    };

    const onSelectHandler = e => {
        setSelect(true);
        setSelectProduct(e.target.value);
        const stateToChange = { ...product };
        stateToChange["quantity"] = initialQuantity - e.target.value;
        setProduct(stateToChange);
    };

    const updateQuantity = (evt) => {
        evt.preventDefault();
        if(newQuantity.quantity == "") {
            ProductManager.updateProductQuantity({quantity: product.quantity, id: props.productId})
            setIsLoading(true);
        } else {
        ProductManager.updateProductQuantity(newQuantity).then(() => toggleEdit());
        const stateToChange = { ...product };
        stateToChange["quantity"] = newQuantity.quantity;
        setProduct(stateToChange)
      }};


    useEffect(() => {
        ProductManager.getProductById(props.productId).then(product => {
            setProduct({
                id: product.id,
                customer_id: product.customer_id,
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
                    if (productType.id === product.product_type_id) {
                        filteredProductType = productType.name
                    }
                })
                setProductType(filteredProductType)
            })
            AccountManager.getAll().then(user => {
                setUser({
                    id: user.id
                })   
               })
        })
        setIsLoading(false);

    }, [])

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
            {isAuthenticated() && product.customer_id !== user.id ? <><p>Quantity: {product.quantity}</p><select
              id="quantity"
              onChange={onSelectHandler}>
                <selected></selected>
                {selectOptions.map(option => (
                    <option id="quantity" value={option}>{option}</option>
                ))}
            </select>
            <form onSubmit={updateQuantity}>
                <button type="submit" disabled={isLoading} onClick={handleOrderAdd}>
                    Add to Order</button>
                </form>
            </> : null}
            
            {
                isEditing
                    ? <form onSubmit={updateQuantity}>
                        
                            <label htmlFor="quantity">Quantity:</label>
                            <input
                                type="text"
                                required
                                onChange={handleFieldChange}
                                id="quantity"
                                placeholder={product.quantity}
                            />
                        <button type="submit">Save</button>
                    </form>
                        : <>
                    {
                        product.customer_id == user.id
                        ?  <div>Quantity: {product.quantity}
                        <button type="button" onClick={() => { toggleEdit(); }}>Update</button>
                        </div>
                        : null
                    }</>
                   
            }

        </div>
    )
}
export default ProductDetail;

