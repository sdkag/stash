import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
// ]import SignupFormPage from "./components/FormsSignupFormPage";
// import LoginFormPage from "./components/Forms/LoginFormPage";
import * as takeNoteActions from "./store/takeNote";
import MainContent from "./components/MainContent";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home";
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
        <SideBar isSidebarOpen={isSidebarOpen} />
        <Home sessionUser={sessionUser} />
      </section>
    </div>
  );
}

export default function AppWrapper() {
  const dispatch = useDispatch();
  return (
    <>
      <App
        onClick={(e) => {
          debugger;
          dispatch(takeNoteActions.createNote());
        }}
      />
    </>
  );
}
