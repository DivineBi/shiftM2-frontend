import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const { authData } = useAuth();

  if (!authData) return <Navigate to="/login" />;

  if (adminOnly && authData.role !== "ADMIN") {
    return <Navigate to="/" />;
  }

  return children;
}
