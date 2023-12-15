import React from "react";
import Cookies from "js-cookie";
import { useAuth } from "../../../AuthContext";
const HomePage = () => {
  let {auth} = useAuth()
  const user = Cookies.get('User')
  return <div><h1 style={{color:'white',fontSize:'32px'}}>WELCOME BACK {user}!</h1></div>;
};

export default HomePage;
