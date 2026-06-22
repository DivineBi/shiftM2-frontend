// src/pages/Admin/UsersPage.jsx

import React, { useEffect, useState, useCallback } from "react";
import { getUsers } from "../../api/adminUserApi";
import "../../styles/admin-users.css";

export default function UsersPage() {
  const [data, setData] = useState(null);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState("");
  
  const load = useCallback(async () => {
    const res = await getUsers({ page, size: 10, search });
    setData(res);
  }, [page, search]);
  
  useEffect(() => {
    load();
  }, [load]);

  return (
    <div className="admin-page">

      <h1 className="admin-title">Gestion des utilisateurs</h1>

      <input
        className="admin-search"
        placeholder="Rechercher un utilisateur..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {data && (
        <div className="table-wrapper">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Email</th>
                <th>Nom</th>
                <th>Rôle</th>
                <th>Actif</th>
              </tr>
            </thead>

            <tbody>
              {data.content.map((u) => (
                <tr key={u.id}>
                  <td>{u.email}</td>
                  <td>{u.firstName} {u.lastName}</td>
                  <td>{u.role}</td>
                  <td>{u.active ? "Oui" : "Non"}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

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
