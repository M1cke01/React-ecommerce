import React from "react";
import { useDispatch } from "react-redux";
import { removeItemFromCart } from "../../redux/cartSlice";

const CartItem = ({ item }) => {
    const dispatch = useDispatch();

    const handleRemove = () => {
        dispatch(removeItemFromCart(item.id));
    };

    return (
        <div className="cart-item">
            <img src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={handleRemove}>Quitar</button>
        </div>
    );
};

export default CartItem;