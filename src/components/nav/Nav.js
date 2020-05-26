import React from 'react';
import './Nav.css';
import { withRouter, Link } from 'react-router-dom';
import useSimpleAuth from "../auth/useSimpleAuth"

const NavBar = (props) => {

    const { isAuthenticated, logout} = useSimpleAuth()

    return (
        <>
        <nav>
            <Link to='/ '>
                Home
            </Link>
            <Link to='/categories'>
                Product Categories
            </Link>
    {
    isAuthenticated() ?
           <> <Link to='/addproduct'>
                Sell a Product
            </Link>
            <Link to='/cart'>
                View Cart
            </Link>
            <Link to='/myaccount'>
                My Account    
            </Link>
            <p>Search</p>
            <Link onClick={() => {logout()}} to='/ '>
                Log Out
            </Link> </>
           :<>
            <Link to='/login'>
                Log In
            </Link>
            <Link to='/register'>
                Register
            </Link></>
    }
        </nav>
        </>
    )
};

export default withRouter(NavBar);