// src/pages/Admin/AuditLogPage.jsx

import React, { useEffect, useState } from "react";
import { getAuditLogs } from "../../api/auditLogApi";
import "../../styles/admin-audit.css";

export default function AuditLogPage() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    load();
  }, [page, search]);

  async function load() {
    const res = await getAuditLogs({ page, size: 20, search });
    setData(res);
  }

  return (
    <div className="admin-page">

      <h1 className="admin-title">Logs d’audit</h1>

      {/* Barre de recherche */}
      <input
        className="admin-search"
        placeholder="Rechercher une action, un admin..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Tableau */}
      {data && (
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Admin</th>
                <th>Action</th>
                <th>Détails</th>
                <th>Date</th>
              </tr>
            </thead>

            <tbody>
              {data.content.map((log) => (
                <tr key={log.id}>
                  <td>{log.adminEmail}</td>
                  <td>{log.action}</td>
                  <td>{log.details}</td>
                  <td>{new Date(log.timestamp).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Pagination */}
      {data && (
        <div className="pagination">
          <button disabled={page === 0} onClick={() => setPage(page - 1)}>
            Précédent
          </button>

          <span>Page {page + 1} / {data.totalPages}</span>

          <button
            disabled={page + 1 >= data.totalPages}
            onClick={() => setPage(page + 1)}
          >
            Suivant
          </button>
        </div>
      )}

    </div>
  );
}
