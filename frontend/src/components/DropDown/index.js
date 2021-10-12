import React from "react";
import PropTypes from "prop-types";
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
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
        sign in as...
        {users && <div>sign in as different user</div>}
        {users &&
          Object.values(users).map((user, idx) => (
            <button key={idx}>LogIn as {user.username}</button>
          ))}
      </section>
      <section className="dropdown--partC logout all"></section>
      <button>Log In</button>
      <button>Sign Up</button>;
    </menu>
  ) : null;
}
