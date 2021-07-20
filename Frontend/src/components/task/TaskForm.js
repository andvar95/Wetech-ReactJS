import React from "react";
import { useForm } from "../../hooks/useForm";
import { v4 as uuidv4 } from "uuid";

export const TaskForm = () => {
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
    duration: "",
    difficulty: "",
    importance: "",
    urgency: "",
    tags: [],
    userId: [],
    sprint: "",
    team: "",
  });

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
    console.log(formValues);
    // TODO: enviar datos al backend
  };

  const teams = ["Tback", "Tfront"];
  const members = ["Andres", "Cristian", "Sergio"];
  const sprints = ["Sprint 1", "Sprint 2"];
  const etiquetas = ["Vue", "Angular", "React"];

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
                  <div className="col-6">
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
                  <div className="col-6">
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
                      Select team:
                    </label>
                    <select
                      name="team"
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {teams.map((team, i) => (
                        <option key={uuidv4()} value={team}>
                          {team}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="col-6">
                    <label htmlFor="members" className="form-label">
                      Members:
                    </label>
                    <select
                      name="userId"
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {members.map((member, i) => (
                        <option key={uuidv4()} value={member}>
                          {member}
                        </option>
                      ))}
                    </select>
                    <button className="btn btn-primary">Add member</button>
                  </div>
                </div>
              </li>

              <li className="list-group-item">
                <div className="row">
                  <div className="col-6">
                    <label htmlFor="sprint" className="form-label">
                      Sprint:
                    </label>
                    <select
                      name="sprint"
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {sprints.map((sprint, i) => (
                        <option key={uuidv4()} value={sprint}>
                          {sprint}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="col-6">
                    <label htmlFor="tags" className="form-label">
                      Tags:
                    </label>
                    <select
                      name="tags"
                      onChange={handleInputChange}
                      className="form-select"
                    >
                      {etiquetas.map((etiqueta, i) => (
                        <option key={uuidv4()} value={etiqueta}>
                          {etiqueta}
                        </option>
                      ))}
                    </select>
                    <button className="btn btn-primary" onClick="">Add tag</button>
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
    </div>
  );
};
