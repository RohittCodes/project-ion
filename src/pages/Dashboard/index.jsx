import AdminApprovalCard from "../../components/admin-components/AdminApprovalCard";
import AdminCards from "../../components/admin-components/AdminCards";
import ProjectSumissionGraph from "../../components/admin-components/ProjectSumissionGraph";
import "./index.css";

const Dashboard = () => {
  return (
    <div className="flex flex-col w-full m-4 gap-4">
      <div className="flex flex-row text-text-primary space-x-6">
        <AdminCards />
        <AdminCards />
        <AdminCards />
        <AdminCards />
      </div>
      <div className="flex flex-row justify-between gap-4">
        <div className="flex-1 space-y-4">
          <AdminApprovalCard />
          <AdminApprovalCard />
        </div>
        <div className="flex flex-col w-2/5 gap-4">
          <ProjectSumissionGraph />
          <ProjectSumissionGraph />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
