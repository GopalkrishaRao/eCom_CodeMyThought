import React from 'react';
import './css/card.css';

const Card = () => {
  return (
    <div className="card">
      <figure className="card-figure">
        <img src={"https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"} alt="Shoes" className="card-image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">Shoes!</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions">
          <button className="btn btn-secondary">Save for Later</button>
          <button className="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
