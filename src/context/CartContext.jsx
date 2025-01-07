/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext,useState, useEffect } from "react";

export const CartContext = createContext();

export const CartContextProvider = ({ children }) => {
    const [cart, setCart] = useState(localStorage.getItem('cart')?JSON.parse(localStorage.getItem('cart')): []);
    useEffect(()=>
    {
        const stored=localStorage.getItem('cart');
        if(stored)
            {
                setCart(JSON.parse(stored));
            }
    },[]);
    
    useEffect(()=>{
        localStorage.setItem('cart',JSON.stringify(cart));
    },[cart]);
    const addToCart=(cartItem)=>
    {
        const existing=cart.find(item=>item.id===cartItem.id)
        try {
            if(existing)
                {
                    const updatedCart = cart.map(item =>
                        item.id === cartItem.id ? { ...item, quantity: item.quantity + 1 } : item
                    );
                    setCart(updatedCart);
                }
            else 
            {
                setCart([...cart,{...cartItem,quantity:1}]);
            }
        } catch (error) {
            throw new Error ('Error adding item to cart')
        }
    }

        const decreaseQuantity=(itemId)=>
        {
            const item=cart.find(item=>item.id===itemId);
            if(item.quantity==1)
                {
                    removeFromCart(item.id);
                }
            else
            {
                const updatedCart=cart.map(item=>item.id===itemId ?{...item,quantity:item.quantity-1}:item);
                setCart(updatedCart);
            }
            
        }
        const removeFromCart=(itemId)=>
        {
            try {
                const updatedcart=cart.filter(item=>item.id!==itemId);
                setCart(updatedcart);
            } catch (error) {
                throw new Error('Error removing , Try again');
            }
        }
        const increaseQuantity=(itemId)=>
            {
                const updatedCart=cart.map(item=>item.id===itemId?{...item,quantity:item.quantity+1}:item);
                setCart(updatedCart);
            }
            const getUniqueItemCount = () => {
                return cart.length;
            };
    return (
        <CartContext.Provider value={{cart,addToCart,decreaseQuantity,removeFromCart,increaseQuantity,getUniqueItemCount}}>
            {children}
        </CartContext.Provider>
    )
    
}

