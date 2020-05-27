//card with delete option for each payment type

import React from 'react';

const PaymentTypeCard = (props) => {
    return (
        <div>
            <p>Card: {props.paymentType.merchant_name}</p>
            <p>Account Number: {props.paymentType.account_number}</p>
            <p>Expiration Date: {props.paymentType.expiration_date}</p>
        </div>
    );
}

export default PaymentTypeCard;