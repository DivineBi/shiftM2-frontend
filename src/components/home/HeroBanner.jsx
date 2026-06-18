import React from "react";
import { Link } from "react-router-dom";
import Particles from "@tsparticles/react";
import "../../styles/home.css";

export default function HeroBanner() {

  return (
    <div className="hero">
      <div className="hero-overlay"></div>

      
      {/* Contenu du Hero */}
      <div className="hero-content">
        <h1 className="hero-title">Découvrez nos meilleures offres</h1>

        <h2 className="hero-logo-text">Shift</h2>
       
       <div className="hero-divider"></div>

        <p className="hero-subtitle">Smart Pricing. Maximum Value.</p>

        <Link to="/boutique" className="hero-btn">
          Voir le catalogue
        </Link>
      </div>
    </div>
  );
}
