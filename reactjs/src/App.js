// src/App.jsx
// src/App.jsx or src/Routes.jsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Pages from './Components/Pages/Header';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Cart from './Components/Pages/Cart';
import Register from './Components/Pages/Register';
import ForgoPassword from './Components/Pages/ForgotPassword';
import Login from './Components/Pages/Login';
import ProductDetail from './Components/Pages/ProductDetail';
import Checkout from './Components/Checkout/Checkout';
import Footer from './Components/Pages/Footer';
import UserDashBoard from './Components/Pages/UserDashBoard';


const App = () => {
  return (
    
    <Router>
      <Pages />
      <Routes >
        <Route exact path="/" element={<Home/>} />
        <Route path="/About" element={<About/>} />
        <Route path="/Contact" element={<Contact/>} />
        <Route path="/Cart" element={<Cart/>} />
        <Route path="/Register" element={<Register/>} />
        <Route path="/Login" element={<Login/>} />
        <Route path='/UserDashBoard' element={<UserDashBoard/>}/>
        <Route path="/ForgoPassword" element={<ForgoPassword/>} />
        <Route path="/product/:id" element={<ProductDetail />} />
   
        <Route path="/Checkout" element={<Checkout/>} />
      </Routes>
    <Footer/>
  </Router> 

  );
};

export default App;

