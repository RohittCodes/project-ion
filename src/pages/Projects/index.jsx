import Cookies from "js-cookie";
import { useEffect, useState } from "react"
import { Triangle } from "react-loader-spinner";
import { NavLink } from "react-router-dom";
import './index.css'
import 'animate.css'

const Projects = () =>{
    const [status,setStatus] = useState(false)
    const [count,setCount] = useState(0)
    const [projects,setProjects] = useState([])
    const [display,setDisplay] = useState(false)
    const [Projects,setProject] = useState([]);


    let computerScienceDomains = [
        "Artificial Intelligence (AI)",
        "Data Science and Analytics",
        "Cybersecurity and Cryptography",
        "Software Development",
        "Internet of Things (IoT)",
        "Robotics",
        "Computer Vision and Image Processing",
        "Natural Language Processing (NLP)",
        "Cloud Computing",
        "Database Systems",
        "Human-Computer Interaction (HCI)",
        "Game Development",
        "Bioinformatics and Computational Biology",
        "Parallel and Distributed Computing",
        "Computer Graphics and Visualization",
        "Mobile Development",
        "Web Development",
        "Augmented Reality (AR)",
        "Virtual Reality (VR)",
        "Blockchain Technology",
        "Big Data",
        "Quantum Computing",
        "Fintech (Financial Technology)",
        "Geographic Information Systems (GIS)",
        "E-commerce Technology",
        "Embedded Systems",
        "Signal Processing",
        "Compiler Design",
        "Operating Systems",
        "Information Retrieval",
        "Ethical AI",
        "Explainable AI",
        "Machine Learning Engineering",
        "Deep Learning",
        "Reinforcement Learning",
        "Affective Computing",
        "Computational Linguistics",
        "Network Security",
        "Malware Analysis",
        "Privacy-Preserving Technologies",
        "Biometric Systems",
        "Health Informatics",
        "Data Mining",
        "Knowledge Representation and Reasoning",
        "Cognitive Computing",
        "Penetration Testing",
        "Vulnerability Assessment",
        "Digital Forensics",
        "Incident Response",
        "Social Engineering",
        "Web Application Security",
        "Network Exploitation",
        "Reverse Engineering",
        "Cyber Threat Intelligence",
        "Wireless Network Security",
        "Security Information and Event Management (SIEM)",
        "Exploit Development",
        "Threat Hunting",
        "Security Operations Center (SOC)",
        "Red Teaming"
    ];

    const [formData,setFormData] = useState({
        Name: '',
        OverView: '',
        Technologies: '',
        Outcome: '',
        Developer: '',
        ProjectLink: '',
        Collaborators: '',
        ProjectImages1:'',
        ProjectImages2:'',
        ProjectImages3:'',
        Domain:computerScienceDomains[0],
      });
    
      useEffect(() =>{
        const fetchData = async() =>{
            const url = 'http://localhost:3001/getProjects'
            const res = await fetch(url)
            const data =await res.json()
            let college = Cookies.get('College')
            if(location.pathname.startsWith("/admin")){
                let data1 = data.filter(each => each.data.Approved == true && each.data.College == college);
                console.log(data1)
                data1.sort((a, b) => a.data.ProjectId.localeCompare(b.data.ProjectId));
                setProjects(data1)
                setProject(data1)
            }else{
                console.log(data)
                data.sort((a, b) => a.data.ProjectId.localeCompare(b.data.ProjectId));
                setProjects(data)
                setProject(data)
            }
            setCount(data.length)
            setDisplay(true)
        }
        fetchData()
      },[])
      
      const getAllProjects = () =>{
            setProjects(Projects)

      }
      const getYourProjects = () =>{
        const id = Cookies.get('student_id')
        console.log(id)
        const data = Projects.filter(each =>each.data.StudentProfileId == id)
        console.log(data)
        setProjects(data)
  

      }


      function preprocessText(text) {
        return text
            .toLowerCase()
            .replace(/[^\w\s]/g, '')
            .split(/\s+/)
            .filter(word => word.length > 0);
      }
      
      // Function to calculate the cosine similarity between two vectors
      function cosineSimilarity(vector1, vector2) {
        const dotProduct = vector1.reduce((acc, val, i) => acc + val * vector2[i], 0);
        const magnitude1 = Math.sqrt(vector1.reduce((acc, val) => acc + val ** 2, 0));
        const magnitude2 = Math.sqrt(vector2.reduce((acc, val) => acc + val ** 2, 0));
      
        return dotProduct / (magnitude1 * magnitude2);
      }
      
      // Function to calculate the document similarity
      function documentSimilarity(doc1, doc2) {
        const tokens1 = preprocessText(doc1);
        const tokens2 = preprocessText(doc2);
      
        // Create a set of unique terms from both documents
        const uniqueTerms = Array.from(new Set([...tokens1, ...tokens2]));
      
        // Create vectors for each document
        const vector1 = uniqueTerms.map(term => tokens1.includes(term) ? 1 : 0);
        const vector2 = uniqueTerms.map(term => tokens2.includes(term) ? 1 : 0);
      
        // Calculate cosine similarity
        return cosineSimilarity(vector1, vector2);
      }

      // Function to handle input changes
      const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const addProject = () =>{
        setStatus(!status)
    }

    const submitForm = async(e) =>{
        e.preventDefault()
        setDisplay(false)
        const url1 = 'http://localhost:3001/getProjects'
        const res1 = await fetch(url1)
        const data =await res1.json()
        let list = []
        data.filter(each =>{
            const similarity = documentSimilarity(each.data.OverView, formData.OverView);
            console.log(similarity)
            if(similarity*100 > 20){
                list.push(each)
            }
            
        })
        console.log(list)
        if(list.length>1){
            alert('The Project already exist')
        }
        else{
            console.log('Form submitted:', formData);
            formData['ProjectId'] = 'project_'+count
            const currentDate = new Date();
            formData['Date'] = currentDate
            let studentId = Cookies.get('student_id')
            let college = Cookies.get('College')
            formData['StudentProfileId'] = studentId
            formData['College'] = college
            formData['Approved'] = false
            formData['Likes'] = []
            console.log('Form submitted:', formData);
            let url = "http://localhost:3001/addProjects"
            let requestOptions = {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            };
            const res = await fetch(url, requestOptions);
            
            const data1 = await res.json();
            console.log(data1)
        }
        setFormData({
            Name: '',
            OverView: '',
            Technologies: '',
            Outcome: '',
            Developer: '',
            ProjectLink: '',
            Collaborators: '',
            ProjectImages1:'',
            ProjectImages2:'',
            ProjectImages3:'',
            Domain:''
          });
          setDisplay(true)
          
    }

    let auth = Cookies.get('Auth')
    function capitalizeString(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }


    return(
        <>
        {display ?
        <div style={{backgroundSize:'cover',minHeight:'100vh',paddingBottom:'5vh',textAlign:'center'}} className="w-full">
            <h1 style={{color:'white',fontFamily:"Roboto",fontSize:'35px',width:'100%',textAlign:'center'}} className="mt-3 " >Projects</h1>
            <div style={{display:'flex'}}>
                <div  className="w-full flex justify-around">
                    {!status && <div className="mt-5 mb-3">
                        <button onClick={getAllProjects} style={{width:'15vw'}} className="btn btn-outline-warning">All Projects</button>
                    </div>}
                    {!status &&<div  className="mt-5 mb-3">
                        <button onClick={getYourProjects} style={{width:'15vw'}} className="btn btn-outline-warning">Your Projects</button>
                    </div>}
                    <div className="mt-5 mb-3 text-right">
                        <button onClick={addProject} className="btn btn-outline-warning">{status?'Close':'Add Porject'}</button>
                    </div>
                </div>
                
            </div>
            {status && 
            <div style={{display:'flex',justifyContent:'center'}}>
                <form className="p-5 border-solid border-2 rounded-lg w-full m-3 " onSubmit={submitForm}>
                    <div className="flex">
                        <div className="w-1/2">
                            <label  style={{color:'white'}} className="mb-1 mt-3">PROJECT NAME</label>
                            <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="Name" value={formData.Name}/>
                        </div>
                        <div className="w-1/2 ml-20">
                            <label style={{color:'white'}} className="mb-1 mt-3">DEVELOPER </label>
                            <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="Developer" value={formData.Developer}/>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <label style={{color:'white'}} className="mb-1 mt-3">PROJECT OVERVIEW</label>
                            <textarea style={{color:'black',fontWeight:'bolder'}} rows={10} className="form-control" type="text" onChange={handleInputChange} name="OverView" value={formData.OverView}/>
                        </div>
                        <div className="w-1/2 ml-20">
                            <label style={{color:'white'}} className="mb-1 mt-3">OUTCOME</label>
                             <textarea style={{color:'black',fontWeight:'bolder'}} rows={10} className="form-control" type="text" onChange={handleInputChange} name="Outcome" value={formData.Outcome} />
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <label style={{color:'white'}} className="mb-1 mt-3">TECHNOLOGIES USED</label>
                            <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="Technologies" value={formData.Technologies}/>
                        </div>
                        <div className="w-1/2 ml-20">
                            <label style={{color:'white'}} className="mb-1 mt-3">DOMAIN </label>
                            <select className="form-control" style={{textAlign:'center'}} onChange={handleInputChange} name="Domain" value={formData.Domain}>
                            {computerScienceDomains.map(each =>(
                                <option key={each}>{each}</option>
                            ))}
                            </select>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="w-1/2">
                            <label style={{color:'white'}} className="mb-1 mt-3">PROJECT LINK</label>
                            <input style={{color:'black',fontWeight:'bolder'}} className="form-control" type="text" onChange={handleInputChange} name="ProjectLink" value={formData.ProjectLink}/>
                        </div>
                        <div className="w-1/2 ml-20">
                            <label className="mb-1 mt-3 text-white">COLLABORATORS</label>
                            <input  className="text-black font-bold form-control" type="text" onChange={handleInputChange} name="Collaborators" value={formData.Collaborators} />
                        </div>
                    </div>
                    <label  className="mb-1 mt-3 text-black">IMAGE LINK</label>
                    <div className="flex">
                        <div className="w-1/3">
                            <input className="form-control mt-3 text-black font-bold" type="text" onChange={handleInputChange} placeholder="image_url1" name="ProjectImages1" value={formData.ProjectImages1}/>
                        </div>
                        <div className="w-1/3 ml-20">
                            <input  className="form-control mt-3 text-black font-bold" type="text" onChange={handleInputChange} placeholder="image_url2" name="ProjectImages2" value={formData.ProjectImages2}/>
                        </div>
                        <div className="w-1/3 ml-20">
                            <input className="form-control mt-3 text-black font-bold" type="text" onChange={handleInputChange} placeholder="image_url3" name="ProjectImages3" value={formData.ProjectImages3}/>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-info mt-5" style={{backgroundColor:'gray'}} >Submit</button>
                </form>
            </div>}
            {!status && <div className="flex justify-center mt-11 min-w-full flex-wrap">
                {projects.map(each =>(
                    <div className="max-w-md rounded-md m-2 font-sans text-sm p-4 w-2/3 bg-white">
                        <h1 className="font-extrabold text-left">{each.data.Name.toUpperCase()}</h1>
                        <p className="text-left mt-3 font-medium h-24">{each.data.OverView.slice(0,200)}....</p>
                        <div className="flex justify-between">
                            <div className="text-left mt-3 font-medium">
                                <h1 className="text-teal-900">Author</h1>
                                <h1 className="mt-2">{each.data.Developer.toUpperCase()}</h1>
                            </div>
                            <div className="text-left mt-3 font-medium mb-3">
                                <h1 className="text-teal-900">Collaborator(s)</h1>
                                <h1 className="mt-2">{each.data.Collaborators.toUpperCase()}</h1>
                            </div>
                        </div>
                        <div className="text-left mt-3 font-medium mb-4">
                            <h1 className="text-teal-900 font-sans ">College</h1>
                            <h1 className="mt-2 font-sans ">{each.data.College.toUpperCase()}</h1>
                        </div>
                        <div className="text-left mt-3">
                            <h1 className="text-teal-900 font-sans mb-4 font-medium">Skills to be Learned</h1>
                            <div className="flex">
                            <ul className="w-full flex gap-2">
                            {each.data.Technologies.split(',').slice(0,3).map(each => (
                                <li key={each}>
                                    <div className="border-solid border-2 border-gray-600 rounded-full px-2 py-1 font-sm ">{each.toUpperCase()}</div>
                                </li>
                            ))}
                            </ul>
                            
                            <NavLink to={{pathname: `${auth}/project/${each.data.ProjectId}`,state: { data1: each.data }}} className="w-1/3 text-blue-700 font-sans font-medium">See more..</NavLink>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
         }

            
        </div>:<div  className="w-100 flex justify-center items-center h-96">
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
    )
}

export default Projects