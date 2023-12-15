import { useEffect, useState } from "react"

const ProjectList = () =>{

    const [load,setLoad] = useState(false)
    const [data,setData] = useState([])

    useEffect(() =>{
        const getProgram = async() =>{
            const url = 'http://localhost:3001/getProgram'
            const res = await fetch(url)
            const data =await res.json()
            console.log(data)
            setLoad(res.ok)
            setData(data)
        }
        getProgram()
    },[])

    let si = 1


    return(
        <div style={{width:'100%',display:'flex',flexDirection:'column'}}>
            <h1 style={{color:'white',fontSize:'30px',textAlign:'center'}} className="mb-5 mt-3">Programs List</h1>
            <div style={{display:'flex',justifyContent:'center'}}>
            {load &&
                <table style={{borderColor:'white',borderWidth:'2px',color:'white',width:'80%'}}>
                    <thead>
                        <tr style={{textAlign:'center'}} >
                            <th style={{width:'20%',height:'5vh',borderColor:'white',borderWidth:'2px',color:'white'}}>S.NO</th>
                            <th style={{width:'80%',borderColor:'white',borderWidth:'2px',color:'white'}}>PROGRAM</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(each =>(
                            <tr style={{textAlign:'center'}}>
                            
                                <th style={{width:'20%',height:'5vh',borderColor:'white',borderWidth:'2px',color:'white'}}>{si++}</th>
                                <th style={{width:'80%',borderColor:'white',borderWidth:'2px',color:'wheat'}}>{each.data.Command}</th>
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
        </div>
    )
}

export default ProjectList