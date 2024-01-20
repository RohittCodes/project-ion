import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { IoMdNotificationsOutline } from "react-icons/io";
import SearchBar from "./admin-components/SearchBar";
import { GoProject } from "react-icons/go";
import { SlUserFollow } from "react-icons/sl";
import { SlUserFollowing } from "react-icons/sl";
import { FaRankingStar } from "react-icons/fa6";
import { MdOutlineHelpCenter,MdSupportAgent } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  
  
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate()

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const setLogout = () =>{
    Cookies.remove('Login')
    Cookies.remove('Auth')
    
    navigate('/login')
    setIsOpen(!isOpen)
    window.location.reload(false);
    
    
  }

  return (
    <div className="bg-background-main border-border-primary border-b-[1px] text-text-primary">
      <div className="w-full px-2 sm:px-4 lg:px-4">
        <div className="h-16 relative flex items-center justify-between">
          <div className="font-bold text-xl">ProjectIon</div>
          <div className="flex flex-row items-center justify-end gap-4">
            <SearchBar />
            <div>
              <IoMdNotificationsOutline className="text-2xl" />
            </div>
            <div onClick={toggleDropdown}>
              <div className="w-8 h-8 rounded-full border-border-primary border-[1px] bg-background-main cursor-pointer"></div>
            </div>
          </div>
        </div>
        {isOpen && (
          <>
          {isOpen&& 
          <div className=" origin-top-right absolute right-0 top-[48px]  mt-2 mr-3 bg-background-components" style={{borderRadius:'8px',backgroundSize:'cover',borderStyle:'inset',borderWidth:'1px',borderColor:'white',width:'18%'}}>
           <ul>
            <li style={{color:'black',display:'flex'}} className="m-3"> 
              <div className="w-8 h-8 mt-1 rounded-full border-border-primary border-[1px] bg-background-main cursor-pointer"></div>
              <div className="ml-2">
                <p style={{fontSize:'15px',color:'white'}}>R.Uday kiran</p>
                <p style={{fontSize:'13px',color:'white'}}>uuday3804@gmail.com</p>
              </div>
              
            </li>
            <hr style={{backgroundColor:'white'}}/>
            <li style={{display:'flex',color:'white'}} className="m-3 ml-4 cursor-pointer"><FaRankingStar className="mt-1 mr-2"/><p><NavLink to={{pathname: `${location.pathname.startsWith("/admin") ? '/admin/ranking':'student/ranking'}`}}>Ranking</NavLink></p></li>
            {!location.pathname.startsWith("/admin")&&
            <li style={{display:'flex',color:'white'}} className="m-3 ml-4 cursor-pointer"><SlUserFollow className="mt-1 mr-2"/><p>Followers</p></li>}
            {!location.pathname.startsWith("/admin")&&
            <li style={{display:'flex',color:'white'}} className="m-3 ml-4 cursor-pointer"><SlUserFollowing className="mt-1 mr-2"/><p><NavLink to={{pathname: `student/projects`}}>Following</NavLink></p></li>}
            <li style={{display:'flex',color:'white'}} className="m-3 ml-4 cursor-pointer "><GoProject className="mt-1 mr-2"/><p><NavLink to={{pathname: `${location.pathname.startsWith("/admin") ? '/admin/projects':'student/projects'}`}}>Projects</NavLink></p></li>
            <li style={{display:'flex',color:'white'}} className="m-3 ml-4 cursor-pointer "><MdOutlineHelpCenter className="mt-1 mr-2"/><p>Problems</p></li>
            <li style={{display:'flex',color:'white'}} className="m-3 ml-4 cursor-pointer "><RiLockPasswordLine className="mt-1 mr-2"/><p>Reset Password</p></li>
            <li style={{display:'flex',color:'white'}} className="m-3 ml-4 cursor-pointer"><MdSupportAgent className="mt-1 mr-2"/><p>Help</p></li>
            <hr style={{backgroundColor:'white'}}/>
            <li style={{display:'flex',color:'white'}} className="ml-3 mt-2 mb-2 ml-4 cursor-pointer" onClick={setLogout}><CiLogout className="mt-1 mr-2"/>Logout</li>
           </ul>
          </div>}
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
