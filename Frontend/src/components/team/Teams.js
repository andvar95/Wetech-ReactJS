import React,{useEffect, useState} from 'react'
import Modal from "react-modal";
import { FormTeam } from "./FormTeam";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuidv4} from 'uuid';
import { getAll, create,remove} from "../../actions/base";
export const Teams = () => {

  const dispatch = useDispatch()

    const {items} = useSelector(state=>state)
   const [teamSelect, SetTeamSelect] = useState(undefined);
  
    useEffect(()=>{
        dispatch(getAll('team'))
    },[dispatch])

    
  const [modal, setModal] = useState(false);
console.log("items team",items);
  const handleCloseModal = () => {

  };
//TODO: MAKE EDITABLE AND REMOVE

  const handleOpenModal = () => {
    setModal(true);
  };
  const handleEdit = (team)=>{
    SetTeamSelect(team);
    console.log("TEAMS",team);
    setModal(true);
  }
  const handleDelete = (id) => {
    
      dispatch(remove('team/'+id));
  
  };
  
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
          {items.team && items.team.map((team) => (
            <div className="row"
            key={team._id}>
              <div className="col-md-8">
                <li className="link-ligth rounded">{team.name}</li>
              </div>
              <div className="col-md-4">
              <button
            className="btn btn-warning btn-sm"
            onClick={()=>handleEdit(team)}            
          >
            <i className="fas fa-pen"></i>
          </button>
          <button
            className="btn btn-danger btn-sm"
            onClick={()=>handleDelete(team._id)}            
          >
            <i className="fas fa-trash"></i>
          </button>
              </div>
            </div>
          ))}
        </ul>
      </div>

      <div className={modal ? "modal" : "none"}>
        <FormTeam team={teamSelect} onClose={(modal) => setModal(modal)} />
      </div>
    </>
  );
};
