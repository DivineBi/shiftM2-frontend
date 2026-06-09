import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [authData, setAuthData] = useState(() => {
    // Chargement depuis localStorage si déjà connecté
    const saved = localStorage.getItem("auth");
    return saved ? JSON.parse(saved) : null;
  });

  function updateAuth(data) {
    setAuthData(data);
    localStorage.setItem("auth", JSON.stringify(data));
  }

  function logout() {
    setAuthData(null);
    localStorage.removeItem("auth");
  }

  return (
    <AuthContext.Provider value={{ authData, setAuthData: updateAuth, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
