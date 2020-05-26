import React from 'react';
import './Bangazon.css';
import ApplicationViews from './components/ApplicationViews';
import NavBar from './components/nav/Nav';
import { BrowserRouter as Router } from 'react-router-dom';


function Bangazon() {
  return (
    <>
      <Router>
        <NavBar />
        <ApplicationViews />
      </Router>
    </>
  );
}

export default Bangazon;
