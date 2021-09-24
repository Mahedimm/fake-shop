import React from 'react';
import './Item.css';
const Item = (props) => {
    return (
            <div className='product-baskets'>
                <div className="basket">
                <div className="basket-labels">
                     <ul>
                        <li className="item item-heading">Item</li>
                        <li className="price">Price</li>
                        <li className="quantity">Quantity</li>
                        <li className="subtotal">Subtotal</li>
                    </ul>
                </div>
                <div className="basket-product">
                     <div className="item">
                        <div className="product-image">
                            <img src={props.product.img} alt="" className="product-frame"/>
                        </div>
                        <div className="product-details">
                            <h1>
                                <strong>
                                    <span className="item-quantity">1</span>{props.product.name}</strong> <span>
                            
                                    </span>
                                   </h1>
                                   
                            <p><strong>Seller: {props.product.seller} | {props.product.stock} Available</strong></p>
                
                            <p>Product Code - {props.product.key}</p>
                            <button>{props.product.category}</button>
                            
                        </div>
                    </div>
                    <div className="price">26.00</div>
                    <div className="quantity">
                         <input type="number" value="4" min="1" className="quantity-field"/>
                    </div>
                    <div className="subtotal">104.00</div>
                    <div className="remove">
                        <button>Add To Chart</button>
                    </div>
                </div>
            </div>
            </div>  
           
        
    
    );
};

export default Item;