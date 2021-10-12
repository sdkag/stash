import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Pages/Home/";
import Splash from "../Pages/Splash";

export default function MainContent() {
  return (
    <>
      <Switch>
        <Route path="/splash">
          <Splash />
        </Route>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}
