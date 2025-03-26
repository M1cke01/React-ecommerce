import React from 'react';
import ReactDOM from 'react-dom/client';  // Cambiado: importa desde 'react-dom/client'
import { Provider } from 'react-redux';
import App from './App';
import { store } from "./components/store/store";

// Aquí cambiamos render() por createRoot()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
