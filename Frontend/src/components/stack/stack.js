import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, update } from "../../actions/base";
import { getRoleProject} from "../../actions/auth"
import { TaskForm} from "../task/TaskForm";

export default function Stack() {
  const dispatch = useDispatch();
  let tasks = [];
  const { task } = useSelector(
    (state) => state.items,
    () => {}
  );



  if (task) {
    tasks = task;
  }
  useEffect(() => {
    dispatch(getRoleProject());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAll("task"));
    dispatch(getRoleProject());
  }, [dispatch]);

  const handleStatus = (event, mytask) => {
    const data = {};
    data.status = event.target.value;

    dispatch(update(`task/${mytask._id}`, data));
  };


  /*Task edit */

  const [taskSelect, SetTaskSelect] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    importance: "",
    urgency: "",
    tags: [""],
    usersId: [""],
    sprint: "",
    team: "",
  });

  const [modal, setModal] = useState(false);
;

  const handleEdit = (task)=>{
    SetTaskSelect({
      _id: task._id,
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
      
    setModal(true);
  }

  return (
    <>
    <div className="wrap-content">
      {tasks &&
        tasks.map((task, i) => (
          <div className="stack__Stack" key={i}>
            <div className="stack__headerTask">
              <span    onClick={() => handleEdit(task)}className="task__nameTask">
                <h6>{task.name}</h6>
              </span>
              {task.status === "Done" && (
                <span className="btn sts btn-success">
                  <h6> {task.status}</h6>
                </span>
              )}
              {task.status === "To-Do" && (
                <span className="btn sts btn-info">
                  <h6> {task.status}</h6>
                </span>
              )}
              {task.status === "In-Progress" && (
                <span className="btn sts btn-warning">
                  <h6> {task.status}</h6>
                </span>
              )}
              {task.status === "Problem" && (
                <span className="btn sts btn-danger">
                  <h6> {task.status}</h6>
                </span>
              )}
            </div>

            <div className="task__containerTask">{task.description}</div>
            <div className="stack__footerTask">
              <select
                onChange={(event) => handleStatus(event, task)}
                className="form-select"
                aria-label="Default select example"
              >
                <option value="" selected disabled hidden>
                  Choose here
                </option>
                <option value="To-Do">To-Do</option>
                <option value="In-Progress">In-Progress</option>
                <option value="Problem">Problem</option>
                <option value="Done">Done</option>
              </select>
              <button type="button" className="btn btn-dark">
                Send
              </button>
            </div>
          </div>
        ))}
    </div>
    {localStorage.getItem('rolProject')==='PO'&&<div className={modal ? "modal" : "none"}>
        <TaskForm task={taskSelect} onClose={(modal) => setModal(modal)}/>
      </div>}
    </>
  );
}
