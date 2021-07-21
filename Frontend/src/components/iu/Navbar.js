import React, { useState } from 'react'
import {SideBarBoard} from "../board/SideBarBoard";
import {Link} from 'react-router-dom';
import './navbar.css';

export const Navbar = () => {

    const [sidebar,setSidebar] = useState(false)
 
   const handleSidebar = () =>{
       console.log('entreo')
    setSidebar(state=>!state)
     }


    return (
        <>
  
  <nav className="navbar navbar-dark bg-dark navbar" aria-label="Second navbar example">
    <div className="container-fluid">
        <div>
        <button className="navbar-toggler" onClick={handleSidebar}>
        <span className="navbar-toggler-icon"></span>
      </button>
    <Link className="navbar-brand" to="/">WeTech</Link>
    
        </div>       

        <div className="dropdown">
    <a href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
        <img src="https://github.com/mdo.png" alt="" width="32" height="32" className="rounded-circle me-2"/>
        <strong>mdo</strong>
      </a>
      <ul className="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
        <li><a className="dropdown-item" href="#">New project...</a></li>
        <li><a className="dropdown-item" href="#">Settings</a></li>
        <li><a className="dropdown-item" href="#">Profile</a></li>
        <li><hr className="dropdown-divider"/></li>
        <Link className="dropdown-item" to="/auth">Salir</Link>         
      </ul>        </div>


        
    </div>
</nav>
 {sidebar&& <div>
        <SideBarBoard />
         </div>}
        
        </>

    
    )
}
