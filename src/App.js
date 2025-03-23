import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './components/Login/LoginForm';
import RegisterForm from './components/Register/RegisterForm';
import ProductList from './components/Home/ProductList';
import Cart from './components/Cart/Cart';
import CheckoutForm from './components/CheckOut/CheckoutForm';
import PostCheckout from './components/PostCheckout/PostCheckout';
import store from './redux/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/" element={<ProductList />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/chackout" element={<CheckoutForm />} />
          <Route path="post-chekout" element={<PostCheckout />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
