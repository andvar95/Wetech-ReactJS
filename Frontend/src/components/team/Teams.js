import React,{useEffect, useState} from 'react'
import { FormTeam } from "./FormTeam";
import {useDispatch, useSelector} from "react-redux";
import { getAll, remove} from "../../actions/base";
export const Teams = () => {

  const dispatch = useDispatch()

    const items = useSelector(state=>state.items.team)
   const [teamSelect, SetTeamSelect] = useState({
    name: "",
    description: "",
    project: localStorage.getItem("currentProject"),
    members: [localStorage.getItem("user")],
  });
  
    useEffect(()=>{
        dispatch(getAll('team'))
    },[dispatch])

    
  const [modal, setModal] = useState(false);


  const handleCreate = () => {
    setModal(true);
    SetTeamSelect({
      name: "",
      description: "",
      project: localStorage.getItem("currentProject"),
      members: [localStorage.getItem("user")],
    
    
    });
  };
  const handleEdit = (team)=>{
    
    SetTeamSelect({
      _id:team._id,
      name:team.name,
      description:team.description,
      project:team.project,
      members : team.members.map(member=> member._id)});
      
      console.log('team selected',teamSelect);
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
            onClick={()=>{handleCreate()}}            
          >
            <i className="fas fa-plus-circle"></i>
          </button>
        </div>
      </div>
      <div className="collapse show" id="team-collapse">
        <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
          {items && items.map((team) => (
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
