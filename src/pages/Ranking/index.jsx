const Ranking = () =>{
    const studentsArray = [
        { id: 1, name: "John Doe", branch: "CS", ranking: 3, college: "Harvard University" },
        { id: 2, name: "Jane Smith", branch: "CS - AI", ranking: 8, college: "Massachusetts Institute of Technology" },
        { id: 3, name: "Bob Johnson", branch: "CS - DS", ranking: 15, college: "Stanford University" },
        { id: 4, name: "Alice Davis", branch: "CS", ranking: 5, college: "California Institute of Technology" },
        { id: 5, name: "Charlie Brown", branch: "CS - Cyber", ranking: 12, college: "University of California, Berkeley" },
        { id: 6, name: "Emily White", branch: "CS", ranking: 2, college: "Princeton University" },
        { id: 7, name: "David Wilson", branch: "CS - ML", ranking: 18, college: "Carnegie Mellon University" },
        { id: 8, name: "Eva Miller", branch: "CS - SE", ranking: 10, college: "University of California, Los Angeles" },
        { id: 9, name: "Frank Smith", branch: "CS", ranking: 7, college: "Massachusetts Institute of Technology" },
        { id: 10, name: "Grace Johnson", branch: "CS - Web", ranking: 14, college: "Stanford University" },
        { id: 11, name: "Harry Davis", branch: "CS", ranking: 1, college: "California Institute of Technology" },
        { id: 12, name: "Ivy Brown", branch: "CS - AI", ranking: 17, college: "Princeton University" },
        { id: 13, name: "Jack White", branch: "CS - DS", ranking: 6, college: "Carnegie Mellon University" },
        { id: 14, name: "Kim Wilson", branch: "CS - SE", ranking: 11, college: "University of California, Los Angeles" },
        { id: 15, name: "Leo Smith", branch: "CS - ML", ranking: 9, college: "University of Michigan" },
        { id: 16, name: "Mia Johnson", branch: "CS", ranking: 4, college: "Harvard University" },
        { id: 17, name: "Nathan Davis", branch: "CS - Cyber", ranking: 16, college: "University of California, Berkeley" },
        { id: 18, name: "Olivia Brown", branch: "CS - Web", ranking: 13, college: "University of Michigan" },
        { id: 19, name: "Peter Wilson", branch: "CS", ranking: 19, college: "Massachusetts Institute of Technology" },
        { id: 20, name: "Quinn Miller", branch: "CS - SE", ranking: 20, college: "University of California, Los Angeles" },
        { id: 21, name: "Zoe Anderson", branch: "CS - AI", ranking: 20, college: "Stanford University" },
        { id: 22, name: "Vincent Taylor", branch: "CS", ranking: 21, college: "California Institute of Technology" },
        { id: 23, name: "Sophia Rodriguez", branch: "CS - DS", ranking: 22, college: "Harvard University" },
        { id: 24, name: "Oscar Martinez", branch: "CS - Cyber", ranking: 23, college: "University of California, Berkeley" },
        { id: 25, name: "Isabella Turner", branch: "CS", ranking: 24, college: "Princeton University" },
        { id: 26, name: "Lucas Hernandez", branch: "CS - AI", ranking: 25, college: "Massachusetts Institute of Technology" },
        { id: 27, name: "Ava Nelson", branch: "CS - DS", ranking: 26, college: "Stanford University" },
        { id: 28, name: "Gabriel Baker", branch: "CS - SE", ranking: 27, college: "University of California, Los Angeles" },
        { id: 29, name: "Madison Reed", branch: "CS", ranking: 28, college: "Harvard University" },
        { id: 30, name: "Oliver Murphy", branch: "CS - Web", ranking: 29, college: "University of Michigan" },
        { id: 31, name: "Lily Carter", branch: "CS", ranking: 30, college: "California Institute of Technology" },
        { id: 32, name: "Daniel Foster", branch: "CS - AI", ranking: 31, college: "Princeton University" },
        { id: 33, name: "Natalie Evans", branch: "CS - DS", ranking: 32, college: "Stanford University" },
        { id: 34, name: "Christopher King", branch: "CS - SE", ranking: 33, college: "University of California, Los Angeles" },
        { id: 35, name: "Emma White", branch: "CS - ML", ranking: 34, college: "University of Michigan" },
        { id: 36, name: "Leo Mitchell", branch: "CS", ranking: 35, college: "Harvard University" },
        { id: 37, name: "Aria Williams", branch: "CS - Cyber", ranking: 36, college: "University of California, Berkeley" },
        { id: 38, name: "Carter Johnson", branch: "CS - Web", ranking: 37, college: "University of Michigan" },
        { id: 39, name: "Mila Scott", branch: "CS", ranking: 38, college: "Massachusetts Institute of Technology" },
        { id: 40, name: "Logan Perez", branch: "CS - SE", ranking: 39, college: "University of California, Los Angeles" }
      ].sort((a, b) => a.ranking - b.ranking);
      
    let index = 10001
    return(
        <div className="rounded-lg bg-dark overflow-hidden h-full w-full m-4">
            <table className="table table-bordered table-hover table-dark rounded-xxl">
                    <thead className="table-header-group text-muted">
                        <tr>
                            <th className="text-center h-12 " >RANKING</th>
                            <th className="text-center h-12">STUDENT ID</th>
                            <th className="text-center h-12">NAME</th>
                            <th className="text-center h-12">BRANCH</th>
                            <th className="text-center h-12">COLLEGE NAME</th>
                        </tr>

                    </thead>
                    <tbody className="text-muted">
                    <tr key={studentsArray[0].id}>
                            
                            <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/744/744984.png" style={{height:'5vh'}}/></td>    
                            <td className="text-center" style={{width:"7%"}}>{index++}</td>
                            <td className="text-center" style={{width:"21%"}}>{studentsArray[0].name}</td>
                            <td className=" text-center" style={{width:"25%"}}>CSE</td>
                            <td className="text-center" style={{width:"20%"}}>{studentsArray[0].college}</td>
                            
                    
                            
                        </tr>
                        <tr key={studentsArray[1].id}>
                            
                        <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/7636/7636106.png" style={{height:'5vh'}}/></td>  
                            <td className="text-center" style={{width:"7%"}}>{index++}</td>
                            <td className="text-center" style={{width:"21%"}}>{studentsArray[1].name}</td>
                            <td className=" text-center" style={{width:"25%"}}>CSE</td>
                            <td className="text-center" style={{width:"20%"}}>{studentsArray[1].college}</td>
                            
                    
                            
                        </tr>
                        <tr key={studentsArray[2].id}>
                            
                        <td className="text-center" style={{width:"100%",display:'flex',justifyContent:'center'}}><img src="https://cdn-icons-png.flaticon.com/128/2583/2583434.png" style={{height:'5vh'}}/></td>  
                            <td className="text-center" style={{width:"7%"}}>{index++}</td>
                            <td className="text-center" style={{width:"21%"}}>{studentsArray[2].name}</td>
                            <td className=" text-center" style={{width:"25%"}}>CSE</td>
                            <td className="text-center" style={{width:"20%"}}>{studentsArray[2].college}</td>
                            
                    
                            
                        </tr>
                    {studentsArray.slice(3,).map(each =>(
                        <tr key={each.id}>
                            
                            <td className="text-center" style={{width:"8%"}}>{each.ranking}</td>    
                            <td className="text-center" style={{width:"7%"}}>{index++}</td>
                            <td className="text-center" style={{width:"21%"}}>{each.name}</td>
                            <td className=" text-center" style={{width:"25%"}}>CSE</td>
                            <td className="text-center" style={{width:"20%"}}>{each.college}</td>
                            
                    
                            
                        </tr>
                    ))}
                    </tbody>
            </table>
        </div>
    )
}

export default Ranking