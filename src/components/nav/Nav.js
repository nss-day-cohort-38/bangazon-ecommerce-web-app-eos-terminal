import React, { useState } from "react"
import "./Nav.css";
import { withRouter, Link } from "react-router-dom";
import useSimpleAuth from "../auth/useSimpleAuth";


const NavBar = (props) => {
  const [search, setSearch] = useState({ searchBar: "" });
  const { isAuthenticated, logout } = useSimpleAuth();

  const handleFieldChange = (evt) => {
    const stateToChange = { ...search };
    stateToChange[evt.target.id] = evt.target.value;
    setSearch(stateToChange);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    e.target.querySelector('#searchBar').value = "";
    props.history.push({
        pathname: '/results',
        state: { search: search.searchBar }
      })
  };

  return (
    <>
      <nav>
        <Link to="/ ">Home</Link>
        <Link to="/categories">Product Categories</Link>
        {isAuthenticated() ? (
          <>
            {" "}
            <Link to="/addproduct">Sell a Product</Link>
            <Link to="/cart">View Cart</Link>
            <Link to="/myaccount">My Account</Link>
            <form onSubmit={handleSearch}>
            <input
              onChange={handleFieldChange}
              type="text"
              id="searchBar"
              placeholder="Search for product/location"
              autoFocus=""
            />
            </form>
            <Link
              onClick={() => {
                logout();
              }}
              to="/ "
            >
              Log Out
            </Link>{" "}
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </>
  );
};

export default withRouter(NavBar);
