// src/components/StatCard.jsx

import React from "react";
import "../styles/stat-card.css";

export default function StatCard({ title, value, icon }) {
  return (
    <div className="stat-card">
      <i className={`${icon} stat-icon`}></i>
      <div>
        <h3 className="stat-title">{title}</h3>
        <p className="stat-value">{value}</p>
      </div>
    </div>
  );
}
