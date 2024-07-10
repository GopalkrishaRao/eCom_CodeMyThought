import React, { createContext, useState, useContext } from "react";

import image1 from "../images/blog-1-1.jpg";
import image2 from "../images/blog-1-2.jpg";
import image3 from "../images/blog-1-3.jpg";
import image4 from "../images/blog-1-4.jpg";
import image5 from "../images/blog-1-5.jpg";

// export const ProductContext = createContext({
//   products: [],
// });

export const ProductContext = createContext();

export const useProducts = () => useContext(ProductContext);

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([
    { id: 1, name: "iPhone", category: "apple", price: 70000, image: image1 },
    {
      id: 2,
      name: "Samsung",
      category: "samsung",
      price: 30000,
      image: image2,
    },
    { id: 3, name: "applei", category: "apple", price: 300, image: image3 },
    { id: 4, name: "vivi", category: "other", price: 300, image: image4 },
    { id: 5, name: "1+", category: "1plus", price: 300, image: image5 },
  ]);

  return (
    <ProductContext.Provider value={{ products, setProducts }}>
      {children}
    </ProductContext.Provider>
  );
};
