import React, { useState, useEffect, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";

import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import { SearchContext } from "../App";
import { setCategoryId } from "../redux/slices/filterSlice";

export default function Home() {
  const dispatch = useDispatch()
  const { categoryId, sort } = useSelector(state => state.filter)

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id))
  }

  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const order = sort.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sort.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  useEffect(() => {
    fetch(
      `https://63dea3ff9fa0d600600259c3.mockapi.io/items?${category}&sortBy=${sortBy}&order=${order}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        console.log(arr);
        return setItems(arr);
      });
  }, [categoryId, order, searchValue]);
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index) => onChangeCategory(index)}
        />
        <Sort/>
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{pizzas}</div>
    </>
  );
}
