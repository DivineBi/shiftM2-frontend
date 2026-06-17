// src/pages/Boutique.jsx

import React from "react";
import SidebarFilters from "../components/SidebarFilters";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import useProducts from "../hooks/useProducts";
import "../styles/catalogue.css";

export default function Boutique() {
  const {
    products,
    totalPages,
    page,
    setPage,
    filters,
    setFilters,
    loading
  } = useProducts();

  return (
    <div className="catalogue-container">

      {/* Contenu principal */}
      <div className="catalogue-content">

        {/* Filtres à gauche */}
        <SidebarFilters filters={filters} setFilters={setFilters} />

        {/* Zone produits */}
        <div className="catalogue-main">
          {loading ? (
            <p className="loading">Chargement...</p>
          ) : (
            <>
              <ProductGrid products={products} />

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

      </div>
    </div>
  );
}
