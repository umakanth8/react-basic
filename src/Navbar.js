import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="logo-container">
            <img 
  src="/images/logo.png" 
  alt="Logo" 
  className="img-fluid"
  style={{ width: '50px', height: 'auto' }}  
/>
                <h1 className="site-title">Going to School</h1>
            </div>
            <ul className="nav-links">
                <li><Link to ="/Home">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/supporters">Supporters</Link></li>
                <li><Link to="/policies">Policies</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/financials">Financials</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
