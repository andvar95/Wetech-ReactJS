import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";
import { create, getAll } from "../../actions/base";
import { ListMembers } from "./ListMembers";

import { useDispatch } from "react-redux";

export const TaskForm = ({task}) => {
  const itemTask = { ...task };
  const dispatch = useDispatch();

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
      userId: task.userId,
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
    userId,
    sprint,
    team,
  } = formValues;

  const handleCreateTask = (event) => {
    event.preventDefault();
    if (task._id) {
      console.log("edit");
      // dispatch(update(`task/${team._id}`, formValues));
    } else {
      console.log("crear");
      dispatch(
        create(
          `task/?project=${localStorage.getItem("currentProject")}`,
          formValues
        )
      );
    }
    reset();
  };

  const handleAddMember = (event) => {
    event.preventDefault();
    handleAddArray({ inputs: "", type: "userId" });
  };

  const handleAddTag = (event) => {
    event.preventDefault();
    handleAddArray({ inputs: "", type: "tags" });
  };

  const teams = ["Tback", "Tfront"];
  const members = [
    {id: 1, name: "andres"},
    {id:2, name: "sergio"}
  ]
  
  const sprints = ["Sprint 1", "Sprint 2"];
  const etiquetas = ["Vue", "Angular", "React"];
  console.log("task: ", task);

  return (
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
                    value={team}
                  ></input>
                  <datalist id="listTeam">
                    {teams.map((team, i) => (
                      <option key={uuidv4()} value={team}>
                        {team}
                      </option>
                    ))}
                  </datalist>
                </div>

                <div className="col-6">
                  <label htmlFor="members" className="form-label">
                    Members:
                  </label>
                  <ListMembers
                      handleAdd={handleInputGroupChange}
                      handleDelete={handleRemoveArray}
                      value={userId}
                      data={members}
                      key={uuidv4()}
                      type="userId"
                    />
                  <button onClick={handleAddMember} className="btn btn-primary">
                    Add member
                  </button>
                </div>
              </div>
            </li>

            <li className="list-group-item">
              <div className="row">
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
                    value={sprint}
                  ></input>
                  <datalist id="listSprints">
                    {sprints.map((sprint, i) => (
                      <option key={uuidv4()} value={sprint}>
                        {sprint}
                      </option>
                    ))}
                  </datalist>
                </div>
                <div className="col-6">
                  <label htmlFor="tags" className="form-label">
                    Tags:
                  </label>
                  <ListMembers
                      handleAdd={handleInputGroupChange}
                      handleDelete={handleRemoveArray}
                      value={tags}
                      data={etiquetas}
                      key={uuidv4()}
                      type="tags"
                    />
                  <button onClick={handleAddTag} className="btn btn-primary">
                    Add tag
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
  );
};
