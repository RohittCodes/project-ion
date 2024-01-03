import React,{useState,useEffect} from "react";
import { Triangle } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import Cookies from "js-cookie";

const StudentsData = () => {

  const [display,setDisplay] = useState(false)
  const [students,setStudents] = useState()

  useEffect(() =>{
    const fetchData = async() =>{
        const url = 'http://localhost:3001/getStudent'
        const res = await fetch(url)
        const data =await res.json()
        let college = Cookies.get('College')
        let students = data.filter(each =>each.College == college)
        students.reverse()
        setStudents(students)
        setDisplay(true)
        console.log(students)
    }
    fetchData()
  },[])

  const tableFields = [
    "S. No.",
    "User id",
    "Full Name",
    "Branch",
    "Section",
    "Roll no",
    "Profile",
  ];
 

  return (
    <div className="flex flex-col w-full text-light gap-2 mx-4 my-2">
      <input
        type="text"
        className="form-control form-control-dark w-80 rounded-md p-2 ms-auto"
        placeholder="Search..."
      />
      {display?
      <div className="rounded-lg bg-dark overflow-hidden h-full w-full">
        <table className="table table-bordered table-hover table-dark rounded-xxl">
          <thead className="table-header-group text-muted">
            <tr>
              {tableFields.map((fields) => (
                <th className="text-center h-12" key={fields}>
                  {fields}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-muted">
            {students.map((data, index) => (
              <tr key={index}>
              {console.log(data.StudentProfileId)}
                <td className="h-8 w-16 text-center" key={index + 1}>
                  {index + 1}
                </td>
                <td className="h-8 w-40 text-center" key={data.StudentProfileId}>
                  {data.StudentProfileId}
                </td>
                <td className="text-center" style={{width:'30%'}} key={data.StudentName}>
                  {data.StudentName}
                </td>
                <td className="h-8 w-32 text-center" key={data.StudentBranch}>
                  {data.StudentBranch}
                </td>
                <td className="h-8 w-24 text-center" key={data.StudentSection}>
                  {data.StudentSection}
                </td>
                <td className="h-8 w-24 text-center" key={data.StudentId}>
                  {data.StudentId}
                </td>
                <td className="h-8 w-24 text-center">
                  <NavLink
                    to={{
                      pathname: `/admin/profile/${data.StudentProfileId}`,
                      state: { data1: data }
                    }}
                    className="btn btn-primary"
                  >
                    Profile
                  </NavLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>:<div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',minHeight:'80vh'}}>
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
    </div>
  );
};

export default StudentsData;
