import React, { useEffect, useRef } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import Sort, { list } from "../components/Sort";
import PizzaBlock from "../components/PizzaBlock";
import Categories from "../components/Categories";
import {
  selectFilter,
  setCategoryId,
  setFilters,
} from "../redux/slices/filterSlice";
import { fetchPizzas, selectPizzasData } from "../redux/slices/pizzasSlice";

export default function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isSearch = useRef(false);
  const isMounted = useRef(false);
  const { categoryId, sort, searchValue } = useSelector<>(selectFilter);
  console.log(searchValue)
  const { items, status } = useSelector(selectPizzasData);

  const onChangeCategory = (id) => {
    dispatch(setCategoryId(id));
  };
  const pizzas = items.map((obj) => {
    return <PizzaBlock key={obj.id} {...obj} />;
  });

  const getPizzas = async () => {
    const order = sort.sortProperty.includes("-") ? "asc" : "desc";
    const sortBy = sort.sortProperty.replace("-", "");
    const category = categoryId > 0 ? `category=${categoryId}` : "";
    const search = searchValue ? `&search=${searchValue}` : "";

    dispatch(
      fetchPizzas({
        order,
        sortBy,
        category,
        search,
      })
    );
  };

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sort: sort.sortProperty,
        categoryId,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, searchValue]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));
      const sort = list.find((obj) => obj.sortProperty === params.sortProperty);
      dispatch(
        setFilters({
          ...params,
          sort,
        })
      );
      isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);

    if (!isSearch.current) {
      getPizzas();
    }

    isSearch.current = false;
  }, [categoryId, sort, searchValue]);

  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onChangeCategory={(index) => onChangeCategory(index)}
        />
        <Sort />
      </div>
      <h2 className="content__title">All pizzas</h2>
      {status === "error" || items.length === 0 ? (
        <div className="content__error">
          <h2>
            Oops, something went wrong <span>😕</span>
          </h2>
          <p>Please, try again later</p>
        </div>
      ) : (
        <div className="content__items">{pizzas}</div>
      )}
    </>
  );
}
