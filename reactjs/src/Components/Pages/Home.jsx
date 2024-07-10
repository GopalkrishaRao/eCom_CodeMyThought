import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
import { useCart } from "../Contexts/CartContext";
import { useProducts } from "../Contexts/ProductContext";
import { GridListView } from "../sharedComponents/GridListView";
import SideBar from "../sharedComponents/SideBar";
import Pagination from "../sharedComponents/Pagination";
import Banner from "../sharedComponents/Banner";

const Home = () => {
  const { addToCart } = useCart();
  const { products } = useProducts();
  const navigate = useNavigate();

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

  const handleAddToCart = (products) => {
    console.log("Adding to cart:", products);
    addToCart(products);
    toast.success(`${products.name} added to cart!`);
  };

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  const applyFilters = (filters) => {
    let filteredResults = [...products];

    // Apply category filter
    if (filters.category.length > 0) {
      filteredResults = filteredResults.filter((products) =>
        filters.category.includes(products.category)
      );
    }

    // Apply price range filter
    filteredResults = filteredResults.filter(
      (products) =>
        products.price >= filters.priceRange[0] &&
        products.price <= filters.priceRange[1]
    );

    setFilteredProducts(filteredResults);
  };

  return (
    <>
      <Banner />
      <section className="section-shop padding-tb-100">
        <div className="container">
          <div className="row">
            <SideBar applyFilters={applyFilters} />
            <div
              className="col-lg-9 col-12 md-30"
              data-aos="fade-up"
              data-aos-duration="2000"
              data-aos-delay="600"
            >
              <GridListView className="row" />
              <div className="row col-100 mb-minus-24">
                {filteredProducts.map((product) => (
                  <div
                    className="col-xxl-3 col-xl-4 col-6 cr-product-box mb-24"
                    key={product.id}
                  >
                    <div className="cr-product-card">
                      <div className="cr-product-image">
                        <div className="cr-image-inner zoom-image-hover">
                          <img
                            src={product.image}
                            alt={product.name}
                            onClick={() => handleProductClick(product.id)}
                            style={{ cursor: "pointer" }}
                          />
                        </div>
                        <div className="cr-side-view">
                          {/* Onclik functionality to add to wachlist and quick view */}
                          {/* <Link className="wishlist">
                            <i className="ri-heart-line"></i>
                          </Link>
                          <Link
                            className="model-oraganic-product"
                            data-bs-toggle="modal"
                            role="button"
                          >
                            <i className="ri-eye-line"></i>
                          </Link> */}
                        </div>
                        {/* <Link
                          className="cr-shopping"
                          to=""
                          onClick={() => handleAddToCart(product)}
                        >
                          <i className="ri-shopping-bag-line"></i>
                        </Link> */}
                      </div>
                      <div className="cr-product-details">
                        <div className="cr-brand">
                          <p
                            onClick={() => handleProductClick(product.id)}
                            style={{ cursor: "pointer" }}
                          >
                            {product.name}
                          </p>
                          <div className="cr-star">
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-fill"></i>
                            <i className="ri-star-line"></i>
                            <p>(4.5)</p>
                          </div>
                        </div>
                        <p onClick={() => handleProductClick(product.id)}>
                          <Link className="title">{product.name}</Link>
                        </p>
                        <p className="cr-price">
                          <span className="new-price">${product.price}</span>
                        </p>
                        <button
                          className="cr-button"
                          style={{ margin: "10px auto" }}
                          onClick={() => handleAddToCart(product)}
                        >
                          Add to cart
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <Pagination />
            </div>
          </div>
        </div>
      </section>
      <ToastContainer />
    </>
  );
};

export default Home;
