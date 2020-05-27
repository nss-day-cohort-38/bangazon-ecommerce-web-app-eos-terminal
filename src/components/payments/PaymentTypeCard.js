//card with delete option for each payment type

import React from 'react';

const PaymentTypeCard = (props) => {
    const expirationDate = props.paymentType.expiration_date.split('T')[0]
    const accountNumber = props.paymentType.account_number.slice(-4)

    return (
        <div>
            <p>Card: {props.paymentType.merchant_name}</p>
            <p>Account Number: Ends in {accountNumber} </p>
            <p>Expiration Date: {expirationDate}</p>
        </div>
    );
}

export default PaymentTypeCard;