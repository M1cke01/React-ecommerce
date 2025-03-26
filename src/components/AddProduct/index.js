import React from "react";
import { Button, ButtonContainer, CartButton, FormContainer, ProductImage, ProductItem, ProductList, ProductName, ProductPrice} from "./styles";

const products = [
    {id: 1, nombre: "Pantalón", precio: 400, imagen: "NULL"},
    {id: 2, nombre: "Camisa", precio: 200, imagen: "NULL"},
    {id: 3, nombre: "Gorra", precio: 1500, imagen: "NULL"},
    {id: 4, nombre: "Zapatos", precio: 2500, imagen: "NULL"},
    {id: 5, nombre: "Chamarra", precio: 2000, imagen: "NULL"}
];

const AddProduct = ({ setViewCart, addToCart, cart }) => {

    const totalItems = Object.values(cart).reduce((acc, qty) => acc + qty, 0);

    return(
        <FormContainer>
            <ProductList>
                {products.map((product) => (
                    <ProductItem key={product.id}>
                        <ProductImage src={product.imagen} alt= {product.nombre} />
                        <ProductName>{product.nombre}</ProductName>
                        <ProductPrice> ${product.precio}</ProductPrice>
                        <Button onClick={() => addToCart(product.id)}>Agregar al carrito</Button>  
                        <span>Cantidad: {cart[product.id] || 0}</span>
                    </ProductItem>
                ))}
            </ProductList>
            <ButtonContainer>
                <CartButton onClick={() => setViewCart(true)}>
                    Ver carrito ({totalItems})
                </CartButton>
            </ButtonContainer>
        </FormContainer>
    )

}


export default AddProduct;