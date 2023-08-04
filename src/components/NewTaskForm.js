import React, { useState } from "react";

function NewTaskForm({ categories }) {

  const allCategoriesExceptAll = categories.filter((category) => {
    if (category != "All") {
      return true;
    }
  })

  return (
    <form className="new-task-form">
      <label>
        Details
        <input type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
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
