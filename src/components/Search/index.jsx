import React, { useCallback, useContext, useRef, useState } from "react";
import debounce from "lodash.debounce";
import styles from "./search.module.scss";
import close from "../../assets/close.svg";
import { SearchContext } from "../../App";

export default function Search() {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const { setSearchValue } = useContext(SearchContext);

  const updateSearchValue = useCallback(
    debounce((str) => {
      setSearchValue(str);
    }, 1000),
    [],
  );

  const onChangeInput = (event) => {
    setValue(event.target.value)
    updateSearchValue(event.target.value)
  }
  const onClickClear = () => {
    setSearchValue("");
    setValue("")
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
