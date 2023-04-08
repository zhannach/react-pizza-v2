import React from "react";

function Categories(props: {
  value: number;
  onChangeCategory: (i: number) => void;
}) {
  const categories = ["All", "Meaty", "Vegetarian", "Grill", "Spicy", "Close"];

  return (
    <div className="categories">
      <ul>
        {categories.map((categoryName, i) => (
          <li
            key={i}
            onClick={() => props.onChangeCategory(i)}
            className={props.value === i ? "active" : ""}
          >
            {categoryName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Categories;
