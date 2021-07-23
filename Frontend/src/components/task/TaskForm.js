import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { create, getAll, update } from "../../actions/base";
import { ListMembers } from "./ListMembers";

import { useDispatch, useSelector } from "react-redux";

export const TaskForm = ({ task, onClose = (modal) => modal }) => {
  const itemTask = { ...task };
  const dispatch = useDispatch();

  const {
    team: teams,
    users,
    sprint: sprints,
  } = useSelector((state) => state.items);

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
      dispatch(update(`task/${task._id}`, formValues));
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
        <div className="card w-80">
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h2 className="card-title">Create a new task</h2>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="name" className="form-label">
                      Task name:
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="name"
                      name="name"
                      autoComplete="off"
                      value={name}
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                  <div className="col-6">
                    <label htmlFor="duration" className="form-label">
                      Deadline:
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      name="duration"
                      value={duration}
                      onChange={handleInputChange}
                      required
                    ></input>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row w-90">
                  <label htmlFor="description" className="form-label">
                    Description:
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="description"
                    name="description"
                    autoComplete="off"
                    value={description}
                    onChange={handleInputChange}
                    required
                  ></input>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-4">
                    <label htmlFor="difficulty" className="form-label">
                      Difficulty:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="difficulty"
                      value={difficulty}
                      onChange={handleInputChange}
                      min="1"
                      max="5"
                      required
                    ></input>
                  </div>
                  <div className="col-4">
                    <label htmlFor="importance" className="form-label">
                      Importance:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="importance"
                      value={importance}
                      onChange={handleInputChange}
                      min="1"
                      max="5"
                      required
                    ></input>
                  </div>
                  <div className="col-4">
                    <label htmlFor="urgency" className="form-label">
                      Urgency:
                    </label>
                    <input
                      type="number"
                      className="form-control"
                      name="urgency"
                      value={urgency}
                      onChange={handleInputChange}
                      min="1"
                      max="5"
                      required
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
                    <select
                      className="form-control"
                      name="team"
                      placeholder="Select team"
                      value={team.name}
                      required
                      onChange={handleInputChange}
                    >
                      <option value="" selected disabled hidden>
                        Choose here
                      </option>
                      {teams &&
                        teams.map((team, i) => (
                          <option key={team._id} value={team._id}>
                            {team.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  <div className="col-6">
                    <label htmlFor="sprint" className="form-label">
                      Sprint:
                    </label>
                    <select
                      className="form-control"
                      name="sprint"
                      placeholder="Select sprint"
                      value={sprint.name}
                      required
                      onChange={handleInputChange}
                    >
                      <option value="" selected disabled hidden>
                        Choose here
                      </option>
                      {sprints &&
                        sprints.map((sprint, i) => (
                          <option key={sprint._id} value={sprint._id}>
                            {sprint.name}
                          </option>
                        ))}
                    </select>
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
           
            {!task._id?'Create task':'Edit Task'}
          </button>
        </div>
      </form>
      <div className="modal__close" onClick={() => onClose(false)}>
        <i className="fas fa-times-circle fa-2x"></i>
      </div>
    </div>
  );
};
