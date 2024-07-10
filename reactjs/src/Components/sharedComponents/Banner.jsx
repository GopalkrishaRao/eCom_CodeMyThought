import React from "react";
import { Link } from "react-router-dom";

export default function Banner() {
  return (
    <>
      <section className="section-breadcrumb">
        <div className="cr-breadcrumb-image">
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <div className="cr-breadcrumb-title">
                  <h2>Shop</h2>
                  <span>
                    <Link to="/">Home</Link> - Shop
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
