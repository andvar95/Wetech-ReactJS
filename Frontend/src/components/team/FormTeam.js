import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { create, getAll,update } from "../../actions/base";

import { useDispatch, useSelector } from "react-redux";

export const FormTeam =  ({ onClose = (modal) => modal ,team}) => {
  let itemTeam = {...team};
  const dispatch = useDispatch();


  const { items } = useSelector((state) => state);
  

    useEffect(() => {
    
    dispatch(getAll("users"));
  }, [dispatch]); 

 
  const [
    formValues,
    handleInputChange,
    reset,
    handleAddArray,
    handleInputGroupChange,
    handleRemoveArray,
    setValues
  ] = useForm(
    
    itemTeam
    );
    useEffect(() => {    
    
    setValues({
      name:team.name,
      description:team.description,
      members: team.members,
      project: team.project,
    })
    }, [team]);
  const { name, description, members } = formValues;

  const handleCreateTeam = (event) => {
    event.preventDefault();
  if(    team._id){//edit
    dispatch(update(`team/${team._id}`, formValues));
  }
  else{
    dispatch(create("team", formValues));
  }
    reset();
  };
  const handleAddMember = (event) => {
    event.preventDefault();
    console.log(event, "NUEVO");
    handleAddArray({ inputs: "", type: "members" });
  };

  return (
    <div className="form__container">
      <form className="form__content">
        <h3 className="auth__title mb-5">TEAMS</h3>
        <input
          type="text"
          placeholder="name"
          name="name"
          className="auth__input"
          autoComplete="off"
          value={name}
          onChange={handleInputChange}
        />
        <input
          type="text"
          placeholder="description"
          name="description"
          className="auth__input"
          value={description}
          onChange={handleInputChange}
        />

        {members.map((member, i) => (
          <div key={uuidv4()}>
            <select name="cars" id="cars" value={members[i]} name={i} onChange={(e)=>handleInputGroupChange({ target:e ,type:"members"})}>
              {items.users &&
                items.users.map((user) => (
                  <option key={user._id} value={user._id}>
                    {user.name}
                  </option>
                ))}
            </select>

            <button
              className="btn btn-danger btn-sm"
              onClick={(e) => {
                e.preventDefault();
                handleRemoveArray({ idx: i, type: "members" });
              }}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
          // <div key={uuidv4()}>
          //   <label style={{color: 'black'}}>Member {i}</label>
          //   <input
          //     type="text"
          //     placeholder="members"
          //     name={i}
          //     className="auth__input"
          //     value={members[i]}
          //     onChange={(e) => {
          //       handleInputGroupChange({ target: e, type: "members" });
          //     }}
          //   />
          //   <button
          //     className="btn btn-danger btn-sm"
          //     onClick={() => handleRemoveArray({ idx: i, type: "members" })}
          //   >
          //     <i className="fas fa-trash"></i>
          //   </button>
          // </div>
        ))}

        <button className="btn btn-primary" onClick={handleAddMember}>
          Add member <i className="fas fa-plus-circle"></i>
        </button>

        <button
          className="btn btn-primary btn-block"          
          onClick={handleCreateTeam}
        >
          Create Team
        </button>
      </form>

      <div
        className="modal__close"
        onClick={() => {
          onClose(false);
        }}
      >
        <i className="fas fa-times-circle fa-2x"></i>
      </div>
    </div>
  );
};
