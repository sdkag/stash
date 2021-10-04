import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import NotesWrapper from "./NotesWrapper";
import { getNotes } from "../store/notes";
export default function Home({ sessionUser }) {
  const dispatch = useDispatch();
  // const user = useSelector((state) => state.session.user) || null;
  const slowerStatus = useSelector((state) => state.status.current); //?which is better this or status in NotesWrapper.js
  const notes = useSelector((state) => state.notes.notes);
  return (
    <>
      <h1>Home</h1>
      {/* {user && <h4>Please login to get to the Stash</h4>} */}
      <NotesWrapper status={slowerStatus} />
    </>
  );
}
