import React from "react";
import { Button } from "../AddProduct/styles";

const Cart = ({ cart, removeFromCart, setViewCart }) => {
    const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

    return (
        <div>
            <h2>Carrito</h2>
            <ul>
                {Object.keys(cart).map((id) => {
                    const product = products.find((prod) => prod.id === parseInt(id));
                    return (
                        <li key={id}>
                            <p>{product.nombre} - ${product.precio} x {cart[id]}</p>
                            <Button onClick={() => removeFromCart(id)}>Quitar</Button>
                        </li>
                    );
                })}
            </ul>
            <div>
                <p>Total de productos: {totalItems}</p>
                <Button onClick={() => setViewCart(false)}>Volver a productos</Button>
            </div>
        </div>
    );
};

export default Cart;