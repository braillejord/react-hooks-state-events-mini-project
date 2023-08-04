import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [tasksArray, setTasksArray] = useState(TASKS)

  function getCategory(category) {
    setSelectedCategory(category)
  }

  function onTaskFormSubmit(task, category) {
    const newTask = {
      text: task,
      category: category
    }
    const updatedTaskArray = [...tasksArray, newTask]
    setTasksArray(updatedTaskArray)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} getCategory={getCategory} />
      <NewTaskForm categories={CATEGORIES} onTaskFormSubmit={onTaskFormSubmit} />
      <TaskList tasksArray={tasksArray} setTasksArray={setTasksArray} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
