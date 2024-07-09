import React, { useContext } from 'react';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import userContext from '../context/Context';
import {productContext} from '../context/Context';


import image1 from '../images/blog-1-1.jpg';
import image2 from '../images/blog-1-2.jpg';
import image3 from '../images/blog-1-3.jpg';
import image4 from '../images/blog-1-4.jpg';
import image5 from '../images/blog-1-5.jpg';




export const useProducts = () => useContext(productContext);

export const ProdcutProvider = ({ children }) => {
  

    const products = [
        { id: 1, name: 'iPhone', category: 'apple', price: 70000, image: image1 },
        { id: 2, name: 'Samsung', category: 'samsung', price: 30000, image: image2 },
        { id: 3, name: 'applei', category: 'apple', price: 300, image: image3 },
        { id: 4, name: 'vivi', category: 'other', price: 300, image: image4 },
        { id: 5, name: '1+', category: '1plus', price: 300, image: image5 },
      ];



  return (
    <productContext.Provider value={{ products }}>
      {children}
      {/* <ToastContainer /> */}
    </productContext.Provider>
  );
};