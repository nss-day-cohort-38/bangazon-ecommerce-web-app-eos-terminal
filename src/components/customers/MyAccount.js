// customer profile information, settings (edit) link, edit info link

import React, { useState, useEffect } from "react";
import AccountManager from "../../modules/AccountManager";

const MyAccount = (props) => {
  const [accountDetails, setAccountDetails] = useState({
    id: "",
    firstName: "",
    lastName: "",
    address: "",
    phone: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  const generateAccount = () => {
    AccountManager.getAll().then((allUserData) => {
      const accountInfo = {
        id: allUserData.id,
        firstName: allUserData.user.first_name,
        lastName: allUserData.user.last_name,
        address: allUserData.address,
        phone: allUserData.phone_number,
      };
      setAccountDetails(accountInfo);
    });
  };

  const handleFieldChange = (evt) => {
    const stateToChange = { ...accountDetails };
    stateToChange[evt.target.id] = evt.target.value;
    setAccountDetails(stateToChange);
  };

  const updateAccount = (evt) => {
    evt.preventDefault();

    AccountManager.update(accountDetails).then(() => toggleEdit());
  };

  const toggleEdit = () => {
    if (props.location.state.editReset == true) {
      props.location.state.editReset = false;
      setIsEditing(false);
    } else {
    setIsEditing(!isEditing);
    }
  };

  useEffect(() => {
    if (accountDetails.id == "") {
      generateAccount();
    }
    if (props.location.state.editReset == true) {
      toggleEdit();
    }
  }, [props.location.state.editReset]);

  return !isEditing ? (
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
            toggleEdit();
          }}
        >
          Edit Personal Info
        </button>
      </div>
      <div className="content">
        <button
          type="button"
          onClick={() => {
            props.history.push({
                pathname:"/paymenttypes",
                state: {editReset: true},
            })
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
  ) : (
    <div className="content">
      <h1>Account Info:</h1>
      <button
        type="button"
        onClick={() => {
          toggleEdit();
        }}
      >
        Go Back
      </button>
      <p>First Name: {accountDetails.firstName}</p>
      <form onSubmit={updateAccount}>
        <fieldset>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="lastName"
            value={accountDetails.lastName}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="address"
            value={accountDetails.address}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="phone">Phone Number:</label>
          <input
            type="text"
            required
            onChange={handleFieldChange}
            id="phone"
            value={accountDetails.phone}
          />
        </fieldset>
        <fieldset>
          <button type="submit">Save Changes</button>
        </fieldset>
      </form>
    </div>
  );
};

export default MyAccount;
