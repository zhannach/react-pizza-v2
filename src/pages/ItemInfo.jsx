import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


const ItemInfo = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchPizza = async () => {
      await fetch(`https://63dea3ff9fa0d600600259c3.mockapi.io/items/${id}`)
        .then((res) => res.json())
        .then((pizza) => {
          console.log(pizza);
          setPizza(pizza);
        });
    };
    fetchPizza();
  }, []);

  if (!pizza) {
    return "Loading...";
  }

  return (
    <div className="pizza">
      <img className="pizza__img" src={pizza.imageUrl} alt=""></img>
      <div className="pizza__info">
        <h2 className="pizza__title">{pizza.name}</h2>
        <p>Ingridients: {pizza.description}</p>
        <h4 className="pizza__price">Price: {pizza.price} uah</h4>
      </div>
    </div>
  );
};

export default ItemInfo;
