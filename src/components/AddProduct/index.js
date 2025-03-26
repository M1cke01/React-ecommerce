import React, { useState } from "react";
import { Button, CartButton, FormContainer} from "./styles";

const products = [
    {id: 1, nombre: "Pantalón", precio: 400, imagen: "NULL"},
    {id: 2, nombre: "Camisa", precio: 200, imagen: "NULL"},
    {id: 3, nombre: "Gorra", precio: 1500, imagen: "NULL"},
    {id: 4, nombre: "Zapatos", precio: 2500, imagen: "NULL"},
    {id: 5, nombre: "Chamarra", precio: 2000, imagen: "NULL"}
];

const AddProduct = ({ setViewCart }) => {
    const [cart, setCart] = useState({});

    const addToCart = (id) => {
        setCart((prevCart) => ({
            ...prevCart,
            [id]: (prevCart[id] || 0) + 1
        }));
    };

    const removeFromCart = (id) => {
        setCart((prevCart) => {
            if (!prevCart[id]) return prevCart;
            const updateCart = { ...prevCart };
            updateCart[id] -= 1;
            if (updateCart[id] === 0) {
                delete updateCart[id];
            }
            return updateCart;
        });
    };

    const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

    return(
        <FormContainer>
            <CartButton onClick={() => setViewCart(true)}>
                Ver carrto ({totalItems})
            </CartButton>
            <ul>
                {products.map((product) => (
                    <li key={product.id}>
                        <img src={product.imagen} alt= {product.nombre} />
                        <p>{product.nombre} - ${product.precio}</p>
                        <Button onClick={() => addToCart(product.id)}>Agregar al carrito</Button>
                        <Button onClick={() => removeFromCart(product.id)}>Quitar</Button>   
                        <span>Cantidad: {cart[product.id] || 0}</span>
                    </li>
                ))}
            </ul>
        </FormContainer>
    )

}


export default AddProduct;