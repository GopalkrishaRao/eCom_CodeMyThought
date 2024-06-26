
import React from 'react';
import { useCart } from '../CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import Variants from './UserDashBoard';
import UserDashBoard from './UserDashBoard';

const Cart = () => {
  const { cart, incrementItem, decrementItem ,removeItem } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleRemoveItem = (item) => {
    removeItem(item.id);
    toast.success(`${item.name} removed from cart!`);
  };

  return (
    <>
   <UserDashBoard/>
    <section class="section-breadcrumb">
        <div class="cr-breadcrumb-image">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="cr-breadcrumb-title">
                            <h2>Cart</h2>
                            <span> <Link to="/">Home</Link> / Cart</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="section-cart padding-t-100">
        <div class="container">
            <div class="row d-none">
                <div class="col-lg-12">
                    <div class="mb-30" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                        <div class="cr-banner">
                            <h2>Cart</h2>
                        </div>
                        <div class="cr-banner-sub-title">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                                ut labore lacus vel facilisis. </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    <div class="cr-cart-content" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="400">
                        <div class="row">
                            <form action="#">
                                <div class="cr-table-content">
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Product</th>
                                                <th>price</th>
                                                <th class="text-center">Quantity</th>
                                                <th>Sub Total</th>
                                               
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        {cart.length === 0 ? (
                                                <p>Your cart is empty</p>
                                            ) : (
                                                cart.map((item, index) => (
                                            <tr>
                                                <td class="cr-cart-name">
                                                    <a href="javascript:void(0)">
                                                        <img src={item.image} alt={item.name}
                                                            class="cr-cart-img"/>
                                                        {item.name}
                                                    </a>
                                                </td>
                                               
                                                <td class="cr-cart-price">
                                                    <span class="amount">{item.price}</span>
                                                </td>
                                                
                                                <td class="cr-cart-qty">
                                                    <div class="cart-qty-plus-minus">
                                                        <button type="button" class="plus"onClick={() => incrementItem(item.id)}>+</button>
                                                        <input type="text" placeholder="." value={item.quantity} minlength="1"
                                                            maxlength="20" class="quantity" readOnly/>
                          
                                                        <button type="button" class="minus"onClick={() => decrementItem(item.id)}>-</button>
                                                    </div>
                                                </td>
                                                
                                                <td class="cr-cart-subtotal">{item.price * item.quantity}</td>
                                                <td class="cr-cart-remove">
                                                    <Link to="javascript:void(0)">
                                                        <i class="ri-delete-bin-line" onClick={() => handleRemoveItem(item)}></i>
                                                    </Link>
                                                </td>
                                            </tr>
                                           
                                          
                                        ))
                                          )}
                                           
                                        </tbody>
                                    </table>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="cr-cart-update-bottom">
                                            <Link to="/" class="cr-links"></Link>
                                            <Link to="" class="cr-button">
                                            {getTotalPrice()}
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-lg-12">
                                        <div class="cr-cart-update-bottom">
                                            <Link to="/" class="cr-links">Continue Shopping</Link>
                                            <Link to="/checkout" class="cr-button">
                                                Check Out
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                               
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ToastContainer />
    </section>


    

  

    </>
    
  );
};

export default Cart;
