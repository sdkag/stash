import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import SignupFormPage from "./components/Forms/SignupFormPage";
import LoginFormPage from "./components/Forms/LoginFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Home from "./components/Home";
function App() {
  const dispatch = useDispatch();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation toggleSidebar={setIsSidebarOpen} isLoaded={isLoaded} />

      <SideBar isSidebarOpen={isSidebarOpen} />

      {isLoaded && (
        <Switch>
          <Route path="/login">
            <LoginFormPage />
          </Route>
          <Route path="/signup">
            <SignupFormPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      )}
    </>
  );
}

export default App;
