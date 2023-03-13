import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ItemInfo = () => {
  const [pizza, setPizza] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://63dea3ff9fa0d600600259c3.mockapi.io/items/${id}`).then(
      async (res) => {
        if (res.status === 200) {
          const data = await res.json();
          setPizza(data);
        } else {
          alert("something went wrong");
          navigate("/");
        }
      }
    );
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
