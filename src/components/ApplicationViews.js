import React from "react";
import { Route } from 'react-router-dom';
import Login from "./auth/Login"
import Register from "./auth/Register"
import MyAccount from './customers/MyAccount';
import PaymentTypeList from './customers/Settings';
import PaymentTypeForm from './payments/PaymentTypeForm'
import SearchResults from "./search/results"
import ProductTypeList from "./products/ProductTypeList"


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
            return <ProductTypeList {...props}/>
        }}/>
        <Route path="/cart" render={props => {
            return <p>My Shopping Cart</p>
        }}/>
        <Route path="/myaccount" render={props => {
            return <MyAccount {...props}/>
        }}/>
        <Route path="/paymenttypes" render={props => {
            return <PaymentTypeList {...props}/>
        }}/>
        <Route path="/paymenttypeform" render={props => {
            return <PaymentTypeForm {...props}/>
        }}/>
        <Route path="/login" render={props => {
            return <Login {...props}/>
        }}/>
        <Route path="/register" render={props => {
            return <Register {...props}/>
        }}/>
        <Route path="/results" render={props => {
            return <SearchResults {...props}/>
        }}/>
        </>
    )
}

export default ApplicationViews;