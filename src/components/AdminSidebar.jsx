// src/components/AdminSidebar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/dashboard.css";

export default function AdminSidebar() {
  return (
    <aside className="admin-sidebar">
      <h3 className="sidebar-title">Admin</h3>

      <nav className="sidebar-nav">
        <Link to="/admin/dashboard">Dashboard</Link>
        <Link to="/admin/users">Utilisateurs</Link>
        <Link to="/admin/audit">Logs d’audit</Link>
      </nav>
    </aside>
  );
}
