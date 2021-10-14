import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { queryStore } from "../../store/notes";
import { closeX, searchSvg } from "../../svgs";
// import {debounce} from '../../utils'
import "./Searchbar.css";

export default function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const [isFocused, setFocused] = useState(false);
  // ;

  useEffect(() => {
    // TODO : implement debounce
    // debounce(queryStore, 1000, dispatch);
    dispatch(queryStore(searchTerm));
    // ;
  }, [dispatch, searchTerm]);

  const handleClose = () => {
    console.log("lets handle close");
  };
  return (
    <section className={`searchbar-container ${isFocused ? "focus" : ""}`}>
      {/* svg's from the site from og site keep.google..com */}
      <button className="searchbar search-icon" tabIndex="0">
        {searchSvg}
      </button>
      <input
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        styles={'{ color: "black" }'}
        className="searchbar search-input"
        value={searchTerm}
        placeholder="Search"
        type="text"
        name="search"
        id="search-bar"
        onChange={({ target: { value } }) => {
          setSearchTerm(value);
        }}
      />
      <button className="closeButton" onClick={handleClose}>
        {closeX}
      </button>

      {/* <FontAwesomeIcon icon={faSearch} />	 */}
    </section>
  );
}
