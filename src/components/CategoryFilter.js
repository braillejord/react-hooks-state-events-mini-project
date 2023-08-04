import React, { useState } from "react";

function CategoryFilter({ categories, getCategory }) {
  const [categoryArray, setCategoryArray] = useState(categories)
  const [selectedCat, setSelectedCat] = useState();

  function updateCategory(category) {
    setSelectedCat(category)
    getCategory(category)
  }


  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryArray.map((category) => (
        <button key={category} onClick={() => updateCategory(category)} className={selectedCat === category ? "selected" : undefined}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;