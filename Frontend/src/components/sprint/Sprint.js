import React,{useState} from 'react'
import {FormSprint} from "./FormSprint"

export const Sprint = () => {

    const [modal,setModal] = useState(false);

    const handleCloseModal = () =>{

    }

    const handleOpenModal = ()=>{
        setModal(true)

    }
    return (
        <div  className="sidebar__option-container">
             <div className="sidebar__option-title">Sprints <i onClick={handleOpenModal} className="fas fa-plus-circle"></i></div>
                            <div className="sidebar__option-content">
                                <li>Sprint 1</li>
                                <li>Sprint 2</li>
                                <li>Sprint 3</li>

                            </div>

        <div className={modal?'modal':'none'}>
           <FormSprint onClose={modal=>setModal(modal)} />
       </div>   
            
        </div>
    )
}
