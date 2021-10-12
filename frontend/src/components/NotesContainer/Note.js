import React from "react";
import { useSelector } from "react-redux";
// import styles from "./Note.css";

export default function Note({ entityId: noteId }) {
  const note = useSelector((state) => state.notes);
  const singleNote = note.byId[parseInt(noteId)];

  console.log("this is a not", note, singleNote);
  return note ? <h1> Note</h1> : null;
}
