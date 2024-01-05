import Cookies from "js-cookie";
import { useEffect } from "react";
import { useState } from "react";
import { Triangle } from "react-loader-spinner";

const Ranking = () =>{
    const [display,setDisplay] = useState(false)
    const [students,setStudents] = useState()
    const [adminStatus,setAdminStatus] = useState(true)
    const [colleges,setColleges] = useState()
    const [status,setStatus] = useState(true)
    const student_id = Cookies.get('student_id')
    


  useEffect(() =>{
    const fetchData = async() =>{
        const url = 'http://localhost:3001/getStudent'
        const url1 = 'http://localhost:3001/getAdmin'
        
        const res = await fetch(url)
        const res1 = await fetch(url1)

        const data =await res.json()
        const data1 = await res1.json()
        let admin = location.pathname.startsWith("/admin")
        setAdminStatus(!admin)


        data1.sort((a,b) =>b.likes - a.likes)
        data.sort((a,b) => b.likes - a.likes)
        setStudents(data)
        setColleges(data1)
        console.log(data1)
        setDisplay(true)
        console.log(data)
    }
    fetchData()
  },[])

    const getStudents = () =>{
        setStatus(true)
    }
    const getColleges = () =>{
        setStatus(false)
    }
    const follow = async(data) =>{
        
        const info = {
            user:data.StudentProfileId,
            self:student_id
        }
        console.log(info)
        const url = 'http://localhost:3001/addfollower'
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(info)
          });
          console.log(response)
          window.location.reload()

    }   



      let Ranking = 4
      
    return(
        <div style={{display:'flex',flexDirection:'column',width:'93%'}}>
            <div style={{display:'flex',justifyContent:'space-around'}}>
                <button  style={{width:'15vw'}} onClick={getStudents}  className="btn btn-outline-warning mt-5 ml-5">Students Ranking</button>
                <button  style={{width:'15vw'}} onClick={getColleges}  className="btn btn-outline-warning mt-5 ml-5">College Ranking</button>
            </div>
            <div className="rounded-lg overflow-hidden h-auto w-full m-4" style={{width:'100%'}}>
            
            {display ?
            <>
                {status ? <table className="table table-bordered table-hover table-dark rounded-xxl" >
                        <thead className="table-header-group text-muted">
                            <tr>
                                <th className="text-center h-12 " >RANKING</th>
                                <th className="text-center h-12">STUDENT ID</th>
                                <th className="text-center h-12">NAME</th>
                                <th className="text-center h-12">BRANCH</th>
                                <th className="text-center h-12">COLLEGE NAME</th>
                                {adminStatus &&<th className="text-center h-12">FOLLOW</th>}
                            </tr>

                        </thead>
                        <tbody className="text-muted">
                        <tr key={students[0].id}>
                                
                                <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/744/744984.png" style={{height:'5vh',width:'16%'}}/></td>    
                                <td className="text-center" style={{width:"16%"}}>{students[0].StudentId}</td>
                                <td className="text-center" style={{width:"16%"}}>{students[0].StudentName}</td>
                                <td className=" text-center" style={{width:"16%"}}>{students[0].StudentBranch}</td>
                                <td className="text-center" style={{width:"16%"}}>{students[0].College}</td>
                                {adminStatus && <td className="text-center" style={{width:"16%"}}><button className="btn btn-close-white" style={{backgroundColor:`${students[0].followers.includes(student_id) ? 'green':'red'}`,color:'white'}} onClick={() =>follow(students[0])} >{students[0].followers.includes(student_id) ? "Following":"Follow"}</button></td>}

                            </tr>
                            <tr key={students[1].id}>
                                
                            <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/7636/7636106.png" style={{height:'5vh',width:'16%'}}/></td>  
                                <td className="text-center" style={{width:"16%"}}>{students[1].StudentId}</td>
                                <td className="text-center" style={{width:"16%"}}>{students[1].StudentName}</td>
                                <td className=" text-center" style={{width:"16%"}}>{students[1].StudentBranch}</td>
                                <td className="text-center" style={{width:"16%"}}>{students[1].College}</td>
                               {adminStatus && <td className="text-center" style={{width:"16%"}}><button className="btn btn-close-white" style={{backgroundColor:`${students[1].followers.includes(student_id) ? 'green':'red'}`,color:'white'}} onClick={() =>follow(students[1])}>{students[1].followers.includes(student_id) ? "Following":"Follow"}</button></td>}
                                
                                
                        
                                
                            </tr>
                            <tr key={students[2].id}>
                                
                            <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/2583/2583434.png" style={{height:'5vh',width:'16%'}}/></td>  
                                <td className="text-center" style={{width:"16%"}}>{students[2].StudentId}</td>
                                <td className="text-center" style={{width:"16%"}}>{students[2].StudentName}</td>
                                <td className=" text-center" style={{width:"16%"}}>{students[2].StudentBranch}</td>
                                <td className="text-center" style={{width:"16%"}}>{students[2].College}</td>       
                                {adminStatus &&<td className="text-center" style={{width:"16%"}}><button className="btn btn-close-white" style={{backgroundColor:`${students[2].followers.includes(student_id) ? 'green':'red'}`,color:'white'}}   onClick={() =>follow(students[2])}>{students[2].followers.includes(student_id) ? "Following":"Follow"}</button></td>}         
                            </tr>
                        {students.slice(3,).map(each =>(
                            <tr key={each.id}>
                                
                                <td className="text-center" style={{width:"16%"}}>{Ranking++}</td>    
                                <td className="text-center" style={{width:"16%"}}>{each.StudentId}</td>
                                <td className="text-center" style={{width:"16%"}}>{each.StudentName}</td>
                                <td className=" text-center" style={{width:"16%"}}>{each.StudentBranch}</td>
                                <td className="text-center" style={{width:"16%"}}>{each.College}</td>
                               {adminStatus && <td className="text-center" style={{width:"16%"}}><button className="btn btn-close-white" style={{backgroundColor:`${each.followers.includes(student_id) ? 'green':'red'}`,color:'white'}} onClick={() =>follow(each)}>{each.followers.includes(student_id) ? "Following":"Follow"}</button></td>}
                            </tr>
                        ))}
                        </tbody>
                </table>:
                <table className="table table-bordered table-hover table-dark rounded-xxl" >
                        <thead className="table-header-group text-muted">
                            <tr>
                                <th className="text-center h-12">RANKING</th>
                                <th className="text-center h-12">COLLEGE NAME</th>
                                <th className="text-center h-12">CITY</th>
                                <th className="text-center h-12">STATE</th>
                                <th className="text-center h-12">EMAIL</th>
                            </tr>

                        </thead>
                        <tbody className="text-muted">
                            <tr key={colleges[0].collegename}>
                                <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/744/744984.png" style={{height:'5vh'}}/></td>    
                                <td className="text-center" style={{width:"20%"}}>{colleges[0].collegename}</td>
                                <td className="text-center" style={{width:"21%"}}>{colleges[0].city}</td>
                                <td className=" text-center" style={{width:"25%"}}>{colleges[0].state}</td>
                                <td className="text-center" style={{width:"20%"}}>{colleges[0].email}</td>
                            </tr>
                            <tr key={colleges[1].collegename}>
                                
                                <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/7636/7636106.png" style={{height:'5vh'}}/></td>    
                                <td className="text-center" style={{width:"20%"}}>{colleges[1].collegename}</td>
                                <td className="text-center" style={{width:"21%"}}>{colleges[1].city}</td>
                                <td className=" text-center" style={{width:"25%"}}>{colleges[1].state}</td>
                                <td className="text-center" style={{width:"20%"}}>{colleges[1].email}</td>
                            </tr>
                            
                            {colleges.slice(3,).map(each =>(
                                <tr key={each.id}>
                                    
                                    <td className="text-center" style={{width:"8%"}}>{Ranking++}</td>    
                                    <td className="text-center" style={{width:"7%"}}>{each.StudentId}</td>
                                    <td className="text-center" style={{width:"21%"}}>{each.StudentName}</td>
                                    <td className=" text-center" style={{width:"25%"}}>{each.StudentBranch}</td>
                                    <td className="text-center" style={{width:"20%"}}>{each.College}</td>
                                    
                            
                                    
                                </tr>
                        ))}
                        </tbody>
                </table>}
                </>:<div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center',height:'65vh'}}>
                <Triangle
                        
                        height="100"
                        width="100"
                        color="yellow"
                        ariaLabel="triangle-loading"
                        wrapperStyle={{}}
                        wrapperClassName=""
                        visible={true}
                        
                        
                    />
                    </div>
                }
            </div>
        </div>
    )
}

export default Ranking