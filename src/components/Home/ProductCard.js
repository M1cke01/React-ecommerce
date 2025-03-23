import React from "react";
import { addItemToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";

const ProductCard = ({ product }) => {
    const dispatch = useDispatch();

    const handleAddToCard = () => {
        dispatch(addItemToCart(product));
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={handleAddToCard}>Añadir al carrito</button>
        </div>
    );
};

export default ProductCard;