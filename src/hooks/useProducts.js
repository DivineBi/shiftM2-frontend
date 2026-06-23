import { useEffect, useState, useCallback } from "react";
import axios from "axios";

export default function useProducts() {

  const API = process.env.REACT_APP_API_URL || "https://shiftm2-backend.onrender.com";
  
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

    const loadProducts = useCallback(async () => {
    setLoading(true);
    try {
      console.log("API =", API);
      const response = await axios.get(`${API}/api/products`, {
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
  }, [page, filters, API]);
  
  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

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
