import React from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products }) {
  if (!products || products.length === 0) {
    return <p>Aucun produit trouvé.</p>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.idProduct} product={product} />
      ))}
    </div>
  );
}
