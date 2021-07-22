import React, { useState } from 'react'
import {SideBarBoard} from "../board/SideBarBoard";
import {Link} from 'react-router-dom';
import {FormCountDown} from '../countdown/FormCountDown';
import { useDispatch} from "react-redux";
import './navbar.css';
import { logout } from '../../actions/auth';
export const Navbar = () => {
  const [sidebar, setSidebar] = useState(false);

  const dispatch = useDispatch();
  const handleSidebar = () => {
    console.log("entreo");
    setSidebar((state) => !state);
  };
  const handleLogout = () => {
    dispatch(logout());
  };
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
    <FormCountDown/>      

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
    <li onClick={handleLogout}><a  className="dropdown-item" href="#">Logout</a></li>
  </ul>        </div>


    
</div>
</nav>
{sidebar&& <div>
    <SideBarBoard />
     </div>}
    
    </>


)
}

