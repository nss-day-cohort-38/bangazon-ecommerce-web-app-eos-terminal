import React, { useState } from "react";
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
    e.target.querySelector("#searchBar").value = "";
    props.history.push({
      pathname: "/results",
      state: { search: search.searchBar },
    });
  };

  return (
    <>
      <div id="navDiv">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/categories">Product Categories</Link>
          {isAuthenticated() ? (
            <>
              {" "}
              <Link to="/addproduct">Sell a Product</Link>
              <Link to="/order">View Cart</Link>
              <Link to="/myaccount">My Account</Link>
              <Link
                onClick={() => {
                  logout();
                }}
                to="/"
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
        {isAuthenticated() ? (
          <div className="searchBarDiv">
            <form onSubmit={handleSearch}>
              <input
                onChange={handleFieldChange}
                type="text"
                id="searchBar"
                placeholder="Search for product/location"
                // autoFocus=""
              />
            </form>
          </div>
        ) : (
          <div className="searchBarDiv"></div>
        )}
      </div>
    </>
  );
};

export default withRouter(NavBar);
