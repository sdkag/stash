import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
// import LoginFormModal from '../LoginFormModal';
import "./Navigation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHamburger,
  faLightbulb,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";
function Navigation({ isLoaded, toggleSidebar }) {
  //       {/* <LoginFormModal /> */}
  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  // );
  // }

  return (
    <ul>
      <li>
        <div onClick={() => toggleSidebar((prevState) => !prevState)}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
        <div>
          <FontAwesomeIcon icon={faLightbulb} />
          Keep
        </div>
        <div>
          <SearchBar>
            <FontAwesomeIcon icon={faSearch} />
          </SearchBar>
          Keep
        </div>
        {isLoaded && <ProfileButton />}
      </li>
    </ul>
  );
}

export default Navigation;
// search icon;
// hamburger button
