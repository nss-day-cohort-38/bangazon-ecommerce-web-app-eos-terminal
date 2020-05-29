// form for customer to add new payment type

import React, { useEffect, useState } from 'react';
import PaymentTypeManager from '../../modules/PaymentTypeManager';

const PaymentTypeForm = (props) => {
    const [paymentType, setPaymentType] = useState({ merchantName: "", accountNumber: "", expirationDate: "", created_at: ""})

    const handleFieldChange = (evt) => {
        const stateToChange = { ...paymentType }
        stateToChange[evt.target.id] = evt.target.value
        setPaymentType(stateToChange)
    };

    const handleSubmit = (evt) => {
        evt.preventDefault();

        const newPaymentType = {
            "merchant_name": paymentType.merchantName,
            "account_number": paymentType.accountNumber,
            "expiration_date": paymentType.expirationDate,
        }

        PaymentTypeManager.createPaymentType(newPaymentType)
            .then(() => props.history.push("/paymenttypes"))
    }

    return (
        <div className="content">
        <form onSubmit={handleSubmit}>
            <h1>Add New Payment Type</h1>
            <fieldset>
                <label htmlFor="merchantName">Merchant Name:</label>
                <input onChange={handleFieldChange} type="text" id="merchantName" required="" autoFocus="" />
            </fieldset>
            <fieldset>
                <label htmlFor="accountNumber">Account Number:</label>
                <input onChange={handleFieldChange} type="text" id="accountNumber" required="" autoFocus="" />
            </fieldset>
            <fieldset>
                <label htmlFor="expirationDate">Expiration Date:</label>
                <input onChange={handleFieldChange} type="date" id="expirationDate" required="" autoFocus="" />
            </fieldset>
            <button type="submit">Add</button>
            <button type="button" onClick={() => props.history.push("/paymenttypes")}>Cancel</button>
        </form>
        </div>
    )
};

export default PaymentTypeForm;