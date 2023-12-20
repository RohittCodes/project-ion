import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import AdminApprovalCard from "../../../components/admin-components/AdminApprovalCard";
import AdminCards from "../../../components/admin-components/AdminCards";
import CreditsCard from "../../../components/admin-components/CreditsCard";
import ProjectSumissionGraph from "../../../components/admin-components/ProjectSumissionGraph";
import RanksCard from "../../../components/admin-components/RanksCard";
import StudentsCard from "../../../components/admin-components/StudentsCard";





const Dashboard = () => {  
  const [projects,setProjects] = useState()
  const [display,setDisplay] = useState(false)
  const [project,setProject] = useState()
  const [students,setStudents] = useState()

  useEffect(() =>{
    //fetch Projects
    const fetchData = async() =>{
        const url = 'http://localhost:3001/getProjects'
        const res = await fetch(url)
        const data =await res.json()
        let college = Cookies.get('College')
        setProject(data)
        console.log(data)
        let data1 = data.filter(each => each.data.Approved == false);
        console.log(data1)

       

        // fetch students
        const url1 = 'http://localhost:3001/students'
        const res1 = await fetch(url1)
        const data3 =await res1.json()
        setStudents(data3)
        let dataObject = []
        const filtered = data1.map(obj1 =>
          data3.some(obj2 => {
            if(obj2.StudentProfileId === obj1.data.StudentProfileId){
                dataObject.push({
                  StudentId :obj2.StudentId,
                  StudentName : obj2.StudentName,
                  ProjectName : obj1.data.Name,
                  Branch: obj2.StudentBranch,
                  ProjectId:obj1.data.ProjectId
                })
            }
            
          })
        );
        setProjects(dataObject)

        setDisplay(true)
    }
    fetchData()
  },[])

  return (
    <>
    {display &&
    <div className="flex flex-col w-full m-4 gap-4">
      <AdminCards students={students} projects={project} pending={projects} />
      <div className="flex flex-row justify-between gap-4">
        <div className="flex-1 space-y-4">
          <AdminApprovalCard data={projects} />
          <StudentsCard students={students} />
        </div>
        <div className="flex flex-col w-4/12 gap-4">
          <RanksCard />
          <ProjectSumissionGraph  />
          <CreditsCard />
        </div>
      </div>
    </div>}
    </>
  );
};

export default Dashboard;
