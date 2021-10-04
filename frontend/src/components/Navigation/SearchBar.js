import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { queryStore } from "../../store/notes";

const debounce = (thunk, timeOut, dispatch) => {
  //TODO: incorporate this properly
  let timer;
  // ;
  // return (...args) => {
  clearTimeout(timer);
  // ;
  timer = setTimeout((args) => {
    dispatch(thunk(...args));
  }, timeOut);
};

export default function SearchBar({ children: searchIcon }) {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();

  // ;
  useEffect(() => {
    // debounce(queryStore, 1000, dispatch);
    dispatch(queryStore(searchTerm));
    // ;
  }, [dispatch, searchTerm]);

  const handleClose = () => {
    console.log("lets handle close");
  };
  return (
    <div className="search-bar">
      {searchIcon}
      <input
        value={searchTerm}
        placeholder="Search"
        type="search"
        name="search"
        id="search-bar"
        onChange={({ target: { value } }) => setSearchTerm(value)}
      />
      <div onClick={handleClose}>x</div>
      {/* <FontAwesomeIcon icon={faSearch} />	 */}
    </div>
  );
}

// throttle /debounce
