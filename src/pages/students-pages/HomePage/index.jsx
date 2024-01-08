import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useAuth } from "../../../AuthContext";
import Graphw from "../components/graphw";
import Profilew from "../components/profilew";
import Studentr from "../components/studentr";
import Projt from "../components/projt";
import Profol from "../components/profol";
import { Triangle } from "react-loader-spinner";



const HomePage = () => {
  let { auth } = useAuth();
  const user = Cookies.get("User");
  const studentId = Cookies.get('student_id')
  const [yourporjects,setYourProjects] = useState([])
  const [followingProjects,setFollowingProjects] = useState([])
  const [status,setStatus] = useState(false)
  useEffect(() =>{
    const fetchData = async() =>{
          const url = 'http://localhost:3001/getProjects'
          const res = await fetch(url)
          const data =await res.json()
          const data1 = data.filter(each => each.data.StudentProfileId === studentId)
          setYourProjects(data1)
          const url1 = 'http://localhost:3001/students'
          const res1 = await fetch(url1)
          const data3 =await res1.json()
          const datafilter = data3.filter(each => each.StudentProfileId == studentId)
          let studentDataFollowing = datafilter[0].following 
          console.log(studentDataFollowing)
          const followingProjects = data.filter(each => studentDataFollowing.includes(each.data.StudentProfileId) && each.data.StudentProfileId != studentId)
          console.log(followingProjects)
          setFollowingProjects(followingProjects)
          setStatus(true)

          
    }
    fetchData()
  },[])
  return (
    <>
    {status ? 
    <div>
      <div
        style={{ width: "100%", padding: "25px" }}
        className="flex text-text-primary"
      >
       
        <div>
          <div>
            <div style={{ display: "flex" }}>
              <Studentr />
              <Graphw />
            </div>
          </div>
        </div>
        <div>
          <Profilew />
        </div>
      </div>
      <div style={{ display: "flex", marginLeft: "25px" }}>
        <Projt projects={yourporjects} />
        <Profol projects={followingProjects}/>
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
    </div>}
    </>
  );
};

export default HomePage;
