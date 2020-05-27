import React from "react";
import { Route } from 'react-router-dom';
import Login from "./auth/Login"
import Register from "./auth/Register"
import MyAccount from './customers/MyAccount';


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
        <Route path="/cart" render={props => {
            return <p>My Shopping Cart</p>
        }}/>
        <Route path="/myaccount" render={props => {
            return <MyAccount {...props}/>
        }}/>
        <Route path="/paymenttypes" render={props => {
            return <p>Payment Types</p>
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