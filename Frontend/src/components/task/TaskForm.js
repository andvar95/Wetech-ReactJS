import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { create, getAll, update } from "../../actions/base";
import { ListMembers } from "./ListMembers";

import { useDispatch, useSelector } from "react-redux";

export const TaskForm = ({ task, onClose = (modal) => modal }) => {
  const itemTask = { ...task };
  const dispatch = useDispatch();

  const { team: teams, users, sprint: sprints } = useSelector(
    (state) => state.items,
  );

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
    setValues,
  ] = useForm(itemTask);

  useEffect(() => {
    setValues({
      name: task.name,
      description: task.description,
      duration: task.duration,
      difficulty: task.difficulty,
      importance: task.importance,
      urgency: task.urgency,
      tags: task.tags,
      usersId: task.usersId,
      sprint: task.sprint,
      team: task.team,
    });
  }, [task]);

  const {
    name,
    description,
    duration,
    difficulty,
    importance,
    urgency,
    tags,
    usersId,
    sprint,
    team,
  } = formValues;

  const handleCreateTask = (event) => {
    event.preventDefault();
    if (task._id) {
      dispatch(update(`task/${team._id}`, formValues));
    } else {
      dispatch(create("task", formValues));
    }
    reset(); 
    onClose(false);
  };

  const handleAddMember = (event) => {
    event.preventDefault();
    handleAddArray({ inputs: "", type: "usersId" });
  };

  return (
    <div>
      <form onSubmit={handleCreateTask}>
        <div className="card w-75">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h2 className="card-title">Create a new task</h2>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-7">
                    <label htmlFor="name" className="form-label">
                      Task name:
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      autoComplete="off"
                      value={name}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                  <div className="col-5">
                    <label htmlFor="duration" className="form-label">
                      Deadline:
                    </label>
                    <input
                      type="date"
                      name="duration"
                      value={duration}
                      onChange={handleInputChange}
                    ></input>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <label htmlFor="description" className="form-label">
                    Task description:
                  </label>
                  <input
                    type="text"
                    placeholder="description"
                    name="description"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                  ></input>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="difficulty" className="form-label">
                      Task difficulty:
                    </label>
                    <input
                      type="number"
                      name="difficulty"
                      value={difficulty}
                      onChange={handleInputChange}
                      min="1"
                      max="5"
                    ></input>
                  </div>
                  <div className="col-4">
                    <label htmlFor="importance" className="form-label">
                      Task importance:
                    </label>
                    <input
                      type="number"
                      name="importance"
                      value={importance}
                      onChange={handleInputChange}
                      min="1"
                      max="5"
                    ></input>
                  </div>
                  <div className="col-4">
                    <label htmlFor="urgency" className="form-label">
                      Task urgency:
                    </label>
                    <input
                      type="number"
                      name="urgency"
                      value={urgency}
                      onChange={handleInputChange}
                      min="1"
                      max="5"
                    ></input>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
              <div className="row">
                <div className="col-6">
                <label htmlFor="members" className="form-label">
                Team:
                </label>
                <input
                    className="form-control"
                    name="team"
                    onChange={handleInputChange}
                    list="listTeam"
                    placeholder="Select team"
                    value={team.name}
                  ></input>
                  <datalist id="listTeam">
                  {teams && teams.map((team, i) => (
                    <option key={uuidv4()} value={team._id}>
                    {team.name}
                      </option>
                      ))}
                  </datalist>
                </div>
                
                <div className="col-6">
                  <label htmlFor="sprint" className="form-label">
                  Sprint:
                  </label>
                  <input
                  className="form-control"
                    name="sprint"
                    onChange={handleInputChange}
                    list="listSprints"
                    placeholder="Select sprint"
                    value={sprint.name}
                  ></input>
                  <datalist id="listSprints">
                  {sprints && sprints.map((sprint, i) => (
                      <option key={uuidv4()} value={sprint._id}>
                        {sprint.name}
                        </option>
                        ))}
                  </datalist>
                  </div>
              </div>
            </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="members" className="form-label">
                      Members:
                    </label>
                    <ListMembers
                      handleAdd={handleInputGroupChange}
                      handleDelete={handleRemoveArray}
                      value={usersId}
                      data={users}
                      key={uuidv4()}
                      type="usersId"
                    />
                    <button
                      onClick={handleAddMember}
                      className="btn btn-primary"
                    >
                      Add member
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <button className="btn btn-primary" type="submit">
            Create task
          </button>
        </div>
      </form>
      <div className="modal__close" onClick={() => onClose(false)}>
        <i className="fas fa-times-circle fa-2x"></i>
      </div>
    </div>
  );
};
