// src/api/auditLogApi.js

import axios from "axios";

const API = process.env.REACT_APP_API_URL;

export async function getAuditLogs(params) {
  const res = await axios.get(`${API}/admin/audit`, { params });
  return res.data;
}
