import { useLocation } from 'react-router-dom';
import React,{ useEffect,useState } from 'react';
import { PiStudentFill } from "react-icons/pi";
import { BiLike,BiDislike } from "react-icons/bi";
import Cookies from "js-cookie";

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ProjectDetails = () =>{
    const location = useLocation();
    const id = location.pathname.slice(location.pathname.lastIndexOf("/")+1);
    console.log(id)
    const [project,setProject] = useState()
    const [display,setDisplay] = useState(false)
    const [techStacks,setTech] = useState()
    const [like,setLike] = useState(false)
    useEffect(() =>{
        const fetchData = async() =>{
            const url = 'http://localhost:3001/getProjects'
            const res = await fetch(url)
            const data =await res.json()
            const list = data.filter(each => each.data.ProjectId == id)
            setProject(list)
            console.log(list)
            let tech = list[0].data.Technologies.split(',')
            setTech(tech)
            setDisplay(true)
            const id1 = Cookies.get('student_id')
            console.log(id1)
            if(list[0].data.Likes.includes(id1)){
                setLike(true)
            }
        }
        fetchData()
    },[])

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };

      const LikeProject = async() =>{
        
        const id = Cookies.get('student_id')
        if(project[0].data.Likes.includes(id)){
            alert('You already liked this project')
        }else{
            let list = project[0].data.Likes
            list.push(id)
            let url = 'http://localhost:3001/updateLikes'
            console.log(project[0].data)
            const updateData = {
            id: project[0].data.ProjectId,
            likes:list,

            };
            const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateData)
            });
            const data = await response.json()
            alert(data)
            window.location.reload()

        }
        
      }

    return(
        <>
        {display &&
        <div className='container p-1' style={{minHeight:'100vh',backgroundSize:'cover'}}>
            <div style={{textAlign:'center',width:'100%'}}>
                        <h1 style={{color:'white',fontSize:'30px'}} className='mt-4 mb-5 '>{project[0].data.Name}</h1>
                    </div>
            <div className='container mr-5' style={{display:'flex',justifyContent:'space-between'}}>
                <div style={{display:'flex',flexDirection:'column',width:'60%'}} className='container'>

                    <div>
                        <h1 style={{color:'white',fontSize:'25px'}} className='mt-5 mb-4'>Abstract </h1>
                        <hr style={{color:'white'}}/>
                        <p style={{color:'white',fontSize:'18px'}} className='mt-3'>{project[0].data.OverView}</p>
                    </div>
                    <h1  style={{color:'white',fontSize:'25px'}} className='mt-5 mb-4'>Results</h1>
                    <hr style={{color:'white'}} className='mt-2 mb-4'/>
                    <div style={{display:'flex',justifyContent:'center'}}>
                        <Slider {...settings} style={{width:'80%'}}>
                            <div>
                                <img src={`${project[0].data.ProjectImages1}`} alt="Image 1" />
                            </div>
                            <div>
                                <img src={`${project[0].data.ProjectImages2}`} alt="Image 2" />
                            </div>
                            <div>
                                <img src={`${project[0].data.ProjectImages3}`} alt="Image 3" />
                            </div>
                            {/* Add more slides as needed */}
                        </Slider>
                    </div>  
                    <div>
                        <h1 style={{color:'white',fontSize:'25px'}} className='mt-5 mb-4'>Project Outcome </h1>
                        <hr style={{color:'white'}}/>
                        <p style={{color:'white',fontSize:'18px'}} className='mt-3'>{project[0].data.Outcome}</p>
                    </div>
                   
                </div>
                <div style={{width:'40%',marginLeft:'80px'}} className='mt-4 container'>
                    <div style={{display:'flex'}}>
                        <h1 style={{color:'white',fontSize:'20px',width:'30%'}} className='mt-4'>Developer </h1>
                        <h1 style={{color:'white',fontSize:'20px'}} className='mt-4'>:</h1>
                        <h1 style={{color:'white',marginTop:'22px',fontSize:'20px',width:'75%'}} className='ml-5' >{project[0].data.Developer}</h1>
                    </div>
                    <div style={{display:'flex'}}>
                        <h1 style={{color:'white',fontSize:'20px',width:'30%'}} className='mt-4'>Project Id </h1>
                        <h1 style={{color:'white',fontSize:'20px'}} className='mt-4'>:</h1>
                        <h1 style={{color:'white',marginTop:'22px',fontSize:'20px',width:'75%'}} className='ml-5' >{project[0].data.ProjectId}</h1>
                    </div>
                    <div style={{display:'flex'}}>
                        <h1 style={{color:'white',fontSize:'20px',width:'30%'}} className='mt-4'>Date</h1>
                        <h1 style={{color:'white',fontSize:'20px'}} className='mt-4'>:</h1>
                        <h1 style={{color:'white',marginTop:'28px',fontSize:'20px',width:'75%'}} className='ml-5' >{project[0].data.Date}</h1>
                    </div>
                    <div style={{display:'flex'}}>
                        <h1 style={{color:'white',fontSize:'20px',width:'30%'}} className='mt-4'>github</h1>
                        <h1 style={{color:'white',fontSize:'20px'}} className='mt-4'>:</h1>
                        <h1 style={{color:'blue',marginTop:'28px',fontSize:'20px',width:'75%'}} className='ml-5 cursor-pointer' ><a href={project[0].data.ProjectLink} target="_blank">{project[0].data.ProjectLink}</a></h1>
                    </div>
                    <div style={{display:'flex'}}>
                        <h1 style={{color:'white',fontSize:'20px',width:'30%'}} className='mt-4'>Collaborators</h1>
                        <h1 style={{color:'white',fontSize:'20px'}} className='mt-4'>:</h1>
                        <h1 style={{color:'white',marginTop:'28px',fontSize:'20px',width:'75%'}} className='ml-5' >{project[0].data.Collaborators}</h1>
                    </div>
                    <div style={{display:'flex'}}>
                        <h1 style={{color:'white',fontSize:'20px',width:'30%'}} className='mt-4'>College</h1>
                        <h1 style={{color:'white',fontSize:'20px'}} className='mt-4'>:</h1>
                        <h1 style={{color:'white',marginTop:'28px',fontSize:'20px',width:'75%'}} className='ml-5' >{project[0].data.College}</h1>
                    </div>
                    
                    <div>
                        <h1 style={{color:'white',fontSize:'25px'}} className='mt-5 mb-4'>Software Used</h1>
                        <hr style={{color:'white'}}/>
                        <ul  className='mt-3'>
                            {techStacks.map(each => (
                                <li style={{color:'white',fontSize:'18px'}}>{`->${each}`}</li>
                            )
                            )}
                            
                        </ul>
                    </div>
                    <h1  style={{color:'white',fontSize:'25px',width:'25%'}} className='mt-5 mb-3'>Like/Dislike</h1>
                    <hr style={{color:'white'}}/>
                    <h1 style={{color:'white'}} className='mt-2'>Note: If you like the project then click on Like button</h1>
                    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',width:'100%'}} className='mt-5'>
                    {!like?
                        <img src='https://cdn0.iconfinder.com/data/icons/fillicons-information-technology/1550/programmer_software_developer-1024.png' style={{backgroundColor:'#212121',height:'30vh',width:'10vw',alignSelf:'center'}} alt='img'/>:
                        <img src="https://clipartix.com/wp-content/uploads/2016/05/Smiley-images-happy-clipart.png" style={{height:'30vh',width:'10vw',alignSelf:'center'}} alt="img"/>}
                        <button className='btn btn-success mt-5' style={{width:'25%',alignSelf:'center'}} onClick={LikeProject} >{like?"Liked":"Like"}</button>
                    </div>

                </div>
            </div>
            </div>
        }
        </>
    )
}

export default ProjectDetails