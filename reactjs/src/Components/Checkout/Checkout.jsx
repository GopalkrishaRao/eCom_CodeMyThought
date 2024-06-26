import React, { useState } from 'react';
import { useCart } from '../CartContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import './Checkout.css';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { cart } = useCart();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    paymentMode: 'Credit Card',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) {
      newErrors.name = 'Name is required';
    }
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      newErrors.phone = 'Phone number is invalid';
    }
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '',
    });
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      // Handle the form submission, e.g., send the data to your server
      const orderData = {
        ...formData,
        cartItems: cart,
        totalPrice: getTotalPrice(),
      };
      console.log('Order data:', orderData);
      toast.success('Checkout successful!');
      // Clear form data
      setFormData({
        name: '',
        email: '',
        phone: '',
        paymentMode: 'Credit Card',
      });
    }
  };

  return (
    <>
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Checkout</h2>
                  <span><Link to="/">Home</Link> - Checkout</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cr-checkout-section padding-tb-100">
        <div className="container">
          <div className="row">
            <div className="cr-checkout-leftside col-lg-8 col-md-12">
              <div className="cr-checkout-content">
                <div className="cr-checkout-inner">
                  <div className="cr-checkout-wrap">
                    <div className="cr-checkout-block cr-check-bill">
                      <h3 className="cr-checkout-title">Billing Details</h3>
                      <div class="cr-check-bill-form mb-minus-24">
                        <form onSubmit={handleSubmit}>

                                                 <span class="cr-bill-wrap cr-bill-half">
                                                    <label>First Name*</label>
                                                    <input ttype="text"
                                                    name="name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    placeholder="Enter your first name"
                                                    required/>
                                                      {errors.name && <span className="error">{errors.name}</span>}
                                                   </span>
                         
                          <div class="cr-bill-wrap cr-bill-half">
                            <label>Email*</label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              placeholder="Enter your email"
                              required
                            />
                            {errors.email && <span className="error">{errors.email}</span>}
                          </div>
                          <div class="cr-bill-wrap cr-bill-half">
                            <label>Phone*</label>
                            <input
                              type="text"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="Enter your phone number"
                              required
                            />
                            {errors.phone && <span className="error">{errors.phone}</span>}
                          </div>
                          <div class="cr-bill-wrap cr-bill-half">
                            <label>City*</label>
                            <span class="cr-bl-select-inner">
                            <select name="city" class="cr-bill-wrap cr-bill-half">
                              <option selected disabled>City</option>
                              <option value="City1">City 1</option>
                              <option value="City2">City 2</option>
                            </select>
                            </span>
                          </div>
                          <div class="cr-bill-wrap cr-bill-half">
                            <label>Post Code</label>
                            <input type="text" name="postalcode" placeholder="Post Code" />
                          </div>
                          <div class="cr-bill-wrap cr-bill-half">
                            <label>Country*</label>
                            <span class="cr-bl-select-inner">
                            <select name="country" class="cr-bill-select">
                              <option selected disabled>Country</option>
                              <option value="Country1">Country 1</option>
                              <option value="Country2">Country 2</option>
                            </select>
                            </span>
                          </div>
                          <div className="cr-check-order-btn">
                            <button type="submit" className="cr-button mt-30">Place Order</button>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="cr-checkout-rightside col-lg-4 col-md-12">
              <div className="cr-sidebar-wrap">
                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Summary</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-checkout-summary">
                      <div>
                        <span className="text-left">Sub-Total</span>
                        <span className="text-right">${getTotalPrice()}</span>
                      </div>
                      <div>
                        <span className="text-left">Delivery Charges</span>
                        <span className="text-right">$80.00</span>
                      </div>
                      <div className="cr-checkout-summary-total">
                        <span className="text-left">Total Amount</span>
                        <span className="text-right">${getTotalPrice() + 30}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Delivery Method</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-checkout-del">
                      <div className="cr-del-desc">Please select the preferred shipping method to use on this order.</div>
                      <form>
                        <div className="cr-del-option">
                          <div>
                            <input type="radio" id="del1" name="deliveryMethod" value="Free" checked />
                            <label htmlFor="del1">Free Shipping - $0.00</label>
                          </div>
                          <div>
                            <input type="radio" id="del2" name="deliveryMethod" value="Flat" />
                            <label htmlFor="del2">Flat Rate - $5.00</label>
                          </div>
                        </div>
                        <div className="cr-del-comment">
                          <label htmlFor="comments">Add Comments About Your Order</label>
                          <textarea id="comments" name="comments" placeholder="Comments"></textarea>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Payment Method</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-checkout-pay">
                      <div className="cr-pay-desc">Please select the preferred payment method to use on this order.</div>
                      <form className="payment-options">
                        <div className="cr-pay-option">
                          <div>
                            <input type="radio" id="pay1" name="paymentMode" value="Cash" checked />
                            <label htmlFor="pay1">Cash On Delivery</label>
                          </div>
                          <div>
                            <input type="radio" id="pay2" name="paymentMode" value="UPI" />
                            <label htmlFor="pay2">UPI</label>
                          </div>
                          <div>
                            <input type="radio" id="pay3" name="paymentMode" value="BankTransfer" />
                            <label htmlFor="pay3">Bank Transfer</label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="cr-sidebar-block">
                  <div className="cr-sb-title">
                    <h3 className="cr-sidebar-title">Payment Methods</h3>
                  </div>
                  <div className="cr-sb-block-content">
                    <div className="cr-check-pay-img-inner">
                      <div className="cr-check-pay-img">
                        <img src="assets/img/banner/payment.png" alt="payment" />
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Checkout;
