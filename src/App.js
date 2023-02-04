import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Sort from './components/Sort';
import PizzaBlock from './components/PizzaBlock';
import Categories from './components/Categories';

 function App() {
  const [items, setItems] = useState([])

  useEffect(() => {
    fetch('https://63dea3ff9fa0d600600259c3.mockapi.io/items').then((res) => res.json())
    .then((arr) => setItems(arr), [])
  })

  return (
    <div className="wrapper">
      <Header />
      <div className="content">
        <div className="container">
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
        </div>
      </div>
    </div>
  )
}

export default App;
