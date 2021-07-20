import React, { useState } from "react";
import { TaskForm } from "./TaskForm";

export const Tasks = () => {

  return (
    <>
      <h2>Tasks</h2>
      <div>
        <TaskForm />
      </div>
    </>
  );
};
