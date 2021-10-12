import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import LoginFormModal from '../LoginFormModal';
import "./Navigation.css";
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
// import { signup, login } from "../../store/session";
import { searchSvg, hamburgerSvg } from "../../svgs";
function Navigation({ fasterSessionUser: which, isLoaded, toggleSidebar }) {
  //? ifasterSessinUser faster than sessionUser
  const sessionUser = useSelector((state) => state.session.user) || null;
  const [isDropDown, setIsDropDown] = useState(false);

  return (
    <section className="navigation">
      <div
        className="nav1 hamburger navbar"
        onClick={() => toggleSidebar((prevState) => !prevState)}
      >
        {/* svg is from og site keep.google..com */}
        {hamburgerSvg}
      </div>
      <div className="navbar nav2 logo">
        <NavLink to="/">
          <div>sTaSh</div>
        </NavLink>
        {/* <img src="https://i.imgur.com/XqQZQZL.png" alt="logo" /> */}
      </div>
      <div className="navbar search-container nav3">
        <div className="search">
          <SearchBar />
        </div>
      </div>
      <div className="navbar placeholder"></div>
      <div className="navbar profile_button nav4">
        {/* {isLoaded && <ProfileButton user={sessionUser} />} */}
        <ProfileButton isDropDown={isDropDown} sessionUser={sessionUser} />
      </div>
    </section>
  );
}

export default Navigation;
// search icon;
// hamburger buttonuu
