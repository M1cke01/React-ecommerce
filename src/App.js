import React, { useState } from 'react';
import { AppHeader, HeaderTitle, ProductContainer } from './styles/styles';
import AddProduct from './components/AddProduct';
import { Provider, useSelector } from "react-redux";
import { store } from './components/store/store';
import Login from './components/Login';
import { ButtonQuit, ButtonReturn } from './components/AddProduct/styles';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [cart, setCart] = useState({});

  const addToCart = (id) => {
    setCart((prevCart) => ({
        ...prevCart,
        [id]: (prevCart[id] || 0) + 1
      }));
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => {
      const updateCart = { ...prevCart };
      updateCart[id] -= 1;
      if (updateCart[id] === 0) {
        delete updateCart[id];
      }
      return updateCart;
    });
  };

  const [viewCart, setViewCart] = useState(false);

  return (
    <Provider store={store}>
      <div>
        {isAuthenticated ? (
          <ProductContainer>
            <AppHeader>
              <HeaderTitle>Lista de productos</HeaderTitle>
            </AppHeader>
            {viewCart ? (
              <div>
                <h2>Carrito</h2>
                <p>Productos agregados</p>
                <ul>
                  {Object.keys(cart).map((id) => (
                    <li key={id}>
                      <p>Producto {id} - Cantidad: {cart[id]} </p>
                      <ButtonQuit onClick={() => removeFromCart(id)}>Quitar</ButtonQuit>
                    </li>
                  ))}
                </ul>
                <ButtonReturn onClick={() => setViewCart(false)}>Regresar a la lista de productos</ButtonReturn>
              </div>
            ) : (
              <AddProduct 
                setViewCart={setViewCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
              />
            )}
          </ProductContainer>
        ) : (
          <Login />
        )}
      </div>
    </Provider>
  );
};

export default App;
