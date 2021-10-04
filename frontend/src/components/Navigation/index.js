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
    <ul>
      <li>
        <div onClick={() => toggleSidebar((prevState) => !prevState)}>
          <FontAwesomeIcon icon={faHamburger} />
        </div>
      </li>
      <li>
        <div>
          <FontAwesomeIcon icon={faLightbulb} />
          Keep
        </div>
      </li>
      <li>
        <div>
          <SearchBar>
            <FontAwesomeIcon icon={faSearch} />
          </SearchBar>
          Keep
        </div>
      </li>

      <li>{isLoaded && <ProfileButton user={sessionUser} />}</li>
    </ul>
  );
}

export default Navigation;
// search icon;
// hamburger button
