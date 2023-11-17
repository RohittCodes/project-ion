import { useEffect } from "react";
import { redirect } from "react-router-dom";

import AdminApprovalCard from "../../components/admin-components/AdminApprovalCard";
import AdminCards from "../../components/admin-components/AdminCards";
import CreditsCard from "../../components/admin-components/CreditsCard";
import ProjectSumissionGraph from "../../components/admin-components/ProjectSumissionGraph";
import RanksCard from "../../components/admin-components/RanksCard";
import StudentsCard from "../../components/admin-components/StudentsCard";

import "./index.css";


const Dashboard = () => {  
  useEffect(() =>{
    const status = false
    const Protect = () =>{
      
      if (!status) {
        return redirect("/login");  
      }
      return null;
    };
    
    Protect()
  },[])

  return (
    <div className="flex flex-col w-full m-4 gap-4">
      <AdminCards />
      <div className="flex flex-row justify-between gap-4">
        <div className="flex-1 space-y-4">
          <AdminApprovalCard />
          <StudentsCard />
        </div>
        <div className="flex flex-col w-4/12 gap-4">
          <RanksCard />
          <ProjectSumissionGraph />
          <CreditsCard />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
