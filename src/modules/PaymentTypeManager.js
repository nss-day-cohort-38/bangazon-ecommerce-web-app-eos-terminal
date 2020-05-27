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
    },
    createPaymentType(newPaymentType) {
        return fetch(paymentTypesApiUrl, {
            "method": "POST",
            "headers": {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": `Token ${sessionStorage.getItem("bangazon-token")}`
            },
            "body": JSON.stringify(newPaymentType)
        })
    }
};

export default PaymentTypeManager;