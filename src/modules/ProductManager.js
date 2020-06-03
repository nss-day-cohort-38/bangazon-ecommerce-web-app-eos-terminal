const authApiUrl = "http://localhost:8000";

export default {
  addProduct(newProduct) {
    return fetch(`${authApiUrl}/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
      },
      body: newProduct
    })
  },
  getProductTypes() {
    return fetch(`${authApiUrl}/producttypes`).then((response) =>
      response.json()
    );
  },
  getProductById(productId) {
    return fetch(`${authApiUrl}/products/${productId}`).then((resp) =>
      resp.json()
    );
  },
  getAllProducts() {
    return fetch(`${authApiUrl}/products`).then((response) => response.json());
  },
};
