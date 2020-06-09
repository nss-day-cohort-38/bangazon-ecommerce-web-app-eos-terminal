import React from "react";
import { Route, Redirect } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import OrderList from "./orders/Orders";
import NewOrderForm from "./orders/NewOrderForm";
import OrderDetail from "./orders/OrderDetails";
import MyAccount from "./customers/MyAccount";
import PaymentTypeList from "./customers/Settings";
import PaymentTypeForm from "./payments/PaymentTypeForm";
import SearchResults from "./search/Results";
import CompleteOrderForm from "./orders/CompleteOrderForm";
import ProductDetail from "./products/ProductDetails";
import ProductForm from "./products/ProductForm";
import ProductTypeList from "./products/ProductTypeList";
import ProductList from "./products/ProductList";
import Home from "./home/Home";
import RecommendationForm from "./recommendations/RecommendationForm";
import MyProducts from "./products/MyProducts";
import Cart from "./orders/Cart";
import useSimpleAuth from "./auth/useSimpleAuth";
import RecommendationList from "./recommendations/Recommendations";

const ApplicationViews = (props) => {

  const { isAuthenticated } = useSimpleAuth();

  return (
    <>
      <Route
        exact 
        path="/"
        render={(props) => {
          return <Home {...props} />;
        }}
      />
      {isAuthenticated() ? (
        <Route
          path="/addproduct"
          render={(props) => {
            return <ProductForm {...props} />;
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      {isAuthenticated() ? (
        <Route 
          path="/myproducts" 
          render={props => {
            return <MyProducts {...props}/>
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      <Route
        path="/products/:productId(\d+)"
        render={(props) => {
          return (
            <ProductDetail
              productId={parseInt(props.match.params.productId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/categories/:productTypeId(\d+)"
        render={(props) => {
          return (
            <ProductList
              productTypeId={parseInt(props.match.params.productTypeId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/categories"
        render={(props) => {
          return <ProductTypeList {...props} />;
        }}
      />
      {isAuthenticated() ? (
        <Route
          exact 
          path="/orderhistory"
          render={(props) => {
            return <OrderList {...props} />;
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      {isAuthenticated() ? (
        <Route
          exact
          path="/cart"
          render={(props) => {
            return <Cart {...props} />;
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      <Route
        path="/neworder"
        render={(props) => {
          return <NewOrderForm {...props} />;
        }}
      />
      {isAuthenticated() ? (
        <Route
          exact
          path="/order/:orderId(\d+)"
          render={(props) => {
            return (
              <OrderDetail
                orderId={parseInt(props.match.params.orderId)}
                {...props}
              />
            );
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      {isAuthenticated() ? (
        <Route
          path="/order/:orderId(\d+)/edit"
          render={(props) => {
            return <CompleteOrderForm {...props} />;
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      {isAuthenticated() ? (
        <Route
          path="/myaccount"
          render={(props) => {
            return <MyAccount {...props} />;
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      {isAuthenticated() ? (
        <Route
          path="/paymenttypes"
          render={(props) => {
            return <PaymentTypeList {...props} />;
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      {isAuthenticated() ? (
        <Route
          path="/paymenttypeform"
          render={(props) => {
            return <PaymentTypeForm {...props} />;
          }}
        />
      ) : (
        <Redirect to="/login" />
      )}
      <Route
        path="/login"
        render={(props) => {
          return <Login {...props} />;
        }}
      />
      <Route
        path="/register"
        render={(props) => {
          return <Register {...props} />;
        }}
      />
      <Route
        path="/results"
        render={(props) => {
          return <SearchResults {...props} />;
        }}
      />
      <Route
        path="/recommendproducts/:productId(\d+)"
        render={(props) => {
          return (
            <RecommendationForm
              productId={parseInt(props.match.params.productId)}
              {...props}
            />
          );
        }}
      />
      <Route
        path="/recommendedproducts"
        render={(props) => {
          return <RecommendationList {...props} />;
        }}
      />
    </>
  );
};

export default ApplicationViews;
