import React,{useEffect, } from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getAll,remove} from "../../actions/base";

export const Projects = ({history}) => {

    const dispatch = useDispatch()

    const {project} = useSelector(state=>state.items);
   
  const handleSelectProject = (project)=>{      
      localStorage.setItem("currentProject",project._id);      
      history.push('/');
  }
    useEffect(()=>{
        dispatch(getAll('project'))
   

    },[dispatch])

    return (
        <>
        <h1>Projects</h1>
        {project && <div className="wrap-content">

            
            {project.map((project,i)=>(
                <div key={i} className="project__containerProjects" onClick={()=>handleSelectProject(project)}>
                    <span><img src={project.img} alt="ProjectPhoto"/> </span> 
                    <span className="text"> {project.name}</span>
                </div>
            ))
            }

            
            
        </div>}
        </>
    )
}
