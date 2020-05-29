// customer profile information, settings (edit) link, edit info link

import React from 'react';

const MyAccount = (props) => {
    return (
        <div className="content">
            <h1>My Account:</h1>
            <button type="button" onClick={() => { props.history.push("/paymenttypes") }}>Manage Payment Options</button>
        </div>
    );
}

export default MyAccount;