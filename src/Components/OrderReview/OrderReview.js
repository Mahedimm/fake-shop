import React from 'react';
import './OrderReview.css';

const OrderReview = (props) => {
    const {name,img,price,quantity,key} = props.product;
    
    return (
        <div class="shopping-cart">
        <div class="shopping-cart-products">
             <div class="shopping-cart-product">
             <div class="product-remove">
                    <button onClick={()=>props.handleRemove(key)}>X</button>
                </div>
                 <div class="product-info">
                     <div>
                        <h3>{name}</h3>
                         <p>${price} &times; {quantity}</p>
                    </div>
                    <div>
                      <img src={img} />
                      
                    </div>
                    
                </div>
                <div class="product-count">
                    <button>-</button>
                    <span>{quantity}</span>
                    <button>+</button>
                </div>
            </div>
         </div>
    </div>
    );
};

export default OrderReview;