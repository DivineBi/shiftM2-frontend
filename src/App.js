import './App.css';
import { Routes, Route, Navigate } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import HomePage from "./pages/HomePage";
import Boutique from "./pages/Boutique";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Dashboard from "./pages/Admin/Dashboard";
import UsersPage from "./pages/Admin/UsersPage";
import Arrivals from "./pages/Arrivals";
import OffersPage from "./pages/OffersPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import AuditLogPage from "./pages/Admin/AuditLogPage";
import ProtectedRoute from "./components/ProtectedRoute";
function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/boutique" element={<Boutique />} />
          <Route path="/nouveautes" element={<Arrivals />} />
          <Route path="/offres" element={<OffersPage />} />
          <Route path="/product/:id" element={<ProductDetailPage />} />

          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />

          <Route
            path="/admin/dashboard"
            element={
              <ProtectedRoute adminOnly>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/users"
            element={
              <ProtectedRoute adminOnly>
                <UsersPage />
              </ProtectedRoute>
            }
          />

          <Route
            path="/admin/audit"
            element={
              <ProtectedRoute adminOnly>
                <AuditLogPage />
              </ProtectedRoute>
            }
          />
          <Route path="/shiftM2-frontend" element={<Navigate to="/" replace />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
