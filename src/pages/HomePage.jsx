import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "../styles/home.css";

export default function HomePage() {
  return (
    <>
      <main className="home">

        {/* SECTION HERO */}
        <section className="hero">
          <h1>Découvrez nos meilleures offres</h1>
          <p>Smart Pricing. Maximum Value.</p>
          <button className="cta">Voir le catalogue</button>
        </section>

        {/* SECTION PRODUITS (placeholder) */}
        <section className="product-preview">
          <h2>Produits populaires</h2>

          {/* ProductCard */}
          <div className="product-grid">
            <div className="placeholder-card">Produit 1</div>
            <div className="placeholder-card">Produit 2</div>
            <div className="placeholder-card">Produit 3</div>
          </div>
        </section>

      </main>

    </>
  );
}

