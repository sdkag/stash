import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotesContainer from "./NotesContainer";
import { getNotes } from "../store/notes";
export default function Home({ sessionUser }) {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.session.user) || null;
  const selectedTab = useSelector((state) => state.tabs.selectedTab);
  // const notes = useSelector((state) => state.notes.notes);
  return (
    <>
      <h1>Home</h1>
      {/* {user && <h4>Please login to get to the Stash</h4>} */}``
      <NotesContainer selectedTab={selectedTab} />
    </>
  );
}
