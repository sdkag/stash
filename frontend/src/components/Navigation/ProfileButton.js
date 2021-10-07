import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import * as sessionActions from "../../store/session";
import { getUsers } from "../../store/users";

function ProfileButton({ user }) {
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
  let me = `
  < className="profile-dropdown">
  <li>{user.username}</li>
  <li>{user.email}</li>
  <li>
    <button onClick={logout}>Log Out</button>
  </li>
  <li>
    <NavLink to="login">Log In</NavLink>
  </li>
  <li>
    <NavLink to="signup">Sign Up</NavLink>
  </li>
</ul>`;

  return (
    <>
      <button onClick={openMenu}>
        Profile Dropdown
        <i className="fas fa-user-circle" />
      </button>
      {showMenu && (
        <menu className="profile-dropdown">
          <button>Edit User</button>
          <button onClick={logout}>Log Out</button>

          <button>Log In</button>

          <button>Sign Up</button>
          {users && (
            <div>
              sign in as different user
              {Object.values(users).map((user) => (
                <button>LogIn as {user.username}</button>
              ))}
            </div>
          )}
        </menu>
      )}
      {/* {showMenu && user && (
        <ul className="profile-dropdown">
          <li>{user.username}</li>
          <li>{user.email}</li>
          <li>
            <button onClick={logout}>Log Out</button>
          </li>
        </ul>
      )} */}
    </>
  );
}

export default ProfileButton;
