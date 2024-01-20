import { useEffect,useState } from "react";
import Cookies from "js-cookie";
import AdminApprovalCard from "../../../components/admin-components/AdminApprovalCard";
import AdminCards from "../../../components/admin-components/AdminCards";
import CreditsCard from "../../../components/admin-components/CreditsCard";
import ProjectSumissionGraph from "../../../components/admin-components/ProjectSumissionGraph";
import RanksCard from "../../../components/admin-components/RanksCard";
import StudentsCard from "../../../components/admin-components/StudentsCard";
import { Triangle } from "react-loader-spinner";







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
        console.log(college)
        let CollegeProjects = data.filter(each =>each.data.College == college)
        setProject(CollegeProjects)
        console.log(CollegeProjects)
        let data1 = CollegeProjects.filter(each => each.data.Approved == false );
        console.log(data1)

       

        // fetch students
        const url1 = 'http://localhost:3001/students'
        const res1 = await fetch(url1)
        const data3 =await res1.json()
        const collegeStudents = data3.filter(each => each.College == college )
        setStudents(collegeStudents)  
        collegeStudents.sort((a, b) => a.StudentProfileId.localeCompare(b.StudentProfileId))
        let dataObject = []
        data1.map(obj1 =>
          collegeStudents.some(obj2 => {
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
    {display ?
    <div className="flex flex-col w-full m-4 gap-4 " style={{height:'100vh'}}>
      <AdminCards students={students} projects={project} pending={projects} />
      <div className="flex flex-row justify-between gap-4">
        <div className="flex-1 space-y-4 ">
          <AdminApprovalCard data={projects}  />
          <StudentsCard students={students.slice(0,4)} />
        </div>
        <div className="flex flex-col w-5/12 gap-4 ">
          <RanksCard students={students} />
          <ProjectSumissionGraph data={project}  />
          <CreditsCard />
        </div>
      </div>
    </div>: <div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
    <Triangle
            
            height="100"
            width="100"
            color="white"
            ariaLabel="triangle-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
            
            
          />
    </div>
        }
    </>
  );
};

export default Dashboard;
