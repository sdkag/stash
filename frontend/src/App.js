import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/Forms/SignupFormPage";
import LoginFormPage from "./components/Forms/LoginFormPage";
import * as takeNoteActions from "./store/takeNote";

import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
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
    <>
      {/* <Navigation toggleSidebar={setIsSidebarOpen} isLoaded={isLoaded} /> */}

      <Navigation toggleSidebar={setIsSidebarOpen} sessionUser={sessionUser} />

      <SideBar isSidebarOpen={isSidebarOpen} />

      {sessionUser && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default function AppWrapper() {
  const dispatch = useDispatch();
  return (
    <div className="AppWrapper app-window">
      <App
        onClick={(e) => {
          dispatch(takeNoteActions.createNote());
        }}
      />
    </div>
  );
}
