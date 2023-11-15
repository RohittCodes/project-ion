import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from "js-cookie";

export const Protected = ({ children }) => {
  
  let logStatus = Cookies.get('Login')
  console.log(logStatus)

  if(logStatus){
    return children;
  }else{
    return <Navigate to="/login" />;
  }
  
};