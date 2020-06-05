import React, { useState } from "react";
import "./Nav.css";
import { withRouter, Link } from "react-router-dom";
import useSimpleAuth from "../auth/useSimpleAuth";
import RecommendProductManager from "../../modules/RecommendedProductManager";

const NavBar = (props) => {
  const [search, setSearch] = useState({ searchBar: "" });
  const [editReset, setEditReset] = useState({ isRouting: true });
  const { isAuthenticated, logout } = useSimpleAuth();
  const [recommendedProducts, setRecommendedProducts] = useState([]);

  const getRecommendedProducts = () => {
    // After the data comes back from the API, we
    //  use the setOrders function to update state
    return RecommendProductManager.getAll().then((res) => {
      setRecommendedProducts(res.length);
    });
  };

  getRecommendedProducts();

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

  const resetEdit = () => {
    props.history.push({
      pathname: "/myaccount",
      state: { editReset: editReset.isRouting },
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
              <Link to="/myproducts">My Products</Link>
              <Link to="/addproduct">Sell a Product</Link>
              <Link to="/order">View Cart</Link>
              <Link to="/recommendproducts">
                Recommendations({recommendedProducts})
              </Link>
              <a
                onClick={() => {
                  resetEdit();
                }}
              >
                My Account
              </a>
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
