import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/Forms/SignupFormPage";
import LoginFormPage from "./components/Forms/LoginFormPage";
import * as takeNoteActions from "./store/takeNote";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home/";
import Splash from "./Pages/Splash";

import styles from "./index.css";
function App() {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const [isLoaded, setIsLoaded] = useState(false);
  const [sessionUser, setUser] = useState(null);
  // sessionUser;

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then((user) => setUser(user));
  }, [dispatch]);

  return (
    <div className="stashit">
      {/* <Navigation toggleSidebar={setIsSidebarOpen} isLoaded={isLoaded} /> */}

      <Navigation toggleSidebar={setIsSidebarOpen} sessionUser={sessionUser} />

      <section className="sidebar-maincontent">
        <div className={`sidebar ${isSidebarOpen ? "sidebar-open" : ""}`}>
          <SideBar isSidebarOpen={isSidebarOpen} />
        </div>
        <div className="mainpage">
          {sessionUser && (
            <Switch>
              <Route path="/splash">
                <Splash />
              </Route>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
          )}
        </div>
      </section>
    </div>
  );
}

export default function AppWrapper() {
  const dispatch = useDispatch();
  return (
    <div className={styles.stashit}>
      <App
        onClick={(e) => {
          dispatch(takeNoteActions.createNote());
        }}
      />
    </div>
  );
}
