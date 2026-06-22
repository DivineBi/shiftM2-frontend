// src/components/ProductCard.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/product-card.css";

export default function ProductCard({ product }) {
  const {
    name,
    imageUrl,
    price,
    oldPrice,
    discountRate,
  } = product;

  return (
    <div className="product-card">

      {discountRate > 0 && (
        <div className="discount-badge">
          -{discountRate}%
        </div>
      )}

      <Link to={`/product/${product.idProduct}`}>
        <img src={imageUrl} alt={name} className="product-image" />
      </Link>

      <h3 className="product-name">{name}</h3>

      <div className="product-prices">
        <span className="new-price">{price} €</span>

        {oldPrice && oldPrice > price && (
          <span className="old-price">{oldPrice} €</span>
        )}
      </div>
      <button className="add-to-cart-btn">
        Ajouter au panier
      </button>

    </div>
  );
}
