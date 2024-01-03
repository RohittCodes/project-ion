import { useState } from 'react';
import { Navigate,useLocation } from 'react-router-dom';
import Cookies from "js-cookie";

export const ProtectedRoute = ({ children }) => {

  let location = useLocation()

  let logStatus = Cookies.get('Login')
  let AuthStatus = Cookies.get('Auth')

  console.log(logStatus)

  if(logStatus){
    if(location.pathname.startsWith(AuthStatus)){
        return children;
    }
    return <Navigate to= {`${AuthStatus}`} />;;
  }else{
    return <Navigate to="/login" />;
  }

};
export default ProtectedRoute