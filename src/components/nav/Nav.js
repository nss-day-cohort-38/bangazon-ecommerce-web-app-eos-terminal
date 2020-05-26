import React from 'react';
import './Nav.css';
import { withRouter, Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <>
        <nav>
            <Link to='/ '>
                Home
            </Link>
            <Link to='/addproduct'>
                Sell a Product
            </Link>
            <Link to='/categories'>
                Product Categories
            </Link>
            <Link to='/cart'>
                View Cart
            </Link>
            <Link to='/myaccount'>
                My Account    
            </Link>
            <Link to='/login'>
                Log In
            </Link>
            <Link to=''>
                Log Out
            </Link>
            <Link to='/register'>
                Register
            </Link>
            <p>Search</p>
        </nav>
        </>
    )
};

export default withRouter(NavBar);