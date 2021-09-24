import React from 'react';
import logo from '../../images/logo.png';
import './header.css';
const header = () => {
    return (
        <div className='header'>
            <img className='logo' src={logo} alt="" />
            <nav>
                <div className='options'>
                    <a href="/Shop">Shop</a>
                    <a href="/Order">Order</a>
                    <a href="/Inventory">Inventory</a>
                    <a href="/Contact">Contact</a>
                </div>
            </nav>
            <form className='search-bar'action="#" type="post">
                    <div className="search">    
                        <input type="search" placeholder="Search" /><input type="submit" value=""/>
                        <span className="entypo-search"></span>   
                     </div> 
                     <div className='cart-item'>
                         <h5>No. of Items  : <span> 0 </span></h5>
                         <h5>Sub total  : <span> 0 </span></h5>
                     </div>
                </form>
        </div>
    );
};

export default header;