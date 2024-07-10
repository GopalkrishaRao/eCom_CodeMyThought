import React, { useState } from "react";
import { Link } from "react-router-dom";

const SideBar = ({ applyFilters }) => {
  const [filters, setFilters] = useState({
    category: [],
    priceRange: [0, 100000],
  });

  const handleCategoryChange = (e) => {
    const { id, checked } = e.target;
    setFilters((prevFilters) => {
      const newCategories = checked
        ? [...prevFilters.category, id]
        : prevFilters.category.filter((category) => category !== id);
      return { ...prevFilters, category: newCategories };
    });
  };

  const handlePriceChange = (e) => {
    const { id, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      priceRange:
        id === "minPrice"
          ? [value, prevFilters.priceRange[1]]
          : [prevFilters.priceRange[0], value],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyFilters(filters);
  };

  return (
    <div
      className="col-lg-3 col-12 md-30"
      data-aos="fade-up"
      data-aos-duration="2000"
      data-aos-delay="400"
    >
      <form onSubmit={handleSubmit}>
        <div className="cr-shop-sideview">
          <div className="cr-shop-categories">
            <h4 className="cr-shop-sub-title">Category</h4>
            <div className="cr-checkbox">
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="apple"
                  onChange={handleCategoryChange}
                />
                <label htmlFor="apple">Apple</label>
                <span>[20]</span>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="samsung"
                  onChange={handleCategoryChange}
                />
                <label htmlFor="samsung">Samsung</label>
                <span>[54]</span>
              </div>
              <div className="checkbox-group">
                <input
                  type="checkbox"
                  id="1plus"
                  onChange={handleCategoryChange}
                />
                <label htmlFor="1plus">1+</label>
                <span>[64]</span>
              </div>
            </div>
          </div>
          <div className="cr-shop-price">
            <h4 className="cr-shop-sub-title">Price</h4>
            <div className="price-range-slider">
              <div id="slider-range" className="range-bar"></div>
              <p className="range-value">
                <label>Min Price :</label>
                <input
                  type="number"
                  id="minPrice"
                  value={filters.priceRange[0]}
                  onChange={handlePriceChange}
                />
              </p>
              <p className="range-value">
                <label>Max Price :</label>
                <input
                  type="number"
                  id="maxPrice"
                  value={filters.priceRange[1]}
                  onChange={handlePriceChange}
                />
              </p>
              <button type="submit" className="cr-button">
                Filter
              </button>
            </div>
          </div>
          <div className="cr-shop-color">
            <h4 className="cr-shop-sub-title">Colors</h4>
            <div className="cr-checkbox">
              <div className="checkbox-group">
                <input type="checkbox" id="blue" />
                <label htmlFor="blue">Blue</label>
                <span className="blue"></span>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="yellow" />
                <label htmlFor="yellow">Yellow</label>
                <span className="yellow"></span>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="red" />
                <label htmlFor="red">Red</label>
                <span className="red"></span>
              </div>
            </div>
          </div>
          <div className="cr-shop-weight">
            <h4 className="cr-shop-sub-title">Weight</h4>
            <div className="cr-checkbox">
              <div className="checkbox-group">
                <input type="checkbox" id="2kg" />
                <label htmlFor="2kg">2kg Pack</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="20kg" />
                <label htmlFor="20kg">20kg Pack</label>
              </div>
              <div className="checkbox-group">
                <input type="checkbox" id="30kg" />
                <label htmlFor="30kg">30kg pack</label>
              </div>
            </div>
          </div>
          <div className="cr-shop-tags">
            <h4 className="cr-shop-sub-title">Tags</h4>
            <div className="cr-shop-tags-inner">
              <ul className="cr-tags">
                <li>
                  <Link to="/">Vegetables</Link>
                </li>
                <li>
                  <Link to="/">Juice</Link>
                </li>
                <li>
                  <Link to="/">Food</Link>
                </li>
                <li>
                  <Link to="/">Dry Fruits</Link>
                </li>
                <li>
                  <Link to="/">Vegetables</Link>
                </li>
                <li>
                  <Link to="/">Juice</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default SideBar;
