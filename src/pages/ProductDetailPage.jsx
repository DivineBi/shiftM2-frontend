// src/pages/ProductDetailPage.jsx

import React, { useEffect, useState, useCallback } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../api/productApi";
import "../styles/product-detail-page.css";

export default function ProductDetailPage() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const loadProduct = useCallback(async () => {
    try {
      const data = await getProductById(id);
      setProduct(data);
    } catch (error) {
      console.error("Erreur lors du chargement du produit :", error);
    } finally {
      setLoading(false);
    }
  }, [id]);
 
  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  if (loading) return <p>Chargement...</p>;
  if (!product) return <p>Produit introuvable.</p>;

  return (
    <div className="product-detail-container">

      <div className="product-detail-left">
        <img src={product.imageUrl} alt={product.name} className="product-detail-image" />

        {product.discountRate > 0 && (
          <div className="product-detail-badge">
            -{product.discountRate}%
          </div>
        )}
      </div>

      <div className="product-detail-right">
        <h1 className="product-detail-title">{product.name}</h1>

        <div className="product-detail-prices">
          <span className="new-price">{product.price} €</span>

          {product.oldPrice && product.oldPrice > product.price && (
            <span className="old-price">{product.oldPrice} €</span>
          )}
        </div>

        <p className="product-detail-description">{product.description}</p>

        <button className="add-to-cart-btn">Ajouter au panier</button>

        {product.priceVariations && product.priceVariations.length > 0 && (
          <div className="price-history">
            <h3>Historique des variations</h3>
            <ul>
              {product.priceVariations.map((v) => (
                <li key={v.idPriceVariation}>
                  <strong>{v.price} €</strong> — {new Date(v.priceDate).toLocaleDateString()}
                  {v.validated ? " ✔" : " ✖"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

    </div>
  );

}
