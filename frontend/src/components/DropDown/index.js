import React from "react";
import PropTypes from "prop-types";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./Dropdown.css";
export default function DropDown({ showMenu, users }) {
  const dispatch = useDispatch();
  return showMenu ? (
    <menu className="dropdown dropdown--container">
      <section className="dropdown--partA user-profile">
        <button onClick={() => dispatch(sessionActions.logout())}>
          Log Out
        </button>
      </section>
      <section className="dropdown--partB signOthers">
        Login as:
        {users &&
          Object.values(users).map((user, idx) => (
            <button key={idx}>{user.username}</button>
          ))}
      </section>
      <section className="dropdown--partC logout all">
        Or..
        <button>Log In</button>
        <button>Sign Up</button>;
      </section>
    </menu>
  ) : null;
}
