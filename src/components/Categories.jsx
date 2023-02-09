import React from 'react'

function Categories({value, onChangeCategory}) {
  const categories = ['All', 'Meaty', 'Vegetarian', 'Grill', 'Spicy', 'Close']
   
  return (
    <div class="categories">
    <ul>
      {categories.map((categoryName, i) => (
        <li 
        key={i}
        onClick={() => onChangeCategory(i)} 
        className={value === i? 'active' : ''}>
          {categoryName}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Categories