import React,{useEffect, useState} from 'react'
import {useDispatch, useSelector} from "react-redux";
import { getAll} from "../../actions/base";

export const Projects = () => {

    const dispatch = useDispatch()

    const {items} = useSelector(state=>state)
   
  
    useEffect(()=>{
        dispatch(getAll('project'))

    },[dispatch])
    return (
        <>
        <h1>Projects</h1>
        {items.project && <div className="wrap-content">

            
            {items.project.map((project,i)=>(
                <div key={i} className="project__containerProjects">
                    <span><img src={project.img} alt="ProjectPhoto"/> </span> 
                    <span className="text"> {project.name}</span>
                </div>
            ))
            }

            
            
        </div>}
        </>
    )
}
