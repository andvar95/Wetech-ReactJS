import React, { useState } from "react";
import Modal from "react-modal";
import { FormTeam } from "./FormTeam";
import {v4 as uuidv4} from 'uuid';
export const Teams = () => {
  const [modal, setModal] = useState(false);

  const handleCloseModal = () => {};
//TODO: MAKE EDITABLE AND REMOVE
  const handleOpenModal = () => {
    setModal(true);
  };
  const handleDelete = (id) => {
console.log(id);
  };
  const teams = [{id:1,name:"maravilla"}, {id:2,name:"avengers"}];
  return (
    <>
      <div className="row">
        <div className="col-md-8">
          <button
            className="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#team-collapse"
            aria-expanded="true"
          >
            Teams
          </button>
        </div>
        <div className="col-md-4">
          <button
            className="btn btn-primary"
            onClick={handleOpenModal}            
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
      <div className="collapse show" id="team-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {teams.map((team) => (
            <div className="row"
            key={team.id}>
              <div className="col-md-8">
                <li className="link-ligth rounded">{team.name}</li>
              </div>
              <div className="col-md-4">
              <button
            className="btn btn-warning btn-sm"
            onClick={handleOpenModal}            
          >
            <i className="fas fa-pen"></i>
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={()=>handleDelete(team.id)}            
          >
            <i className="fas fa-trash"></i>
          </button>
              </div>
            </div>
          ))}

        </ul>
      </div>

      <div className={modal ? "modal" : "none"}>
        <FormTeam onClose={(modal) => setModal(modal)} />
      </div>
    </>
  );
};
