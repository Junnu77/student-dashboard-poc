import React from "react";
import AuthService from "../services/AuthServices";
import { Navigate } from "react-router-dom";
import Login from "../pages/Login";

const ProtectedRoute = ({ children, requireAdmin }) => {
  const user = AuthService.getCurrentUser();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  if (requireAdmin && user.role !== "admin") {
    alert("Unauthorized Access");
    return <Navigate to="/" replace />;
  }
  return children;
};

export default ProtectedRoute;
