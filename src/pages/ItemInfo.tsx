import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

type Pizza = {
  imageUrl: string,
  name: string,
  description: string,
  price: number,
};

const ItemInfo = () => {
  const [pizza, setPizza] = useState<Pizza>();
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

  return (
    <>
      {pizza ? (
        <div className="pizza">
          <img className="pizza__img" src={pizza.imageUrl} alt=""></img>
          <div className="pizza__info">
            <h2 className="pizza__title">{pizza.name}</h2>
            <p>Ingridients: {pizza.description}</p>
            <h4 className="pizza__price">Price: {pizza.price} uah</h4>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
};

export default ItemInfo;
