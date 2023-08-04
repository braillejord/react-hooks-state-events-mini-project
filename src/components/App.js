import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  function getCategory(category) {
    setSelectedCategory(category)
  }

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} getCategory={getCategory} />
      <NewTaskForm />
      <TaskList tasks={TASKS} selectedCategory={selectedCategory} />
    </div>
  );
}

export default App;
