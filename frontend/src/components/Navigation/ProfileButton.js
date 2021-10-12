import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getUsers } from "../../store/users";
import DropDown from "../DropDown";
function ProfileButton({ isDropDown, user }) {
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);

  const openMenu = (e) => {
    e.preventDefault();
    // ;
    if (showMenu) return;
    setShowMenu(true);
  };

  const userIds = useSelector((state) => state.users.allIds);
  const users = useSelector((state) => state.users.byId);
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = () => {
      setShowMenu(false);
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
  };
  const closeModalSideEffect = (stateVar, closeModal) => {
    if (!stateVar) return;

    document.addEventListener("click", closeModal);
    return () => document.removeEventListener("click", closeModal);
  };
  // TODO:add default ima ge to user, and pull that in here.
  return (
    <div className="dropdown ">
      <button onClick={openMenu}>
        Profile
        <i className="fas fa-user-circle" />
      </button>
      <DropDown showMenu={showMenu} users={users} />
    </div>
  );
}

export default ProfileButton;
