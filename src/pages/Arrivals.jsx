import React, { useState } from "react";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import useProducts from "../hooks/useProducts";
import "../styles/arrivals.css";

export default function Arrivals() {
  const [page, setPage] = useState(0);
  const { products, totalPages, loading } = useProducts(page, 12);

  return (
    <div className="arrivals-container">
      <h1 className="arrivals-title">Nouveautés</h1>

      {loading ? (
        <p>Chargement...</p>
      ) : (
        <>
        <div className="arrivals-grid"> 
        <ProductGrid products={products} />
        </div>

         {totalPages > 1 && (
            <Pagination page={page} totalPages={totalPages} setPage={setPage} />
          )}
        </>
      )}
    </div>
  );
}
