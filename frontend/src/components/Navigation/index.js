import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import LoginFormModal from '../LoginFormModal';
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faLightbulb,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
import ProfileButton from "./ProfileButton";
import { signup, login } from "../../store/session";

function Navigation({ isLoaded, toggleSidebar }) {
  const sessionUser = useSelector((state) => state.session.user) || null;

  //       {/* <LoginFormModal /> */}
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  // );

  // }

  return (
    <>
      <section
        className="nav1"
        onClick={() => toggleSidebar((prevState) => !prevState)}
      >
        <FontAwesomeIcon icon={faHamburger} />
      </section>
      <section className="nav2">
        <FontAwesomeIcon icon={faLightbulb} />
        <div>Keep</div>
      </section>
      <section className="nav3">
        <div className="searchbar">
          <SearchBar />
        </div>
      </section>
      <section className="nav4">
        {/* {isLoaded && <ProfileButton user={sessionUser} />} */}
        <ProfileButton user={sessionUser} />
      </section>
    </>
  );
}

export default Navigation;
// search icon;
// hamburger button
