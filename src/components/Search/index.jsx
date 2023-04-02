import React, { useCallback, useRef, useState } from "react";
import debounce from "lodash.debounce";
import { setSearchValue } from "../../redux/slices/filterSlice";
import styles from "./search.module.scss";
import close from "../../assets/close.svg";
import { useDispatch } from "react-redux";

export default function Search() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();

  const updateSearchValue = useCallback(
    debounce((str) => {
      dispatch(setSearchValue(str));
    }, 1000),
    []
  );

  const onChangeInput = (event) => {
    setValue(event.target.value);
    updateSearchValue(event.target.value);
  };
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  return (
    <div className={styles.root}>
      <input
        ref={inputRef}
        className={styles.input}
        value={value}
        onChange={onChangeInput}
        placeholder="search pizza"
      ></input>
      {value && (
        <img
          onClick={onClickClear}
          className={styles.clearIcon}
          src={close}
          alt=""
        ></img>
      )}
    </div>
  );
}
