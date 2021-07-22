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
    usersId: [""],
    sprint: "",
    team: "",
  });

  const [modal, setModal] = useState(false);

  const handleCreate = () => {
    setModal(true);
    SetTaskSelect({
      name: "",
      description: "",
      duration: "",
      difficulty: "",
      importance: "",
      urgency: "",
      tags: [{name:"", color: ""}],
      usersId: [""],
      sprint: "",
      team: "",
    });
  };

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
      
    console.log('task selected',taskSelect);
    setModal(true);
  }
  
  return (
    <>
      <h2>Tasks</h2>
      <button onClick={handleCreate} className="btn btn-primary">Create Task</button>
      <div className={modal ? "modal" : "none"}>
        <TaskForm task={taskSelect} onClose={(modal) => setModal(modal)}/>
      </div>
    </>
  );
};
