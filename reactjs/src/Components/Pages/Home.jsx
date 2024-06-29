import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useCart } from '../CartContext';
import { Link } from 'react-router-dom';
import SideBar from './SideBar';

import { useProducts } from '../Provider/ProductProvider';

const Home = () => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const {products} = useProducts();
  
  // const [products, setProducts] = useState([]);

  // useEffect(() => {
  //   fetchProducts();
  // }, []);

  // const fetchProducts = async () => {
  //   try {
  //     const response = await fetch('http://localhost:3010/api/product');
  //     const data = await response.json();
  //     setProducts(data);
  //     setFilteredProducts(data);
  //   } catch (error) {
  //     console.error('Error fetching products:', error);
  //   }
  // };

  
  const [filteredProducts, setFilteredProducts] = useState(products);

  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.name} added to cart!`);
  };

  const handleImageClick = (id) => {
    navigate(`/product/${id}`);
  };

  const applyFilters = (filters) => {
    let filteredResults = [...products];

    // Apply category filter
    if (filters.category.length > 0) {
      filteredResults = filteredResults.filter(product =>
        filters.category.includes(product.category)
      );
    }

    // Apply price range filter
    filteredResults = filteredResults.filter(product =>
      product.price >= filters.priceRange[0] && product.price <= filters.priceRange[1]
    );

    setFilteredProducts(filteredResults);
  };

  return (
    <>
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Shop</h2>
                  <span><Link to="/">Home</Link> - Shop</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shop padding-tb-100">
        <div className="container">
          <div className="row">
            <SideBar applyFilters={applyFilters} />
            <div className="col-lg-9 col-12 md-30" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="600">
              <div className="row">
                <div className="col-12">
                  <div className="cr-shop-bredekamp">
                    <div className="cr-toggle">
                      {/* on click funtionality to view grid view and list view */}
                      <Link  className="gridCol active-grid">
                        <i className="ri-grid-line"></i>
                      </Link>
                      <Link  className="gridRow">
                        <i className="ri-list-check-2"></i>
                      </Link>
                    </div>
                    <div className="center-content">
                      <span>We found {filteredProducts.length} items for you!</span>
                    </div>
                    <div className="cr-select">
                      <label>Sort By :</label>
                      <select className="form-select" aria-label="Default select example">
                        <option selected>Featured</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                        <option value="5">Five</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row col-100 mb-minus-24">
                {filteredProducts.map((product) => (
                  <div className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24" key={product.id}>
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img
                            src={product.image}
                            alt={product.name}
                            onClick={() => handleImageClick(product.id)}
                            style={{ cursor: 'pointer' }}
                          />
                        </div>
                        <div className="cr-side-view">
                          {/* Onclik functionality to add to wachlist and quick view */}
                          <Link  className="wishlist">
                            <i className="ri-heart-line"></i>
                          </Link>
                          <Link className="model-oraganic-product" data-bs-toggle="modal" role="button">
                            <i className="ri-eye-line"></i>
                          </Link>
                        </div>
                        <Link className="cr-shopping" to="" onClick={() => handleAddToCart(product)}>
                          <i className="ri-shopping-bag-line"></i>
                        </Link>
                      </div>
                      <div className="cr-product-details">
                        <div className="cr-brand">
                          <p to=""  onClick={() => handleImageClick(product.id)}
                            style={{ cursor: 'pointer' }}>{product.name}</p>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                            <p>(4.5)</p>
                          </div>
                        </div>
                        <Link to="/" className="title">Fresh organic apple 1kg simla marming</Link>
                        <p className="text">
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore lacus vel facilisis.
                        </p>
                        <ul className="list">
                          <li><label>Brand :</label>ESTA BETTERU CO</li>
                          <li><label>Diet Type :</label>Vegetarian</li>
                          <li><label>Speciality :</label>Gluten Free, Sugar Free</li>
                        </ul>
                        <p className="cr-price"><span className="new-price">${product.price}</span></p>
                        <ToastContainer />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <nav aria-label="..." className="cr-pagination">
                <ul className="pagination">
                  <li className="page-item disabled">
                    <span className="page-link">Previous</span>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <span className="page-link">1</span>
                  </li>
                  <li className="page-item"><Link to='/' className="page-link" >2</Link></li>
                  <li className="page-item"><Link to='/' className="page-link" >3</Link></li>
                  <li className="page-item">
                    <Link to='/' className="page-link" >Next</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
