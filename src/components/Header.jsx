// src/components/Header.jsx

import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import logo from "../assets/simpleLogo.png"; 
import "../styles/header.css";

export default function Header() {
  const { authData, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);  // Ferme le menu si clic en dehors

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-inner">

        {/* Logo à gauche */}
        <Link to="/" className="logo-container">
          <img src={logo} alt="Shift Logo" className="logo" />
        </Link>

        {/* Navigation centrale */}
        <nav className="nav">
          <Link to="/nouveautes">Nouveautés</Link>
          <Link to="/boutique">Boutique</Link>
          <Link to="/offres">Offres</Link>
        </nav>

        {/* Icônes à droite */}
        <div className="icons">

          {/* Barre de recherche */}
          <div className="search-box">
            <input type="text" placeholder="Rechercher..." />
            <i className="ri-search-line"></i>
          </div>

          {/* Icône utilisateur */}
          <div 
            className="user-wrapper"
            ref={menuRef}
            onClick={() => setOpen(!open)}
          >
            {/* Icône utilisateur */}
            <div className="icon-btn">
              <i className="ri-user-line"></i>
            </div>

            {/* Menu si pas connecté */}
            {!authData && open && (
              <div className="user-menu">
                <Link to="/login" className="user-menu-item">Se connecter</Link>
                <Link to="/register" className="user-menu-item">Créer un compte</Link>
              </div>
            )}

            {/* Menu si connecté */}
            {authData && open && (
              <div className="user-menu">
                <p className="user-email">{authData.email}</p>
                <Link to="/profile" className="user-menu-item">Mon profil</Link>
                <button className="logout-btn" onClick={logout}>Déconnexion</button>
              </div>
            )}
          </div>

          {/* Icône panier */}
          <Link to="/cart" className="icon-btn">
            <i className="ri-shopping-cart-line"></i>
          </Link>

        </div>

      </div>
    </header>
  );
}
