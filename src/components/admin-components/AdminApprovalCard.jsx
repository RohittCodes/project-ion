import React, { useEffect,useState } from "react";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import 'animate.css'


const AdminApprovalCard = (props) => {

 let projects = props.data

  const [state,setState] = useState(false)


  const tableFields = [
    "User id",
    "Name",
    "Branch",
    "Project",
    "Approve",
    "Reject",
  ];
  
  const approve = async (data) =>{
    let url = 'http://localhost:3001/updateProject'
    console.log(data)
    const updateData = {
      id: data.ProjectId 
    };
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updateData)
    });
    console.log(response)
    setState(true)
    if (response.ok) {
      alert('Project status updated successfully!');
    } else {
      alert('Error updating project status:', response.statusText);
    }
    window.location.reload();
  }

  return (
    <div className="flex flex-col bg-background-components px-3 py-2 rounded-2xl border-border-secondary border-[1px] animate__animated animate__backInLeft" style={{minHeight:'40vh'}}>
    
      <div className="flex flex-row items-center justify-between px-2 text-2xl font-bold font-mono text-gray-400">
        <div>Approval(s) Pending</div>
        <IoArrowForwardCircleOutline className="cursor-pointer" />
      </div>
      <div className="w-full" >
        {projects.length > 0 ? 
        <table className="w-full border-separate">
          <thead className="table-header-group text-text-disabled">
            <tr>
              {tableFields.map((fields) => (
                <th className="text-center h-12" key={fields}>
                  {fields}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="text-text-disabled">
          {projects.map((data, index) => (
              <tr key={index}>
                <td className="h-8 w-20 text-center" key={data.StudentId}>
                  {data.StudentId}
                </td>
                <td className="text-center w-25" key={data.StudentName}>
                  {data.StudentName}
                </td>
                <td className="h-8 w-20 text-center" key={data.Branch}>
                  {data.Branch}
                </td>
                <td className="h-8 w-32 text-center" key={data.ProjectName}>
                  {data.ProjectName}
                </td>
                <td className="h-8 w-20 text-center" key="Approved">
                  <button className="bg-green-700 rounded-md border-border-secondary border-[1px] px-1 py-[1px]" onClick={() => approve(data)}>
                    Approve
                  </button>
                </td>
                <td className="h-8 w-20 text-center" key="Reject">
                  <button className="bg-red-500 rounded-md border-border-secondary border-[1px] px-1 py-[1px]">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>: <h1 style={{paddingTop:'50px',fontSize:'20px',color:'white',textAlign:'center',fontFamily:'monospace'}} className="mt-5">There are currently no pending projects requiring approval.</h1>}
      </div>
    </div>
  );
};

export default AdminApprovalCard;
