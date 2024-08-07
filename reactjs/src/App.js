import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/sharedComponents/Header";
import Home from "./Components/Pages/Home";
import About from "./Components/Pages/About";
import Contact from "./Components/Pages/Contact";
import Cart from "./Components/Pages/Cart";
import Register from "./Components/Pages/Register";
import ForgoPassword from "./Components/Pages/ForgotPassword";
import Login from "./Components/Pages/Login";
import ProductDetail from "./Components/Pages/ProductDetail";
import Checkout from "./Components/Checkout/Checkout";
import UserDashBoard from "./Components/Pages/UserDashBoard";
import Footer from "./Components/sharedComponents/Footer";
import ErrorPage from "./Components/Pages/ErrorPage";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/UserDashBoard" element={<UserDashBoard />} />
        <Route path="/ForgoPassword" element={<ForgoPassword />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Checkout" element={<Checkout />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
