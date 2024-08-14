import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = !!sessionStorage.getItem("userId"); // Check if user is logged in

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default ProtectedRoute;
