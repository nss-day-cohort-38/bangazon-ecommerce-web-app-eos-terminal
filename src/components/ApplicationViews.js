import React from "react";
import { Route } from 'react-router-dom';


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
            return <p>My Account</p>
        }}/>
        <Route path="/login" render={props => {
            return <p>Log In Form</p>
        }}/>
        <Route path="/register" render={props => {
            return <p>Register Form</p>
        }}/>
        </>
    )
}

export default ApplicationViews;