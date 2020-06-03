// customer profile information, settings (edit) link, edit info link

import React, { useState, useEffect } from "react";
import AccountManager from "../../modules/AccountManager";

const MyAccount = (props) => {
  const [accountDetails, setAccountDetails] = useState({
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });

  const generateAccount = () => {
    AccountManager.getAll().then((allUserData) => {
      const accountInfo = {
        firstName: allUserData.user.first_name,
        lastName: allUserData.user.last_name,
        address: allUserData.address,
        phone: allUserData.phone_number,
      };
      setAccountDetails(accountInfo);
    });
  };

  useEffect(() => {
    generateAccount();
  }, []);

  return (
    <>
      <div className="content">
        <h1>My Account:</h1>
        <p>First Name: {accountDetails.firstName}</p>
        <p>Last Name: {accountDetails.lastName}</p>
        <p>Address: {accountDetails.address}</p>
        <p>Phone Number: {accountDetails.phone}</p>
      </div>
      <div className="content">
        <button
          type="button"
          onClick={() => {
            window.alert("This will route to edit form");
          }}
        >
          Edit Personal Info
        </button>
      </div>
      <div className="content">
        <button
          type="button"
          onClick={() => {
            props.history.push("/paymenttypes");
          }}
        >
          Manage Payment Options
        </button>
      </div>
      <div className="content">
        <button
          type="button"
          onClick={() => {
            props.history.push("/order");
          }}
        >
          View Order History
        </button>
      </div>
    </>
  );
};

export default MyAccount;
