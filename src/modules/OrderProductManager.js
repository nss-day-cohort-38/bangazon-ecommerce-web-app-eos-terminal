const orderProductsApiUrl = "http://localhost:8000/orderproducts";

export default {
    getOrderProducts() {
        return fetch(`${orderProductsApiUrl}`, {
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`
            }
        }).then((resp) => resp.json())
    },
    addOrderProduct(orderProduct) {
        return fetch(`${orderProductsApiUrl}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
                Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`
            },
            body: JSON.stringify(orderProduct),
        }).then((response) => response.json());
    },
    deleteOrderProduct(id) {
        return fetch(`${orderProductsApiUrl}/${id}`, {
            "method": "DELETE",
            "headers": {
                "Authorization": `Token ${sessionStorage.getItem("bangazon-token")}`
            }
        })
    }
};