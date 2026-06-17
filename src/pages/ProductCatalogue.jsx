import React from "react";
import SidebarFilters from "../components/SidebarFilters";
import ProductGrid from "../components/ProductGrid";
import Pagination from "../components/Pagination";
import HeaderSearch from "../components/HeaderSearch";
import useProducts from "../hooks/useProducts";

const ProductCatalogue = () => {
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
      <HeaderSearch filters={filters} setFilters={setFilters} />

      <div className="catalogue-content">
        <SidebarFilters filters={filters} setFilters={setFilters} />

        <div className="catalogue-main">
          {loading ? (
            <p>Chargement...</p>
          ) : (
            <>
              <ProductGrid products={products} />
              <Pagination page={page} totalPages={totalPages} setPage={setPage} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCatalogue;
