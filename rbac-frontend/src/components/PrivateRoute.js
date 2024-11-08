import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children, role }) => {
  const token = localStorage.getItem('token');
  const userRole = localStorage.getItem('role');

  const normalizedUserRole = userRole ? userRole.replace('ROLE_', '').trim().toUpperCase() : '';
  const normalizedRequiredRole = role.trim().toUpperCase();

  // Check if token exists and if the user role matches the required role for the route
  if (!token || normalizedUserRole !== normalizedRequiredRole) {
    console.log(`Redirecting: User role (${normalizedUserRole}) does not match required role (${normalizedRequiredRole})`);
    return <Navigate to="/login" />;
  }
  console.log("Access granted");
  
  return children;
};

export default PrivateRoute;
