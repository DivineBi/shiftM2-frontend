// src/api/productApi.js

import axios from "axios";

const API = process.env.REACT_APP_API_URL; // https://shiftm2-backend.onrender.com

export const getProducts = async (params) => {
  const response = await axios.get(`${API}/api/products`, { params });
  return response.data;
};

export const getProductById = async (id) => {
  const response = await axios.get(`${API}/api/products/${id}`);
  return response.data;
};

export const getDiscountedProducts = async (params) => {
  const response = await axios.get(`${API}/api/products/offers`, { params });
  return response.data;
};

export const getPopularProducts = async () => {
  const response = await axios.get(`${API}/api/products/popular`);
  return response.data;
};


