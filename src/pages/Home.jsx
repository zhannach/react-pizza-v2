import React, {useState, useEffect} from 'react'

import Sort from '../components/Sort';
import PizzaBlock from '../components/PizzaBlock';
import Categories from '../components/Categories';

export default function Home() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://63dea3ff9fa0d600600259c3.mockapi.io/items').then((res) => res.json())
    .then((arr) => setItems(arr), [])
  })
  return (
    <>
      <div className="content__top">
        < Categories />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">
        {items.map((obj) => (
          <PizzaBlock key={obj.id} {...obj} />
        ))}
      </div>
    </>
  )
}
