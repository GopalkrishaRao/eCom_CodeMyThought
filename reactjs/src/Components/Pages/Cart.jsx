import React from "react";
import { useCart } from "../Contexts/CartContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, incrementItem, decrementItem, removeItem } = useCart();

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  };
  const handleRemoveItem = (item) => {
    removeItem(item.id);
    toast.success(`${item.name} removed from cart!`);
  };

  return (
    <>
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Cart</h2>
                  <span>
                    {" "}
                    <Link to="/">Home</Link> / Cart
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-cart padding-t-100">
        <div className="container">
          <div className="row d-none">
            <div className="col-lg-12">
              <div
                className="mb-30"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <div className="cr-banner">
                  <h2>Cart</h2>
                </div>
                <div className="cr-banner-sub-title">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore lacus vel facilisis.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <div
                className="cr-cart-content"
                data-aos="fade-up"
                data-aos-duration="2000"
                data-aos-delay="400"
              >
                <div className="row">
                  <form action="#">
                    <div className="cr-table-content">
                      <table>
                        <thead>
                          <tr>
                            <th>Product</th>
                            <th>price</th>
                            <th className="text-center">Quantity</th>
                            <th>Sub Total</th>

                            <th>Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          {cart.length === 0 ? (
                            <p>Your cart is empty</p>
                          ) : (
                            cart.map((item) => (
                              <tr key={item.id}>
                                <td className="cr-cart-name">
                                  <Link>
                                    <img
                                      src={item.image}
                                      alt={item.name}
                                      className="cr-cart-img"
                                    />
                                    {item.name}
                                  </Link>
                                </td>

                                <td className="cr-cart-price">
                                  <span className="amount">{item.price}</span>
                                </td>

                                <td className="cr-cart-qty">
                                  <div className="cart-qty-plus-minus">
                                    <button
                                      type="button"
                                      className="plus"
                                      onClick={() => incrementItem(item.id)}
                                    >
                                      +
                                    </button>
                                    <input
                                      type="text"
                                      placeholder="."
                                      value={item.quantity}
                                      minLength="1"
                                      maxLength="20"
                                      className="quantity"
                                      readOnly
                                    />

                                    <button
                                      type="button"
                                      className="minus"
                                      onClick={() => decrementItem(item.id)}
                                    >
                                      -
                                    </button>
                                  </div>
                                </td>

                                <td className="cr-cart-subtotal">
                                  {item.price * item.quantity}
                                </td>
                                <td className="cr-cart-remove">
                                  <Link>
                                    <i
                                      className="ri-delete-bin-line"
                                      onClick={() => handleRemoveItem(item)}
                                    ></i>
                                  </Link>
                                </td>
                              </tr>
                            ))
                          )}
                        </tbody>
                      </table>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="cr-cart-update-bottom">
                          <Link to="/" className="cr-links"></Link>
                          <Link to="" className="cr-button">
                            {getTotalPrice()}
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="cr-cart-update-bottom">
                          <Link to="/" className="cr-links">
                            Continue Shopping
                          </Link>
                          <Link to="/checkout" className="cr-button">
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
