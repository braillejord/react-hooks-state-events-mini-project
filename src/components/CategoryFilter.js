import React, { useState } from "react";

function CategoryFilter({ categories }) {
  console.log(categories)

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map((category) => (
        <button key={category}>{category}</button>
      ))}
    </div>
  );
}


export default CategoryFilter;
