// src/pages/Admin/Dashboard.jsx

import React from "react";
import AdminSidebar from "../../components/AdminSidebar";
import StatCard from "../../components/StatCard";
import "../../styles/dashboard.css";

export default function Dashboard() {
  return (
    <div className="admin-layout">

      {/* Sidebar (mobile-first) */}
      <AdminSidebar />

      <main className="admin-content">

        <h1 className="admin-title">Dashboard Admin</h1>

        {/* Cartes statistiques */}
        <section className="stats-grid">
          <StatCard title="Utilisateurs" value="128" icon="ri-user-3-line" />
          <StatCard title="Produits" value="56" icon="ri-shopping-bag-3-line" />
          <StatCard title="Commandes" value="342" icon="ri-file-list-3-line" />
          <StatCard title="Logs d’audit" value="1 204" icon="ri-shield-check-line" />
        </section>

        {/* Activité récente */}
        <section className="admin-section">
          <h2>Activité récente</h2>
          <div className="admin-card">
            <p>• Admin a modifié un utilisateur</p>
            <p>• Nouveau produit ajouté</p>
            <p>• 3 commandes validées</p>
          </div>
        </section>

        {/* Actions rapides */}
        <section className="admin-section">
          <h2>Actions rapides</h2>
          <div className="quick-actions">
            <button className="quick-btn">Ajouter un produit</button>
            <button className="quick-btn">Gérer les utilisateurs</button>
            <button className="quick-btn">Voir les logs</button>
          </div>
        </section>

      </main>
    </div>
  );
}
