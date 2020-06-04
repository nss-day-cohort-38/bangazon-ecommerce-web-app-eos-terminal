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
    }).then((response) =>
    response.json())
  },
  getProductTypes() {
    return fetch(`${authApiUrl}/producttypes`).then((response) =>
      response.json()
    );
  },
  getProductById(productId) {
    return fetch(`${authApiUrl}/products/${productId}`)
        .then(response => response.json())
  },
  getProductsByUser() {
    return fetch(`${authApiUrl}/products?user`, {
        "method": "GET",
        "headers": {
            "Accept": "application/json",
            "Authorization": `Token ${sessionStorage.getItem("bangazon-token")}`
        }
    })
    .then(response => response.json())
  },
  getAllProducts() {
    return fetch(`${authApiUrl}/products`).then((response) => response.json());
  },
};
