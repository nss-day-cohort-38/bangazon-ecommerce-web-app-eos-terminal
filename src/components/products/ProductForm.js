//form to add/sell a product
import React, { useEffect, useState } from "react"
import ProductManager from "../../modules/ProductManager"


const ProductForm = props => {
  const [newProduct, setNewProduct] = useState({ title: "", price: 0.00, description: "", quantity: 1, location: "", image: "", productTypeId: 0 });
  const [productTypes, setProductTypes] = useState([]);

  const handleFieldChange = (evt) => {
    const stateToChange = { ...newProduct };
    stateToChange[evt.target.id] = evt.target.value;
    setNewProduct(stateToChange);
  };

  const handleSubmit = e => {
    e.preventDefault();

    const newProductObj = {
      "title": Number(newProduct.title),
      "price": Number(newProduct.price),
      "description": Number(newProduct.description),
      "quantity": Number(newProduct.quantity),
      "location": Number(newProduct.location),
      "image": Number(newProduct.image),
      "product_type_id": Number(newProduct.product_type_id)
    }

    ProductManager.addProduct(newProductObj)
        .then(() => props.history.push("/ "))
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
          value={newProduct.productTypeId}
          onChange={handleFieldChange}>
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
          required="" autoFocus="" value={newProduct.title} />
      </fieldset>
      <fieldset>
        <label htmlFor="price"> Price </label>
        <input onChange={handleFieldChange} type="number" step="0.01" min="0"
          id="price"
          required="" autoFocus="" value={newProduct.price} />
      </fieldset>
      <fieldset>
        <label htmlFor="description"> Description </label>
        <textarea onChange={handleFieldChange} type="textarea"
          id="description"
          required="" autoFocus="" value={newProduct.description} />
      </fieldset>
      <fieldset>
        <label htmlFor="quantity"> Quantity </label>
        <input onChange={handleFieldChange} type="number" min="1"
          id="quantity"
          required="" autoFocus="" value={newProduct.quantity} />
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