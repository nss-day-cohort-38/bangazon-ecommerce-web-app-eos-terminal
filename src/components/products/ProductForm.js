//form to add/sell a product
import React, { useEffect, useState } from "react"
import ProductManager from "../../modules/ProductManager"


const ProductForm = props => {
  const [newProduct, setNewProduct] = useState({ title: "", price: 0.01, description: "", quantity: 1, location: "", image: "", productTypeId: 0 });
  const [productTypes, setProductTypes] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...newProduct };
    stateToChange[evt.target.id] = evt.target.value;
    setNewProduct(stateToChange);
  };

  const handleSubmit = e => {
    e.preventDefault();

    let location = newProduct.location
    let image = newProduct.image

    if(newProduct.location == ""){
        location = null
    }

    if(newProduct.image == ""){
        image = null
    }

    const newProductObj = {
      "title": newProduct.title,
      "price": Number(newProduct.price),
      "description": newProduct.description,
      "quantity": Number(newProduct.quantity),
      "location": location,
      "image": image,
      "product_type_id": Number(newProduct.productTypeId)
    }

    if(newProduct.price == 0.01){
        if(window.confirm("Are you sure you want to sell this item for $0.01?")){
            ProductManager.addProduct(newProductObj)
            .then((response) => props.history.push(`/products/${response.id}`))
        }
    }
    else{
        ProductManager.addProduct(newProductObj)
        .then((response) => props.history.push(`/products/${response.id}`))
    }
    }

  useEffect(() => {
    ProductManager.getProductTypes()
        .then((allProductTypes) => {
            setProductTypes(allProductTypes)
        })
  }, []);

  return (
    <form className="form--login" onSubmit={handleSubmit}>
      <h1 className="h3 mb-3 font-weight-normal">Sell a Product</h1>
      <fieldset>
        <label htmlFor="productTypeId"> Type </label>
        <select
          className="form-control"
          id="productTypeId"
          required
          onChange={handleFieldChange}>
        <option value="">Select Type</option>
          {productTypes.map(productType =>
            <option key={productType.id} value={productType.id}>
              {productType.name}
            </option>
          )}
        </select>
      </fieldset>
      <fieldset>
        <label htmlFor="title"> Name </label>
        <input onChange={handleFieldChange} type="text"
          id="title"
          required autoFocus="" value={newProduct.title} />
      </fieldset>
      <fieldset>
        <label htmlFor="price"> Price </label>
        <input onChange={handleFieldChange} type="number" step="0.01" min="0"
          id="price"
          required autoFocus="" value={newProduct.price} />
      </fieldset>
      <fieldset>
        <label htmlFor="description"> Description </label>
        <textarea onChange={handleFieldChange} type="textarea"
          id="description"
          required autoFocus="" value={newProduct.description} />
      </fieldset>
      <fieldset>
        <label htmlFor="quantity"> Quantity </label>
        <input onChange={handleFieldChange} type="number" min="1"
          id="quantity"
          required autoFocus="" value={newProduct.quantity} />
      </fieldset>
      <fieldset>
        <label htmlFor="location"> Location </label>
        <input onChange={handleFieldChange} type="text"
          id="location"
          required="" autoFocus="" value={newProduct.location} />
      </fieldset>
      <fieldset>
        <label htmlFor="image"> Image URL </label>
        <input onChange={handleFieldChange} type="text"
          id="image"
          required="" autoFocus="" value={newProduct.image} />
      </fieldset>
      <fieldset>
        <button type="submit">Submit</button>
      </fieldset>
    </form>
  )
}

export default ProductForm;