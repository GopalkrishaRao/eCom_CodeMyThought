import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Components/CartContext';
import { UserProvider } from './Components/Provider/UserProvider';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <UserProvider>
       <CartProvider>
       <App />
       </CartProvider>
       </UserProvider>
  
  </React.StrictMode>
);


reportWebVitals();
