import { useEffect } from "react";

const Following = () =>{
    useEffect(() =>{

    },[])

      let id = 1
      
    return(
        <div className="w-full flex">
            
            <div className="w-1/2 p-5">
                <h2 className="text-white text-center font-sans text-2xl">Followers</h2>

                <table className=" text-center mt-10 table table-bordered table-hover table-dark rounded-full">
                    <thead className="table-header-group text-muted">
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>COLLEGE</th> 
                        </tr>
                    </thead>
                    <tbody>
                        {persons.map(each =>(
                            <tr>
                                <td>{id++}</td>
                                <td>{each.name}<br/>{each.email}</td>
                                <td>{each.age}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Following