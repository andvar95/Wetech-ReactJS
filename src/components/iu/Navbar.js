import React, { useState } from 'react'
import {SideBarBoard} from "../board/SideBarBoard";
import {Link,NavLink} from 'react-router-dom';


export const Navbar = () => {

    const [sidebar,setSidebar] = useState(false)
 
   const handleSidebar = () =>{
    setSidebar(state=>!state)
     }


    return (
        <div>
        <ul className="navbar__content">
            <li onClick={handleSidebar}>Wetech</li>

            <li>Salir
                

            </li>
            
        </ul>

        {sidebar&& <div>
        <SideBarBoard />
        </div>
        }
        </div>
    
    )
}
