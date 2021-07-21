import React, { useState } from "react";
import { TaskForm } from "./TaskForm";

export const Tasks = () => {


  return (
    <>
      <h2>Tasks</h2>
      <button className="btn btn-primary">
        Create Task
      </button>
      <div>
        <TaskForm />
      </div>
    </>
  );
};
