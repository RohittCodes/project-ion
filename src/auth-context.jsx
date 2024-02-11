// Creating Context API for AuthContext
import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [userPath, setUser] = useState(null);

  const login = (user) => {
    setAuth(user);
  };
  const logUser = (user) => {
    setUser(user);
  };

  const logout = () => {
    setAuth(null);
  };

  return (
    // Context provider
    <AuthContext.Provider value={{ auth, login, logout, userPath, logUser }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
