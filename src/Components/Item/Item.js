import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { Rating, RatingView } from 'react-simple-star-rating'

import './Item.css';
const Item = (props) => {
    const {name,img,seller,stock,key,price,category,star}=props.product;
  
    const element = <FontAwesomeIcon icon={faShoppingCart} />
  
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
                            <img src={img} alt="" className="product-frame"/>
                        </div>
                        <div className="product-details">
                            <h1>
                                <strong>
                                    <span className="item-quantity">1</span>{name}
                                </strong>
                            </h1>
                            <p><span></span></p>
                                
                                   
                            <p><strong>Seller: {seller} | {stock} Available</strong></p>
                            <RatingView ratingValue={star} size={30} className="foo" />
                
                            <p>Product Code - {key}</p>
                            <button>{category}</button>
                            
                        </div>
                    </div>
                    <div className="price">{price}</div>
              
                    <div class="quantity">
          <input type="number" value="4" min="1" class="quantity-field"/>
        </div>
                    <div className="subtotal">00</div>
                    <div className="remove">
                        <button onClick={()=>props.handleAddCart(props.product)}>{element}  Add To Chart</button>
                    </div>
                </div>
            </div>
            </div>  
           
        
    
    );
};

export default Item;