// src/Components/Contexts/ContextProvider.js

import React from 'react';
import { AuthProvider } from './AuthContext';
import { ProductProvider } from './ProductContext';
import { CartProvider } from './CartContext';

const ContextProvider = ({ children }) => {
  return (
    <AuthProvider>
      <ProductProvider>
        <CartProvider>
          {children}
        </CartProvider>
      </ProductProvider>
    </AuthProvider>
  );
};

export default ContextProvider;
