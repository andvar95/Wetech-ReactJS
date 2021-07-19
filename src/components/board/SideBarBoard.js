import React from 'react'
import Modal from "react-modal";
import {Team} from "../team/Team";
import {Sprint} from "../sprint/Sprint";

export const SideBarBoard = () => {


    return (

            <div  id="side" className="sidebar__content">
                    <ul>
                        <li>
                           <Team />

                        </li>

                        <li>
                           
                            <Sprint />
                        </li>

                        <li className="sidebar__option-container">
                            <div className="sidebar__option-title">Title </div>
                            <div className="sidebar__option-content">Opciones</div>

                        </li>
                        </ul>
        </div>
    )
}
