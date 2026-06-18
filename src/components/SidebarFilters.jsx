import React from "react";

export default function SidebarFilters({ filters, setFilters }) {

  const updateFilter = (key, value) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  return (
    <aside className="sidebar-filters">

      <h3 className="filters-title">Filtres</h3>

      {/* Couleur */}
      <div className="filter-group">
        <label>Couleur</label>
        <input
          type="text"
          value={filters.color}
          onChange={(e) => updateFilter("color", e.target.value)}
          placeholder="Rouge, Noir..."
        />
      </div>

      {/* Taille */}
      <div className="filter-group">
        <label>Taille</label>
        <input
          type="text"
          value={filters.sizeFilter}
          onChange={(e) => updateFilter("sizeFilter", e.target.value)}
          placeholder="S, M, L..."
        />
      </div>

      {/* Prix min */}
      <div className="filter-group">
        <label>Prix min</label>
        <input
          type="number"
          value={filters.priceMin}
          onChange={(e) => updateFilter("priceMin", e.target.value)}
          placeholder="0"
        />
      </div>

      {/* Prix max */}
      <div className="filter-group">
        <label>Prix max</label>
        <input
          type="number"
          value={filters.priceMax}
          onChange={(e) => updateFilter("priceMax", e.target.value)}
          placeholder="200"
        />
      </div>

    </aside>
  );
}
