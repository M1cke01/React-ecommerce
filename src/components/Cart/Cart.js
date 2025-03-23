import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";
import CartItem from './CartItem';

const Cart = () => {
    const cartItems = useSelector((state) => state.cart.items);
    const dispatch = useDispatch();

    return (
        <div className="cart">
            {cartItems.length === 0 ? (
                <p>Tu carrito esta vacío</p>
            ) : ( 
                cartItems.map((item) => (
                    <CartItem key ={item.id} item={item} />
                ))
            )}
        </div>
    );
};

export default Cart;