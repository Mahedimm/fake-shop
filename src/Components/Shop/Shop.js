import React from 'react';
import {useState,useEffect} from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Item from '../Item/Item';
import './Shop.css';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const[cart,setCart]=useState([]);
    const[searchProducts, SetSearchProducts]=useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res=>res.json())
        .then(data=>{
            setProducts(data);
            SetSearchProducts(data);
        });

    },[]);
    useEffect(()=>{
        const saveCart = getStoredCart();
        const storedCart = [];
        if(products.length){
            for(const key in saveCart){
                const addedProducts = products.find (product=>product.key===key);
                if(addedProducts){
                    const quantity = saveCart[key];
                    addedProducts.quantity=quantity;
                    storedCart.push(addedProducts);
                    
                }
                
        }
        setCart(storedCart);
        }
    },[products])

    const handleAddCart =(product)=>{
        const newCart=[...cart, product];
        setCart(newCart);
        //save to local storage
        addToDb(product.key);   
    }

        const handleSearch=event=>{
            const searchText = event.target.value;
            const matchedProduct = products.filter(product=> product.name.toLowerCase().includes(searchText.toLowerCase()));
            SetSearchProducts(matchedProduct);
            console.log(matchedProduct);

        }
    return (
        <>
        <div>
        <form className='search-bar'action="#" type="post">
                    <div className="search">    
                        <input type="search" onChange={handleSearch} placeholder="Search" /><input type="submit" value=""/>
                        <span className="entypo-search"></span>   
                     </div> 
                     <div className='cart-item'>
                         <h5>No. of Items  : <span> 0 </span></h5>
                         <h5>Sub total  : <span> 0 </span></h5>
                     </div>
                </form>
        </div>
         
        <div className='main-section'>
            <div>
                {
                searchProducts.map(product=> <Item key={product.key} product={product} quantity={cart.quantity} handleAddCart={handleAddCart
                }> </Item>)
                }
            </div>
                <Cart cart={cart} ></Cart>
        </div>
        </>
    );
};

export default Shop;


