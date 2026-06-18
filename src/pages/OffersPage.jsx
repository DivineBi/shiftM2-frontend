// src/pages/OffersPage.jsx

import React, { useEffect, useState } from "react";
import { getDiscountedProducts } from "../api/productApi";
import ProductCard from "../components/ProductCard";
import Pagination from "../components/Pagination";
import "../styles/offers-page.css";

export default function OffersPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    loadOffers();
  }, [page]);  // Recharger les offres à chaque changement de page

  const loadOffers = async () => {
    try {
      setLoading(true);

      const data = await getDiscountedProducts({
        page,
        size: 12  // Nombre d'offres par page
      });

      setProducts(data.content);
      setTotalPages(data.totalPages);
    } catch (error) {
      console.error("Erreur lors du chargement des offres :", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <p>Chargement des offres...</p>;

  return (
    <div className="offers-container">
      <h1 className="offers-title"> Offres & Promotions</h1>

      {products.length === 0 ? (
        <p>Aucune promotion disponible pour le moment.</p>
      ) : (
        <>
        <div className="offers-grid">
          {products.map(product => (
            <ProductCard key={product.idProduct} product={product} />
          ))}
        </div>

        {/* Pagination */}
          {totalPages > 1 && (
            <Pagination
              page={page}
              totalPages={totalPages}
              setPage={setPage}
            />
          )}
        </>
      )}
    </div>
  );
}