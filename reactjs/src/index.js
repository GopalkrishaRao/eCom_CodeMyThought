import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { CartProvider } from './Components/CartContext';
import { UserProvider } from './Components/Provider/UserProvider';
import { ProdcutProvider } from './Components/Provider/ProductProvider';
import CssBaseline from '@mui/material/CssBaseline';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <CssBaseline />
      <UserProvider>
        <ProdcutProvider>
       <CartProvider>
       <App />
       </CartProvider>
        </ProdcutProvider>
       </UserProvider>
  
  </React.StrictMode>
);


reportWebVitals();
