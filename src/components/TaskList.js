import React, { useState } from "react";
import Task from "./Task";

function TaskList({ tasks }) {
  return (
    <div className="tasks">
      {tasks.map((task) => (
        <Task key={task.name} text={task.text} category={task.category} />
      ))
      }
    </div>
  );
}

export default TaskList;
