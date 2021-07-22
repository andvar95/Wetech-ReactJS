import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getAll,remove} from "../../actions/base";
import {FormProjects} from "./FormProjects";

export const Projects = ({history}) => {

   

    const dispatch = useDispatch()
    const [projectSelect, SetProjectSelect] = useState({
        name: "",
        description: "",
        members: [localStorage.getItem("user")],
      });

    const {project} = useSelector(state=>state.items,()=>{});
    const [modal, setModal] = useState(false);

    const handleCreate = () => {
        setModal(true);
        SetProjectSelect({
          name: "",
          description: "",
          members: [localStorage.getItem("user")],
        
        
        });
    }
   
    const handleEdit = (project)=>{
    console.log(project)
        SetProjectSelect({
          _id:project._id,
          name:project.name,
          description:project.description,
          members : project.members.map(member=> member.userId._id)});
          
         
        setModal(true);
      }
  const handleSelectProject = (project)=>{      
      localStorage.setItem("currentProject",project._id);      
      history.push('/home/board');
  }
    useEffect(()=>{
        dispatch(getAll('project'))
   

    },[dispatch])


    return (
        <>
        <h1>Projects</h1>

        <div className="project__create-btn">
                <button onClick={handleCreate} className="btn btn-primary"> Create Project</button>
            </div>
        {project && <div className="wrap-content">
            

            
            {project.map((project,i)=>(
                <div key={i} className="project__containerProjects" >
                    <span><img src={project.img} alt="ProjectPhoto"/> </span>
                    <span onClick={()=>handleEdit(project)} className="text"><i className="fas fa-edit"></i></span>
                    <span className="text" onClick={()=>handleSelectProject(project)}> {project.name}</span>
                </div>
            ))
            }

            
            
        </div>}

        <div className={modal ? "modal" : "none"}>
        <FormProjects project={projectSelect} onClose={(modal) => setModal(modal)} />
      </div>
        </>
    )
}
