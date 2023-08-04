import React, { useState } from "react";
import Task from "./Task";


function TaskList({ tasks, selectedCategory }) {
  const [tasksArray, setTasksArray] = useState(tasks)
  console.log(selectedCategory)

  function handleClick(id) {
    const updatedTasks = tasksArray.filter((task) => {
      if (task.text != id) {
        return true;
      }
    })
    setTasksArray(updatedTasks)
  }

  const taskToDisplay = tasks
    .filter((task) => {
      if (selectedCategory === "All") {
        return true;
      } else if (task.category === selectedCategory) {
        return true;
      }
    })

  return (
    <div className="tasks">
      {taskToDisplay.map((task) => (
        <Task key={task.text} text={task.text} category={task.category} handleClick={handleClick} />
      ))
      }
    </div>
  );
}

export default TaskList;
