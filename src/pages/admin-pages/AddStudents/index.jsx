import React, { useState ,useEffect } from 'react';
import { Triangle } from "react-loader-spinner";

import { FiEye } from "react-icons/fi";


const AddStudents = () => {


  const [showPassword, setShowPassword] = useState(false);
  const [count,setCount] = useState(1)
  const [display,setDisplay] = useState(false)
  const [formData, setFormData] = useState({
    StudentName: '',
    StudentId: '',
    StudentYear: '',
    StudentBranch: '',
    StudentSection: '',
    StudentEmail: '',
    StudentPassword: '',
    StudentLinkedin:'',
    College:'',
  });

  useEffect(() =>{
    const fetchData = async() =>{
        const url = 'http://localhost:3001/getStudent'
        const res = await fetch(url)
        const data =await res.json()
        console.log(data)
        setCount(data.length)
        console.log(data.length)
        setDisplay(true)
        console.log(data)
    }
    fetchData()
  },[])


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const submitForm =async e =>{
    e.preventDefault()
    console.log('Form submitted:', formData);
    formData['likes'] = 0
    formData['following'] = []
    formData['followers'] = []
    formData['StudentProfileId'] = "student_"+count
    const url = 'http://localhost:3001/addStudent'
    let requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    };
    const res = await fetch(url, requestOptions);
    
    const data1 = await res.json();
    console.log(data1)
    setFormData({
    StudentName: '',
    StudentId: '',
    StudentYear: '',
    StudentBranch: '',
    StudentSection: '',
    StudentEmail: '',
    StudentPassword: '',
    StudentLinkedin:'',
    College:'',
    })
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
    {display ?
    
    <div className="container mt-5 flex justify-center items-center p-4">
      <form style={{borderWidth:'1px',width:'35%',alignSelf:'center',backgroundSize:'cover',borderRadius:'8px'}} onSubmit={submitForm} className="p-5" >
                    <label  style={{color:'white'}} className="mb-1 mt-3">STUDENT NAME</label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="StudentName" value={formData.StudentName}/>
                    <label style={{color:'white'}} className="mb-1 mt-3">STUDENT ID</label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="StudentId" value={formData.StudentId}/>
                    <label style={{color:'white'}} className="mb-1 mt-3">COLLEGE NAME</label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="College" value={formData.College}/>
                    <label style={{color:'white'}} className="mb-1 mt-3">STUDENT YEAR</label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="StudentYear" value={formData.StudentYear}/>
                    <label style={{color:'white'}} className="mb-1 mt-3">STUDENT BRANCH</label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="StudentBranch" value={formData.StudentBranch}/>
                    <label style={{color:'white'}} className="mb-1 mt-3">STUDENT SECTION</label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="StudentSection" value={formData.StudentSection} />
                    <label style={{color:'white'}} className="mb-1 mt-3">STUDENT EMAIL ID </label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="StudentEmail" value={formData.StudentEmail}/>
                    <label style={{color:'white'}} className="mb-1 mt-3">STUDENT PASSWORD </label>
                    <div style={{display:'flex'}}>
                      <input style={{color:'black',fontWeight:'bolder',width:'90%'}} className="form-control mr-2"  type={showPassword ? 'text' : 'password'} onChange={handleInputChange} name="StudentPassword" value={formData.StudentPassword}/>
                      <button onClick={togglePasswordVisibility} type='button' className='btn btn-outline-danger'>
                        {showPassword ? 'Hide' : 'Show'} 
                      </button>
                    </div>
                    <label style={{color:'white'}} className="mb-1 mt-3">STUDENT  LINKEDIN</label>
                    <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="StudentLinkedin" value={formData.StudentLinkedin}/>
                    <div style={{textAlign:'center'}}>
                      <button type="submit" className="btn btn-outline-info mt-5 ">Submit</button>
                    </div>
                </form>
    </div>:<div style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}}>
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

export default AddStudents;
