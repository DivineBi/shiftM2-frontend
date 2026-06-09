// src/pages/RegisterPage.jsx

import React, { useState } from "react";
import { register } from "../api/authApi";
import { Link } from "react-router-dom";
import "../styles/register.css";
import blackWhiteLogo from "../assets/blackWhiteLogo.png";

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }

    try {
      await register(form);
      setSuccess("Compte créé avec succès. Vous pouvez maintenant vous connecter.");

      // Réinitialisation du formulaire
        setForm({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          confirmPassword: ""
        });
        
    } catch (err) {
      setError("Impossible de créer le compte. Vérifiez les informations.");
    }
  }

  return (
    <div className="register-wrapper">

      <div className="register-card">

        {/* Logo */}
        <img src={blackWhiteLogo} alt="Shift Logo" className="register-logo-img" />

        <h2 className="register-title">Créer un compte</h2>
        <p className="register-subtitle">Rejoignez Shift en quelques secondes</p>

        <form onSubmit={handleSubmit} className="register-form">

          <label>Prénom</label>
          <input
            name="firstName"
            type="text"
            placeholder="Votre prénom"
            value={form.firstName}
            onChange={handleChange}
            required
          />

          <label>Nom</label>
          <input
            name="lastName"
            type="text"
            placeholder="Votre nom"
            value={form.lastName}
            onChange={handleChange}
            required
          />

          <label>Email</label>
          <input
            name="email"
            type="email"
            placeholder="dupont@mail.com"
            value={form.email}
            onChange={handleChange}
            required
          />

          <label>Téléphone</label>
          <input
            name="phone"
            type="text"
            placeholder="06 00 00 00 00"
            value={form.phone}
            onChange={handleChange}
            required
          />

          <label>Mot de passe</label>
          <div className="password-container">
            <input
              name="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••••"
              value={form.password}
              onChange={handleChange}
              required
            />
            <i
              className="ri-eye-line password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          <label>Confirmer le mot de passe</label>
          <div className="password-container">
            <input
              name="confirmPassword"
              type={showConfirm ? "text" : "password"}
              placeholder="••••••••••"
              value={form.confirmPassword}
              onChange={handleChange}
              required
            />
            <i
              className="ri-eye-line password-toggle"
              onClick={() => setShowConfirm(!showConfirm)}
            ></i>
          </div>

          {error && <p className="register-error">{error}</p>}
          {success && <p className="register-success">{success}</p>}

          <button type="submit" className="register-btn">
            Créer mon compte
          </button>
        </form>

        <p className="register-footer-text">
          Déjà un compte ? <Link to="/login">Se connecter</Link>
        </p>

      </div>
    </div>
  );
}
