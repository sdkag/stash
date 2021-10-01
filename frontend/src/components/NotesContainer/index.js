import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import "./Note.css";

export default function NotesContainer({ status }) {
  const noteIds = useSelector((state) => state.notes[status]);

  return (
    <>
      <h1>Notes Container</h1>
      {noteIds.length &&
        noteIds.map((noteId) => <Note key={noteId} noteId={noteId} />)}
    </>
  );
}
