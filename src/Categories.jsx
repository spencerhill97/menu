import React from "react";

const Categories = ({ categories, filterArray }) => {
  return (
    <div className="btn-container">
      {categories.map((category) => {
        return (
          <button
            type="btn"
            className="btn"
            onClick={() => filterArray(category)}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
