const Projects = () =>{
    return(
        <div>
            <h1 style={{color:'white',fontFamily:"Roboto",fontSize:'35px',width:'90vw',textAlign:'center'}} className="mt-3" >Projects</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
            <div className="rounded-lg bg-dark overflow-hidden h-full ml-5" style={{width:'98%'}}>
                <table className="table table-bordered table-hover table-dark rounded-xxl">
                    <thead className="table-header-group text-muted">
                        <tr>
                            <th className="text-center h-12" key={1}>
                            {1}
                            </th>
                            <th className="text-center h-12" key={1}>
                            {1}
                            </th>
                        </tr>
                    </thead>
                    <tbody className="text-muted">
                        <tr key={1}>
                            <td className="h-8 w-16 text-center" key={1 + 1}>
                            {1 + 1}
                            </td>
                            <td className="h-8 w-40 text-center" key={1}>
                            {1}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

            
        </div>
    )
}

export default Projects