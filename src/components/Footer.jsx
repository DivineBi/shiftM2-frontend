// src/components/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import fullLogo from "../assets/fullLogo.png";
import "../styles/footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">

        <div className="footer-logo">
          <img src={fullLogo} alt="Shift" />
        </div>

        <div className="footer-section">
          <h4>PLATEFORME</h4>
          <Link to="/catalogue">Catalogue</Link>
          <Link to="/promotions">Promotions</Link>
          <Link to="/about">À propos</Link>
          <Link to="/admin/dashboard">Accès interne</Link>
        </div>

        <div className="footer-section">
          <h4>AIDE</h4>
          <Link to="/faq">FAQ</Link>
          <Link to="/livraison">Livraison</Link>
          <Link to="/retours">Retours</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-section">
          <h4>LÉGAL</h4>
          <Link to="/cgu">CGU</Link>
          <Link to="/confidentialite">Confidentialité</Link>
        </div>

        <div className="footer-section footer-social">
          <h4>SUIVEZ-NOUS</h4>

          <div className="socials">
            <i className="ri-facebook-fill"></i>
            <i className="ri-instagram-line"></i>
            <i className="ri-linkedin-fill"></i>
          </div>

          <p className="copyright">
            © 2026 Shift. Tous droits réservés.
          </p>
        </div>

      </div>
    </footer>
  );
}