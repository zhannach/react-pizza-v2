import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, selectCartById } from "../redux/slices/cartSlice";
import { Link } from "react-router-dom";
import { PizzaBlock } from "../types/PizzaBlock";
const typeNames = ["thin dough", "tradition"];

function PizzaBlock({ id, name, price, imageUrl, sizes, types }: PizzaBlock) {
  const dispatch = useDispatch();
  const cartItem = useSelector(selectCartById(id)
  );
  const addCount = cartItem ? cartItem.count : 0
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);

  const onclickAddBtn = () => {
    const item = {
      id,
      name,
      imageUrl,
      type: typeNames[activeType],
      size: sizes[activeSize],
      price,
      count: 0,
    };
    dispatch(addItem(item));
  };
  
  return (
    <div className="pizza-block">
      <Link to={`pizza/${id}`} key={id}>
        <img className="pizza-block__image" src={imageUrl} alt="Pizza" />
        <h4 className="pizza-block__title">{name}</h4>
      </Link>
      <div className="pizza-block__selector">
        <ul>
          {types.map((typeId) => (
            <li
              key={typeId}
              onClick={() => setActiveType(typeId)}
              className={activeType === typeId ? "active" : ""}
            >
              {typeNames[typeId]}
            </li>
          ))}
        </ul>
        <ul>
          {sizes.map((size, id) => (
            <li
              key={size}
              onClick={() => setActiveSize(id)}
              className={activeSize === id ? "active" : ""}
            >
              {size}cм.
            </li>
          ))}
        </ul>
      </div>
      <div className="pizza-block__bottom">
        <div className="pizza-block__price">${price}</div>
        <button
          onClick={() => onclickAddBtn()}
          className="button button--outline button--add"
        >
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
              fill="white"
            />
          </svg>
          <span>Add</span>
          { addCount > 0 && <i>{addCount}</i>}
        </button>
      </div>
    </div>
  );
}

export default PizzaBlock;
