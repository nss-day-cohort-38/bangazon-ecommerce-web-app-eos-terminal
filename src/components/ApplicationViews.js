import React from "react";
import { Route } from 'react-router-dom';
import Login from "./auth/Login";
import Register from "./auth/Register";
import ProductForm from "./products/ProductForm";
import MyAccount from './customers/MyAccount';
import PaymentTypeList from './customers/Settings';
import PaymentTypeForm from './payments/PaymentTypeForm'
import SearchResults from "./search/results"


const ApplicationViews = (props) => {

    return(
        <>
        <Route path="/ " render={props => {
            return <p>Home Page</p>
        }}/>
        <Route path="/addproduct" render={props => {
            return <ProductForm { ...props }/>
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