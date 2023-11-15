import React from 'react';
import { Navigate, Route, Routes } from 'react-router';

const isAuthenticated = true; 

const ProtectedRoute = ({ element, ...rest }) => {
  return isAuthenticated ? (
    <Route {...rest} element={element} />
  ) : (
    <Navigate to="/login" replace={true} />
  );
};

export default ProtectedRoute;