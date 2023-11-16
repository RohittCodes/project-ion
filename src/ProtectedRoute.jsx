import { useState } from "react";
import { Navigate, useLocation } from "react-router-dom";
import Cookies from "js-cookie";

export const Protected = ({ children }) => {
  const location = useLocation();

  let logStatus = Cookies.get("Login");
  let authStatus = Cookies.get("Auth");

  console.log(location.pathname);

  if (logStatus) {
    if (authStatus == location.pathname) {
      return children;
    } else {
      return <Navigate to={`${authStatus}`} />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};
