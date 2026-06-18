// src/api/productApi.js

import axios from "axios";

const API_URL = "/api/products";

export const getProducts = async (params) => {
  const response = await axios.get(API_URL, { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const getDiscountedProducts = async (params) => {
  const response = await axios.get("/api/products/offers", { params });
  return response.data;
};

export const getPopularProducts = async () => {
  const response = await axios.get("/api/products/popular");
  return response.data;
};

