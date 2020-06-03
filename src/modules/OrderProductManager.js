const orderProductsApiUrl = "http://localhost:8000/orderproducts";

export default {
    addOrderProduct(orderProduct) {
        return fetch(`${orderProductsApiUrl}`, {
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