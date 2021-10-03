import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
const header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <div className='options'>
                    <a href="/shop">Shop</a>
                    <a href="/order">Order</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/contact">Contact</a>
                </div>
            </nav>
           
        </div>
    );
};

export default header;