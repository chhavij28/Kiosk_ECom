import { createContext, useEffect, useState } from "react";
import { products } from "../assets/assets";

export const CartContext = createContext();

const CartContextProvider = (props) => {

    const [cartItems, setCartItems] = useState({});
    const [isInitialized, setIsInitialized] = useState(false);

    const currency = "₹";
    const delivery_fee = 50;  

    useEffect(() => {
        // INFO: Load cart items from localStorage when the component mounts
        const storedCartItems = JSON.parse(localStorage.getItem("cartItems"));
        if (storedCartItems) {
        setCartItems(storedCartItems);
        }
        setIsInitialized(true);
    }, [])


    useEffect(() => {
        // INFO: Save cart items to localStorage whenever cartItems changes
        if(isInitialized){
            localStorage.setItem("cartItems", JSON.stringify(cartItems));
        }
        
    }, [cartItems]);

    const addToCart = (itemId) =>{
        alert("Item added to cart!");

        let cartData = structuredClone(cartItems);
        if (cartData[itemId]) {
        cartData[itemId] += 1;
        } else {
        cartData[itemId] = 1;
        }
        setCartItems(cartData);
    };

    const getCartCount = () => {
        let totalItems = 0;
        for(const item in cartItems){
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    }

    const updateQuantity = (itemId, quantity) => {
        if(quantity==0) alert("Item removed from cart");
        let cartData = structuredClone(cartItems);
        cartData[itemId] = quantity;
        setCartItems(cartData);
    }

    const getCartAmount = () => {
        let totalAmount = 0;
        for(const item in cartItems){
            let itemInfo = products.find((product) => product._id === item);
            totalAmount += (itemInfo.price * cartItems[item]);
        }
        return totalAmount;
    }

    const value = {
        products,
        currency,
        delivery_fee,
        // search,
        // setSearch,
        // showSearch,
        // setShowSearch,
        cartItems,
        addToCart,
        getCartCount,
        updateQuantity,
        getCartAmount,
    };

    return (
        <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
    );
};

export default CartContextProvider;
