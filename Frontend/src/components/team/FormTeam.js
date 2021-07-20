import React from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import {create}  from '../../actions/base';
export const FormTeam = ({ onClose = (modal) => modal }) => {
  const dispatch = useDispatch();
  const [
    formValues,
    handleInputChange,
    reset,
    handleAddArray,
    handleInputGroupChange,
    handleRemoveArray,
  ] = useForm({
    name: "",
    description: "",
    members: [],
  });

  const { name, description, members } = formValues;

  const handleCreateTeam = (event) => {
    event.preventDefault();
    dispatch(create('team',formValues));    
  };
  const handleAddMember = (event) => {
    console.log(event, "NUEVO");
    handleAddArray({ inputs: "", type: "members" });
  };
  

  return (
    <div className="form__container">
      <form className="form__content" onSubmit={handleCreateTeam}>
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
            <label style={{color: 'black'}}>Member {i}</label>
            <input
              type="text"
              placeholder="members"
              name={i}
              className="auth__input"
              value={members[i]}
              onChange={(e) => {
                handleInputGroupChange({ target: e, type: "members" });
              }}
            />
            <button
              className="btn btn-danger btn-sm"
              onClick={() => handleRemoveArray({ idx: i, type: "members" })}
            >
              <i className="fas fa-trash"></i>
            </button>
          </div>
        ))}

        <button className="btn btn-primary" onClick={handleAddMember}>
          Add member <i className="fas fa-plus-circle"></i>
        </button>

        <button className="btn btn-primary btn-block" type="submit">
          Create Team
        </button>
      </form>

      <div className="modal__close" onClick={() => onClose(false)}>
        <i className="fas fa-times-circle fa-2x"></i>
      </div>
    </div>
  );
};
