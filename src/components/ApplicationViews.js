import React from "react";
import { Route } from 'react-router-dom';
import Login from "./auth/Login"
import Register from "./auth/Register"
import OrderList from "./orders/Orders";
import NewOrderForm from "./orders/NewOrderForm"
import OrderDetail from "./orders/OrderDetails"


const ApplicationViews = (props) => {

    return(
        <>
        <Route path="/ " render={props => {
            return <p>Home Page</p>
        }}/>
        <Route path="/addproduct" render={props => {
            return <p>Sell a Product</p>
        }}/>
        <Route path="/categories" render={props => {
            return <p>Product Categories</p>
        }}/>
        <Route exact path="/order" render={props => {
            return <OrderList {...props}/>
        }}/>

        <Route
        path="/neworder" render={props => {
          return <NewOrderForm {...props} />;
        }}
      />

        <Route
        exact
        path="/order/:orderId(\d+)"
        render={props => {
            return <OrderDetail orderId={parseInt(props.match.params.orderId)}
                {...props}/>
        }}
        />

        <Route path="/myaccount" render={props => {
            return <p>My Account</p>
        }}/>
        <Route path="/login" render={props => {
             return <Login {...props}/>
        }}/>
        <Route path="/register" render={props => {
            return <Register {...props}/>
        }}/>
        </>
    )
}

export default ApplicationViews;