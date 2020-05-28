const authApiUrl = "http://localhost:8000"

export default {
  addProduct(newProduct) {
    return fetch(`${authApiUrl}/products`, {
      "method": "POST",
      "headers": {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": `Token ${sessionStorage.getItem("bangazon-token")}`
      },
      "body": JSON.stringify(newProduct)
    })
      .then(response => response.json())
  },
  getProductTypes() {
    return fetch(`${authApiUrl}/producttypes`)
        .then(response => response.json())
  },
  getProductById(productId) {
    return fetch(`${authApiUrl}/products/${productId}`)
        .then(resp => resp.json())
  }
}