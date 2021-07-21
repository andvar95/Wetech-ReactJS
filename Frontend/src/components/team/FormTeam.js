import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { create, getAll } from "../../actions/base";

import { useDispatch, useSelector } from "react-redux";

export const FormTeam = ({
  onClose = (modal) => modal,
  team = {
    name: "",
    description: "",
    project: localStorage.getItem("currentProject"),
    members: [localStorage.getItem("user")],
  },
}) => {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state);
  console.log("TEAM FOR EDIT", team.name);

  const nx = String(team.name) || "hola mundo";

  useEffect(() => {
    dispatch(getAll("users"));
  }, [dispatch]);

  console.log("TEMANAME", team.name);
  const [
    formValues,
    handleInputChange,
    reset,
    handleAddArray,
    handleInputGroupChange,
    handleRemoveArray,
  ] = useForm({
    name: nx,
    description: team.description,
    members: team.members,
    project: team.project,
  });

  const { name, description, members } = formValues;

  const handleCreateTeam = (event) => {
    event.preventDefault();
    dispatch(create("team", formValues));
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
            <select
              name="cars"
              id="cars"
              value={members[i]}
              name={i}
              onChange={(e) =>
                handleInputGroupChange({ target: e, type: "members" })
              }
            >
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
          type="submit"
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
