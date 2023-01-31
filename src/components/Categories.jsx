import React, { useState } from 'react'

function Categories() {
  const [activeIndex, setActiveIndex] = useState(2)

  const categories = ['Все', 'Мясные', 'Вегетерианская', 'Гриль', 'Острые', 'Закрытые']
   
  const onClickCategory = (index) => {
    setActiveIndex(index)
  }
  return (
    <div class="categories">
    <ul>
      {categories.map((value, index) => (
        <li onClick={() => onClickCategory(index)} className={activeIndex === index? 'active' : ''}>
          {value}
        </li>
      ))}
    </ul>
  </div>
  )
}

export default Categories