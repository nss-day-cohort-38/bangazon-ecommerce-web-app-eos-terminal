import React, { useState, useEffect } from 'react'
import ProductManager from '../../modules/ProductManager';
import AccountManager from "../../modules/AccountManager";
import ProductTypeManager from '../../modules/ProductTypeManager';
import "./ProductDetails.css"


const ProductDetail = (props) => {
    const [product, setProduct] = useState({ title: "", price: 0.00, description: "", quantity: 0, location: "", imagePath: "", productTypeId: 0 });
    const [productType, setProductType] = useState("")
    const [newQuantity, setNewQuantity] = useState({ quantity: "", id: props.productId })
    const [user, setUser] = useState({ id: 0 })
    const [isEditing, setIsEditing] = useState(false);

    const handleFieldChange = (evt) => {
        const stateToChange = { ...newQuantity };
        stateToChange[evt.target.id] = evt.target.value;
        setNewQuantity(stateToChange);
    };

    const toggleEdit = () => {
        setIsEditing(!isEditing);
    };

    const updateQuantity = (evt) => {
        evt.preventDefault();
        ProductManager.updateProductQuantity(newQuantity).then(() => toggleEdit());
        const stateToChange = { ...product };
        stateToChange["quantity"] = newQuantity.quantity;
        setProduct(stateToChange)
      };


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
                    : <><div>Quantity: {product.quantity}
                    {
                        product.customer_id == user.id
                        ?  <button type="button" onClick={() => { toggleEdit(); }}>Update</button>
                        : null

                    }</div></>
                   
            }

        </div>
    )
}
export default ProductDetail;

