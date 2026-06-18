// src/components/Pagination.jsx

import React from "react";
import "../styles/pagination.css";

export default function Pagination({ page, totalPages, setPage }) {

  const goToPage = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
  };

  return (
    <div className="pagination-container">

      <button
        className="pagination-btn"
        disabled={page === 0}
        onClick={() => goToPage(page - 1)}
      >
        Précédent
      </button>

      <span className="pagination-info">
        Page {page + 1} / {totalPages}
      </span>

      <button
        className="pagination-btn"
        disabled={page === totalPages - 1}
        onClick={() => goToPage(page + 1)}
      >
        Suivant
      </button>

    </div>
  );
}
