import React,{useState} from 'react'
import Modal from 'react-modal';
import {FormTeam} from "./FormTeam";

export const Team = () => {

    const [modal,setModal] = useState(false);

    const handleCloseModal = () =>{

    }

    const handleOpenModal = ()=>{
        setModal(true)

    }

    return (
        <div  className="sidebar__option-container">
             <div className="sidebar__option-title">Equipos <i className="fas fa-plus-circle" onClick={handleOpenModal}></i></div>
                            <div className="sidebar__option-content">
                                <li>Equipo 1</li>
                                <li>Equipo 2</li>
                                <li>Equipo 3</li>

                            </div>


       <div className={modal?'modal':'none'}>
           <FormTeam onClose={modal=>setModal(modal)} />
       </div>
            
        </div>
    )
}
