import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./slide.css";

export const SideBarBoard = () => {
  console.log("me dibuje de nuevo");
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark slide">
        <Link
          to="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
        >
          <span className="fs-4">Sidebar</span>
        </Link>
        <ul className="nav nav-pills flex-column mb-auto">
      <li className="nav-item">
        <NavLink activeClassName="active" to="/" className="nav-link" aria-current="page">
          
          Team
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/" className="nav-link" aria-current="page">
          
          Sprint
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink activeClassName="active" to="/" className="nav-link" aria-current="page">
          
          Project
        </NavLink>
      </li>
   
    </ul>
    <hr/>



      </div>
    </>
  );
};
