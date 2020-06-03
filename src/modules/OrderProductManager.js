const orderProductsApiUrl = "http://localhost:8000/orderproducts";

export default {
    getOrderProducts() {
        return fetch(`${orderProductsApiUrl}/orderproducts`).then((resp) =>
        resp.json())
    },
    addOrderProduct(orderProduct) {
        return fetch(`${orderProductsApiUrl}/${orderProduct.id}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
            },
            body: JSON.stringify(orderProduct),
        }).then((response) => response.json());
    },
    deleteOrderProduct(orderProductId) {
        return fetch(`${orderProductsApiUrl}/${orderProductId}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${sessionStorage.getItem("bangazon-token")}`
            }
        })
    }
};