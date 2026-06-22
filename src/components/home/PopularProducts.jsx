// src/components/home/PopularProducts.jsx

import React, { useEffect, useState }  from "react";
import ProductCard from "./../ProductCard";
import { getPopularProducts } from "../../api/productApi";


export default function PopularProducts() {
   const [products, setProducts] = useState([]);

  useEffect(() => {
    loadPopular();
  }, []);

  const loadPopular = async () => {
    try {
      const data = await getPopularProducts();
      setProducts(data);
    } catch (error) {
      console.error("Erreur chargement produits populaires :", error);
    }
  };

  return (
    <div className="popular-grid">
      {products.map((p) => (
        <ProductCard key={p.idProduct} product={p} />
      ))}
    </div>
  );
}
