import React from 'react';

const Cart = (props) => {

    const{cart}=props;
    let total = 0;
    let totalQuantity=0;
    for(const product of cart){
        product.quantity = !product.quantity?1:product.quantity;
        total = total+product.price*product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }
    const shipping = total > 0? 100 : 0;
    const grandTotal = total+shipping;
  
    
    return (
        <div>
            
            <aside>
                <div className="items-summery">
                <div className="summary">
                    <div className="summary-total-items"><span className="total-items"></span> Items in your Bag</div>
                    <div className="summary-subtotal">
                        <div className="subtotal-title">Subtotal</div>
                         <div className="subtotal-value final-value" id="basket-subtotal">{total.toFixed(2) }</div>
                        <div className="summary-promo hide">
                            <div className="promo-title">Promotion</div>
                            <div className="promo-value final-value" id="basket-promo"></div>
                        </div>
                    </div>
                    <div className="summary-delivery">
                        <select name="delivery-collection" className="summary-delivery-selection">
                            <option value="0" selected="selected">Select Collection or Delivery</option>
                            <option value="collection">24 hour Express Delivery </option>
                            <option value="first-className">1 Day Fast Delivery</option>
                            <option value="second-className">WithIn 3 day Delivery</option>
                            <option value="signed-for">7 Day Delivery</option>
                        </select>
                    </div>
                    <div className="summary-subtotal">
                        <div className="subtotal-title">Shipping</div>
                         <div className="subtotal-value final-value" id="basket-subtotal">{shipping}</div>
                      
                    </div>
                    <div className="summary-total">
                         <div className="total-title">Total</div>
                        <div className="total-value final-value" id="basket-total">{grandTotal.toFixed(2) }</div>
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

export default Cart;