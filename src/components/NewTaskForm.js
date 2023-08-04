import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [newTaskInput, setNewTaskInput] = useState("")
  const [newTaskCategory, setNewTaskCategory] = useState("Code")

  const allCategoriesExceptAll = categories.filter((category) => {
    if (category != "All") {
      return true;
    }
  })

  function handleFormSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(newTaskInput, newTaskCategory)
    e.target.reset()
  }

  return (
    <form className="new-task-form" onSubmit={handleFormSubmit}>
      <label>
        Details
        <input type="text" name="text" onChange={(e) => setNewTaskInput(e.target.value)} />
      </label>
      <label>
        Category
        <select name="category" onChange={(e) => setNewTaskCategory(e.target.value)}>
          {allCategoriesExceptAll.map((category) => (
            <option key={category}>{category}</option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
