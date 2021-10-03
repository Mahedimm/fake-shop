import React from 'react';
import useProducts from '../../hooks/useProducts';
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import './Order.css'
import OrderReview from '../OrderReview/OrderReview';
const Order = () => {
    const [products,setProducts]=useProducts();
    const [cart,setCart]=useCart(products);

    //handle remove
    const handleRemove= key =>{
        const newCart = cart.filter(product =>product.key !== key);
        setCart(newCart);
    }

    return (
          <div className='main-section container'>
             <div>
               {
                   cart.map(product=><OrderReview 
                    key={product.key}
                    handleRemove={handleRemove}
                    product={product}></OrderReview>)
                   
               }
            </div>
            
            <div>
                 <Cart cart={cart}></Cart>
            </div>
                
        </div>
    );
};

export default Order;