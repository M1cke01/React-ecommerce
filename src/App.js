import React, { useState } from 'react';
import { AppHeader, HeaderTitle, ProductContainer } from './styles/styles';
import AddProduct from './components/AddProduct';
import { Provider, useDispatch, useSelector } from "react-redux";
import { store } from './components/store/store';
import Login from './components/Login';
import { ButtonQuit, ButtonReturn } from './components/AddProduct/styles';
import { logout } from './components/AuthSlice';
import { ButtonLogout } from './components/Login/styles';

const App = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const [cart, setCart] = useState({});
  const [viewCart, setViewCart] = useState(false);
  const [products, setProducts] = useState({});
  const cartCount = Object.values(cart).reduce((total, count) => total + count, 0);

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

  return (
    <Provider store={store}>
      <div>
        {isAuthenticated ? (
          <ProductContainer>
            <AppHeader>
              <HeaderTitle>Lista de productos</HeaderTitle>
              <ButtonLogout onClick={() => dispatch(logout())}>Cerrar sesión</ButtonLogout>
            </AppHeader>
            {viewCart ? (
              <div>
                <h2>Carrito</h2>
                <p>Productos agregados</p>
                <ul>
                  {Object.keys(cart).map((id) => {
                    const product = products.find((p) => p.id === parseInt(id));
                    return (
                      <li key={id}>
                      <p>{product ? product.nombre : "Producto no encontrado"} - Cantidad: {cart[id]} </p>
                      <ButtonQuit onClick={() => removeFromCart(id)}>Quitar</ButtonQuit>
                    </li>
                    );
                  })}
                </ul>
                <ButtonReturn onClick={() => setViewCart(false)}>Regresar a la lista de productos</ButtonReturn>
              </div>
            ) : (
              <AddProduct 
                setViewCart={setViewCart}
                addToCart={addToCart}
                removeFromCart={removeFromCart}
                cart={cart}
                setProducts={setProducts}
                cartCount={cartCount}
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
