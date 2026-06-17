// src/pages/LoginPage.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { login } from "../api/authApi";
import { useAuth } from "../context/AuthContext";
import blackWhiteLogo from "../assets/blackWhiteLogo.png";
import "../styles/login.css";

export default function LoginPage() {
  const { setAuthData } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");

    try {
      const data = await login(email, password);

      // Stockage du token et rôle
      setAuthData(data);

      // Redirection selon rôle
      if (data.role === "ADMIN") {
        window.location.href = "/admin/dashboard";
      } else {
        window.location.href = "/";
      }

    } catch (err) {
      console.log("Erreur login :", err);
      setError("Email ou mot de passe incorrect.");
    }
  }

  return (
    <div className="login-wrapper">
      <div className="login-card">

        <img src={blackWhiteLogo} alt="Logo SHIFT" className="login-logo-img" />

        <h2 className="login-title">Connexion à votre compte</h2>

        <form onSubmit={handleSubmit}>

          <label className="login-label">Adresse email</label>
          <input
            type="email"
            className="login-input"
            placeholder="dupont@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label className="login-label">Mot de passe</label>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              className="login-input"
              placeholder="••••••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <i
              className="ri-eye-line password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            ></i>
          </div>

          {error && <p className="login-error">{error}</p>}

          <div className="login-options">
            <label className="remember-me">
              <input type="checkbox" />
              Se souvenir de moi
            </label>

            <Link to="/forgot-password" className="forgot-link">
              Mot de passe ?
            </Link>
          </div>

          <button type="submit" className="login-btn">
            SE CONNECTER
          </button>
        </form>

        <p className="signup-text">Pas encore membre ?</p>
        <Link to="/register" className="signup-link">
          Créer un compte
        </Link>

      </div>
    </div>
  );
}
