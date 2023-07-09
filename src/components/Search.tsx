import React, { useCallback, useContext, useRef, useState } from "react";
import { searchContext } from "../App";
// @ts-ignore
import debounce from "lodash.debounce";

const Search: React.FC = () => {
  const [value, setValue] = useState("");
  // @ts-ignore
  const { setSearchValue } = useContext(searchContext);
  const inputRef = useRef<HTMLInputElement>(null);

  const updateInput = useCallback(
    debounce((str: string) => {
      setSearchValue(str);
    }, 1000),
    []
  );
  const valueClean = () => {
    setValue("");
    setSearchValue("");
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
    updateInput(event.target.value);
  };

  return (
    <div className="header__search">
      <svg
        width="40"
        height="40"
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <mask id="path-1-inside-1_3_16718" fill="white">
          <path d="M0 1.6C0 1.03995 0 0.759921 0.108993 0.546009C0.204867 0.357847 0.357847 0.204867 0.546009 0.108993C0.759921 0 1.03995 0 1.6 0H32C34.8003 0 36.2004 0 37.27 0.544967C38.2108 1.02433 38.9757 1.78924 39.455 2.73005C40 3.79961 40 5.19974 40 8V32C40 34.8003 40 36.2004 39.455 37.27C38.9757 38.2108 38.2108 38.9757 37.27 39.455C36.2004 40 34.8003 40 32 40H1.6C1.03995 40 0.759921 40 0.546009 39.891C0.357847 39.7951 0.204867 39.6422 0.108993 39.454C0 39.2401 0 38.9601 0 38.4V1.6Z" />
        </mask>
        <path
          d="M0 1.6C0 1.03995 0 0.759921 0.108993 0.546009C0.204867 0.357847 0.357847 0.204867 0.546009 0.108993C0.759921 0 1.03995 0 1.6 0H32C34.8003 0 36.2004 0 37.27 0.544967C38.2108 1.02433 38.9757 1.78924 39.455 2.73005C40 3.79961 40 5.19974 40 8V32C40 34.8003 40 36.2004 39.455 37.27C38.9757 38.2108 38.2108 38.9757 37.27 39.455C36.2004 40 34.8003 40 32 40H1.6C1.03995 40 0.759921 40 0.546009 39.891C0.357847 39.7951 0.204867 39.6422 0.108993 39.454C0 39.2401 0 38.9601 0 38.4V1.6Z"
          fill="#6F73EE"
          stroke="#6F73EE"
          strokeWidth="3"
          mask="url(#path-1-inside-1_3_16718)"
        />
        <path
          d="M27.9519 26.8499L22.758 21.656C23.564 20.614 23.9999 19.34 23.9999 18C23.9999 16.396 23.374 14.892 22.242 13.758C21.11 12.624 19.602 12 18 12C16.398 12 14.89 12.626 13.758 13.758C12.624 14.89 12 16.396 12 18C12 19.602 12.626 21.11 13.758 22.242C14.89 23.376 16.396 23.9999 18 23.9999C19.34 23.9999 20.612 23.564 21.654 22.76L26.8479 27.9519C26.8632 27.9672 26.8812 27.9793 26.9012 27.9875C26.9211 27.9958 26.9424 28 26.9639 28C26.9855 28 27.0068 27.9958 27.0267 27.9875C27.0466 27.9793 27.0647 27.9672 27.0799 27.9519L27.9519 27.0819C27.9672 27.0667 27.9793 27.0486 27.9875 27.0287C27.9958 27.0088 28 26.9875 28 26.9659C28 26.9444 27.9958 26.9231 27.9875 26.9032C27.9793 26.8832 27.9672 26.8652 27.9519 26.8499V26.8499ZM21.168 21.168C20.32 22.014 19.196 22.48 18 22.48C16.804 22.48 15.68 22.014 14.832 21.168C13.986 20.32 13.52 19.196 13.52 18C13.52 16.804 13.986 15.678 14.832 14.832C15.68 13.986 16.804 13.52 18 13.52C19.196 13.52 20.322 13.984 21.168 14.832C22.014 15.68 22.48 16.804 22.48 18C22.48 19.196 22.014 20.322 21.168 21.168Z"
          fill="white"
        />
      </svg>
      <input
        ref={inputRef}
        value={value}
        onChange={onChangeInput}
        className="input"
        placeholder="Искать самокат KUGO"
      ></input>
      {value && (
        <svg
          onClick={valueClean}
          className="header__search-clear"
          height="48"
          viewBox="0 0 48 48"
          width="48"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M38 12.83l-2.83-2.83-11.17 11.17-11.17-11.17-2.83 2.83 11.17 11.17-11.17 11.17 2.83 2.83 11.17-11.17 11.17 11.17 2.83-2.83-11.17-11.17z" />
          <path d="M0 0h48v48h-48z" fill="none" />
        </svg>
      )}
    </div>
  );
};

export default Search;
