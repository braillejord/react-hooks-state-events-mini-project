import React, { useState } from "react";
import Task from "./Task";


function TaskList({ tasks }) {
  const [tasksArray, setTasksArray] = useState(tasks)

  function handleClick(id) {
    const updatedTasks = tasksArray.filter((task) => {
      if (task.text != id) {
        return true;
      }
    })
    setTasksArray(updatedTasks)
  }

  return (
    <div className="tasks">
      {tasksArray.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} handleClick={handleClick} />
      ))
      }
    </div>
  );
}

export default TaskList;
