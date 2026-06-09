// src/api/adminUserApi.js

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export async function getUsers(params) {
  const res = await axios.get(`${API}/admin/users`, { params });
  return res.data;
}
