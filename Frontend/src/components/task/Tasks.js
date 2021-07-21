import React, { useState, useEffect } from "react";
import { TaskForm } from "./TaskForm";
import { useDispatch, useSelector } from "react-redux";
import { getAll, remove } from "../../actions/base";

export const Tasks = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items.task);

  useEffect(() => {
    dispatch(getAll("task"));
  }, [dispatch]);

  const [taskSelect, SetTaskSelect] = useState({
    name: "",
    description: "",
    duration: "",
    difficulty: "",
    importance: "",
    urgency: "",
    tags: [""],
    userId: [""],
    sprint: "",
    team: "",
  });

  const [modal, setModal] = useState(false);

  const handleCreate = () => {
    SetTaskSelect({
      name: "",
      description: "",
      duration: "",
      difficulty: "",
      importance: "",
      urgency: "",
      tags: [""],
      userId: [""],
      sprint: "",
      team: "",
    });
  };
  
  return (
    <>
      <h2>Tasks</h2>
      <button className="btn btn-primary">Create Task</button>
      <div>
        <TaskForm task={taskSelect} />
      </div>
    </>
  );
};
