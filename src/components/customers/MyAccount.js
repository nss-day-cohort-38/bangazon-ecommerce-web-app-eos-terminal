// customer profile information, settings (edit) link, edit info link

import React from 'react';

const MyAccount = (props) => {
    return (
        <button type="button" onClick={() => { props.history.push("/paymenttypes") }}>Manage Payment Options</button>
    );
}

export default MyAccount;