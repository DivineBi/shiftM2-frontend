import { useEffect, useState } from "react";
import axios from "axios";

export default function useProducts() {

  // Initialisation des filtres
  const [filters, setFilters] = useState({
    color: "",
    sizeFilter: "",
    priceMin: "",
    priceMax: ""
  });

  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadProducts();
  }, [page, filters]);

  const loadProducts = async () => {
    setLoading(true);
    try {
      const response = await axios.get("/api/products", {
        params: {
          page,
          size: 12,
          search: "",
          color: filters.color,
          sizeFilter: filters.sizeFilter,
          priceMin: filters.priceMin,
          priceMax: filters.priceMax
        }
      });

      setProducts(response.data.content);
      setTotalPages(response.data.totalPages);

    } catch (error) {
      console.error("Erreur chargement produits :", error);
    } finally {
      setLoading(false);
    }
  };

  return {
    products,
    totalPages,
    page,
    setPage,
    filters,
    setFilters,
    loading
  };
}
