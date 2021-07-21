import React,{useEffect, } from 'react'
import {useDispatch, useSelector} from "react-redux";
<<<<<<< HEAD
import { getAll, create,update,remove} from "../../actions/base";
=======
import { getAll, } from "../../actions/base";
>>>>>>> master

export const Projects = ({history}) => {

    const dispatch = useDispatch()

    const {items} = useSelector(state=>state,()=>{})

    const handlePueba =() =>{
        dispatch(remove('project'),{name:"hoa"})
    }
   
  const handleSelectProject = (project)=>{      
      localStorage.setItem("currentProject",project._id);      
      history.push('/');
  }
    useEffect(()=>{
        dispatch(getAll('project'))
   

    },[dispatch])

    return (
        <>
<<<<<<< HEAD
        <button onClick={handlePueba}>CLock</button>
=======
        <h1>Projects</h1>
>>>>>>> master
        {items.project && <div className="wrap-content">

            
            {items.project.map((project,i)=>(
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
