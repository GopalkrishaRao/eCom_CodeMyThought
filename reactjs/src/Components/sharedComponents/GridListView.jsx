import React from 'react';
import { Link } from 'react-router-dom';


export const GridListView = () => {
  return (
   <>
    <div className="col-12">
                  <div className="cr-shop-bredekamp">
                    <div className="cr-toggle">
                      <Link  className="gridCol active-grid">
                        <i className="ri-grid-line"></i>
                      </Link>
                      <Link  className="gridRow">
                        <i className="ri-list-check-2"></i>
                      </Link>
                    </div>
                    <div className="center-content">
                      <span>We found following items for you!</span>
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
   </>
  )
}
