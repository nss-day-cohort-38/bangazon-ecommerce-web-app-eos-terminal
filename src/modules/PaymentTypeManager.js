const paymentTypesApiUrl = "http://localhost:8000/paymenttypes";

const PaymentTypeManager = {
    getPaymentTypesByUser() {
        return fetch(paymentTypesApiUrl, {
            "method": "GET",
            "headers": {
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon-token")}`
            }
        })
        .then(resp => resp.json())
    }
};

export default PaymentTypeManager;