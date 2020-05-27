//affordances to add and delete payment type

import React, { useEffect, useState } from 'react';
import PaymentTypeCard from '../payments/PaymentTypeCard';
import PaymentTypeManager from '../../modules/PaymentTypeManager';
import useSimpleAuth from '../auth/useSimpleAuth';

const PaymentTypeList = (props) => {
    const [paymentTypes, setPaymentTypes] = useState([]);
    const { isAuthenticated } = useSimpleAuth();

    const getPaymentTypes = () => {
        if (isAuthenticated()) {
            PaymentTypeManager.getPaymentTypesByUser()
                .then(paymentTypes => {
                    setPaymentTypes(paymentTypes)
                })
        }
    };

    useEffect(() => {
        getPaymentTypes();
    }, []);

    return (
        <div>
            <h1>Saved Payment Types:</h1>
            <button type="button" onClick={ () => props.history.push("/paymenttypeform")}>Add Payment Type</button>
            <div>
                {paymentTypes.map(paymentType =>
                    <PaymentTypeCard
                        key={paymentType.id}
                        paymentType={paymentType}
                        { ...props }
                    />
                )}
            </div>
        </div>
    )
};

export default PaymentTypeList;

