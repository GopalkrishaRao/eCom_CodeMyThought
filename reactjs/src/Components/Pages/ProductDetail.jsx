import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
// Ensure any other custom CSS files are imported as well

import { useParams } from 'react-router-dom';
import { useCart } from '../CartContext';
// import SideBar from './SideBar';
// import axios from 'axios';

import { useProducts } from '../Provider/ProductProvider';



const ProductDetail = () => {

  const {products} = useProducts();

  
  const { id } = useParams();


  const [product, setProduct] = useState(null);
  const { addToCart, incrementItem, decrementItem } = useCart();
  const [quantity, setQuantity] = useState(1);

  useEffect(()=>{
    setProduct(products);
  }, [products])

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
    toast.success(`${product.name} added to cart!`);
  };

  const handleIncrement = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    incrementItem(product.id);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      decrementItem(product.id);
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
                  <h2>Product</h2>
                  <span><a href="/">Home</a> - product</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-product padding-t-100">
        <div className="container">
          <div className="row">
            {/* <SideBar /> */}
            <div className="col-lg-9 col-12 md-30" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <div className="row mb-minus-24">
                <div className="col-md-6 col-12 mb-24">
                  <div className="vehicle-detail-banner banner-content clearfix">
                    <div className="banner-slider">
                      <div className="slider slider-for">
                        <div className="slider-banner-image">
                          <div className="zoom-image-hover">
                            <img src={product.image} alt={product.name} className="product-image" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-12 mb-24">
                  <div className="cr-size-and-weight-contain">
                    <h2 className="heading">{product.name}</h2>
                    <p>{product.description}</p>
                  </div>
                  <div className="cr-size-and-weight">
                    <div className="cr-review-star">
                      <div className="cr-star">
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                        <i className="ri-star-fill"></i>
                      </div>
                      <p>(75 Review)</p>
                    </div>
                    <div className="list">
                      <ul>
                        <li><label>Brand <span>:</span></label>ESTA BETTERU CO</li>
                        <li><label>Flavour <span>:</span></label>Super Saver Pack</li>
                        <li><label>Diet Type <span>:</span></label>Vegetarian</li>
                        <li><label>Weight <span>:</span></label>200 Grams</li>
                        <li><label>Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                        <li><label>Info <span>:</span></label>Egg Free, Allergen-Free</li>
                        <li><label>Items <span>:</span></label>1</li>
                      </ul>
                    </div>
                    <div className="cr-product-price">
                      <span className="new-price">RS{product.price}</span>
                      <span className="old-price">$123.25</span>
                    </div>

                    <div className="cr-add-card">
                      <div className="cr-qty-main">
                        <input type="text" placeholder="." value={quantity} readOnly className="quantity" />
                        <button type="button" id="add" className="plus" onClick={handleIncrement}>+</button>
                        <button type="button" id="sub" className="minus" onClick={handleDecrement}>-</button>
                      </div>
                      <div className="cr-add-button">
                        <button type="button" className="cr-button cr-shopping-bag" onClick={handleAddToCart}>Add to cart</button>
                      </div>
                      <div className="cr-card-icon">
                        {/* on click function to quick view and add to wishlist */}
                        <Link className="wishlist">
                          <i className="ri-heart-line"></i>
                        </Link>
                        <Link className="model-oraganic-product" data-bs-toggle="modal"  role="button">
                          <i className="ri-eye-line"></i>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="cr-paking-delivery">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="description-tab" data-bs-toggle="tab"
                      data-bs-target="#description" type="button" role="tab" aria-controls="description"
                      aria-selected="true">Description</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="additional-tab" data-bs-toggle="tab"
                      data-bs-target="#additional" type="button" role="tab" aria-controls="additional"
                      aria-selected="false">Information</button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button className="nav-link" id="review-tab" data-bs-toggle="tab" data-bs-target="#review"
                      type="button" role="tab" aria-controls="review" aria-selected="false">Review</button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div className="tab-pane fade show active" id="description" role="tabpanel"
                    aria-labelledby="description-tab">
                    <div className="cr-tab-content">
                      <div className="cr-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                          sapiente odio, error dolore vero temporibus consequatur, nobis veniam odit
                          dignissimos consectetur quae in perferendis doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                      </div>
                      <h4 className="heading">Packaging & Delivery</h4>
                      <div className="cr-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero
                          perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti
                          ratione alias odio, error dolore temporibus consequatur, nobis veniam odit
                          laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="additional" role="tabpanel" aria-labelledby="additional-tab">
                    <div className="cr-tab-content">
                      <div className="cr-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente doloribus debitis corporis, eaque dicta, repellat amet, illum adipisci vel perferendis dolor! Quis vel consequuntur repellat distinctio rem. Corrupti ratione alias odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                      </div>
                      <div className="cr-additional-info">
                        <ul>
                          <li><label>Brand <span>:</span></label>ESTA BETTERU CO</li>
                          <li><label>Flavour <span>:</span></label>Super Saver Pack</li>
                          <li><label>Diet Type <span>:</span></label>Vegetarian</li>
                          <li><label>Weight <span>:</span></label>200 Grams</li>
                          <li><label>Speciality <span>:</span></label>Gluten Free, Sugar Free</li>
                          <li><label>Info <span>:</span></label>Egg Free, Allergen-Free</li>
                          <li><label>Items <span>:</span></label>1</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="review" role="tabpanel" aria-labelledby="review-tab">
                    <div className="cr-tab-content">
                      <div className="cr-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error in vero sapiente odio, error dolore temporibus consequatur, nobis veniam odit laborum dignissimos consectetur quae vero in perferendis provident quis.</p>
                      </div>
                      <div className="cr-review-form">
                        <form action="#">
                          <div className="row">
                            <div className="col-12">
                              <label>Your review *</label>
                              <textarea name="review" id="review" cols="30" rows="4" required></textarea>
                            </div>
                            <div className="col-md-6 col-12">
                              <label>Name *</label>
                              <input type="text" required />
                            </div>
                            <div className="col-md-6 col-12">
                              <label>Email *</label>
                              <input type="email" required />
                            </div>
                            <div className="col-12">
                              <button type="submit" className="cr-button">Submit</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ToastContainer />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductDetail;
