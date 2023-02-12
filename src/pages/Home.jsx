import React, { useState, useEffect, useContext } from "react";

import Sort from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import { SearchContext } from "../App";

export default function Home() {
  const { searchValue } = useContext(SearchContext);
  const [items, setItems] = useState([]);
  const [categoryId, setCategoryId] = useState(0);
  const [sortType, setSortType] = useState({
    name: "most popular (DESC)",
    sortProperty: "rating",
  });

  const sort = sortType.sortProperty.includes("-") ? "asc" : "desc";
  const sortBy = sortType.sortProperty.replace("-", "");
  const category = categoryId > 0 ? `category=${categoryId}` : "";
  const search = searchValue ? `&search=${searchValue}` : "";
  const pizzas = items.map((obj) => <PizzaBlock key={obj.id} {...obj} />);

  useEffect(() => {
    fetch(
      `https://63dea3ff9fa0d600600259c3.mockapi.io/items?${category}&sortBy=${sortBy}&order=${sort}${search}`
    )
      .then((res) => res.json())
      .then((arr) => {
        console.log(arr);
        return setItems(arr);
      });
  }, [categoryId, sortType, searchValue]);
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index) => setCategoryId(index)}
        />
        <Sort value={sortType} onChangeSort={(type) => setSortType(type)} />
      </div>
      <h2 className="content__title">All pizzas</h2>
      <div className="content__items">{pizzas}</div>
    </>
  );
}
