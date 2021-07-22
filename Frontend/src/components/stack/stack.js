import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAll, update } from "../../actions/base";

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
    dispatch(getAll("task"));
  }, [dispatch]);

  const handleStatus = (event, mytask) => {
    console.log("task", mytask);
    console.log("event", event.target.value);
    const data = {};
    data.status = event.target.value;

    dispatch(update(`task/${mytask._id}`, data));
  };

  return (
    <div className="wrap-content">
      {tasks &&
        tasks.map((task, i) => (
          <div className="stack__Stack" key={i}>
            <div className="stack__headerTask">
              <span className="task__nameTask">
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
  );
}
