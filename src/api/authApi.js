// src/api/authApi.js

import axios from "axios";

const API = process.env.REACT_APP_API_URL + "/auth";

export async function register(data) {
  const res = await axios.post(`${API}/register`, data);
  return res.data;
}

export async function login(email, password) {
  const res = await axios.post(`${API}/login`, { email, password });
  return res.data;
}

