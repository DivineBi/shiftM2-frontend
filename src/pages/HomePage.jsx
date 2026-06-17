import React from "react";
import HeroBanner from "../components/home/HeroBanner";
import PopularProducts from "../components/home/PopularProducts";
import "../styles/home.css";

export default function HomePage() {
  return (
    <>
      <main className="home-container">

        <HeroBanner />


        <section className="home-section">
          <h2 className="home-section-title">Produits populaires</h2>
          <PopularProducts />
        </section>

      </main>

    </>
  );
}

