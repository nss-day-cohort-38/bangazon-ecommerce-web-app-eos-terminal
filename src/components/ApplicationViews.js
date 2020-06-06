import React from "react";
import { Route } from "react-router-dom";
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
import MyProducts from "./products/MyProducts";
import Cart from "./orders/Cart";

const ApplicationViews = (props) => {
  return (
    <>
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home {...props} />;
        }}
      />
      <Route
        path="/addproduct"
        render={(props) => {
          return <ProductForm {...props} />;
        }}
      />
      <Route 
        path="/myproducts" 
        render={props => {
            return <MyProducts {...props}/>
        }}
      />
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
      <Route
        exact
        path="/orderhistory"
        render={(props) => {
          return <OrderList {...props} />;
        }}
      />
      <Route
        exact
        path="/cart"
        render={(props) => {
          return <Cart {...props} />;
        }}
      />
      <Route
        path="/neworder"
        render={(props) => {
          return <NewOrderForm {...props} />;
        }}
      />

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

      <Route
        path="/order/:orderId(\d+)/edit"
        render={(props) => {
          return <CompleteOrderForm {...props} />;
        }}
      />

      <Route
        path="/myaccount"
        render={(props) => {
          return <MyAccount {...props} />;
        }}
      />
      <Route
        path="/paymenttypes"
        render={(props) => {
          return <PaymentTypeList {...props} />;
        }}
      />
      <Route
        path="/paymenttypeform"
        render={(props) => {
          return <PaymentTypeForm {...props} />;
        }}
      />
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
    </>
  );
};

export default ApplicationViews;
