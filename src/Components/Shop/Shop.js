import React from 'react';
import {useState,useEffect} from 'react';
import Item from '../Item/Item';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>setProducts(data));

    },[]);

    return (
        <div className='main-section'>
            <div>
            {
            products.map(product=> <Item key={product.key} product={product}></Item>)
        }
            </div>
        
             <aside>
                <div className="items-summery">
                <div className="summary">
                    <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
                    <div className="summary-subtotal">
                        <div className="subtotal-title">Subtotal</div>
                         <div className="subtotal-value final-value" id="basket-subtotal">130.00</div>
                        <div className="summary-promo hide">
                            <div className="promo-title">Promotion</div>
                            <div className="promo-value final-value" id="basket-promo"></div>
                        </div>
                    </div>
                    <div className="summary-delivery">
                        <select name="delivery-collection" className="summary-delivery-selection">
                            <option value="0" selected="selected">Select Collection or Delivery</option>
                            <option value="collection">Collection</option>
                            <option value="first-className">Royal Mail 1st className</option>
                            <option value="second-className">Royal Mail 2nd className</option>
                            <option value="signed-for">Royal Mail Special Delivery</option>
                        </select>
                    </div>
                    <div className="summary-total">
                         <div className="total-title">Total</div>
                        <div className="total-value final-value" id="basket-total">130.00</div>
                    </div>
                    <div className="summary-checkout">
                        <button className="checkout-cta">Go to Secure Checkout</button>
                    </div>
                </div>
                <div className="basket-module">
                    <label for="promo-code">Enter a promotional code
                    </label>
                    <input id="promo-code" type="text" name="promo-code" className="promo-code-field"/>
                    <button className="promo-code-cta">Apply</button>
                </div>
                </div>
                
          
            </aside>
        </div>
      
      
    );
};

export default Shop;


