import { useEffect } from "react";

const Following = () =>{
    useEffect(() =>{

    },[])
    const persons = [
        { name: 'John Doe', age: 30, email: 'john@example.com' },
        { name: 'Jane Smith', age: 28, email: 'jane@example.com' },
        { name: 'Bob Johnson', age: 35, email: 'bob@example.com' },
        { name: 'Alice Williams', age: 25, email: 'alice@example.com' },
        // Add more dummy data as needed
      ];
      
    return(
        <div className="font-sans text-white w-full pl-20 pr-20">
            <h1 className="text-white text-center mt-10 font-medium text-3xl">Following</h1>
            <table className="table-hover mt-10 w-full" style={{backgroundColor:'#080808',color:'white'}} >
                        <thead className="table-header-group text-muted">
                            <tr>
                                
                                
                            </tr>

                        </thead>
                        <tbody className="text-muted">
                {persons.map((person, index) => (
                <tr key={index} >
                    <td style={{ border: '0px solid white' ,color:'white'}} className="w-1/2 text-center"><a className="text-gray-400">ID - </a>{person.age}</td>
                    <td className="flex flex-col w-1/2 mt-10">
                        <td style={{ border: '0px solid white',fontWeight:'bolder',color:'white',fontSize:'23px' }} className="text-left">Uday kiran  </td>
                        <td style={{ border: '0px solid white'}} className="text-left text-gray-400">{person.age}</td>
                        <td style={{ border: '0px solid white' }} className="text-left text-gray-400">{person.email}</td>
                    </td>

                    {/* Add more cells with person details */}
                </tr>
                ))}
            </tbody>
            </table>
        </div>
    )
}

export default Following