import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
export default function NotesContainer() {
  const noteIds = useSelector((state) => state.notes.allIds) || [];

  return (
    <>
      <h1>Notes Container</h1>
      {noteIds.map((noteId) => (
        <Note key={noteId} note={noteId} />
      ))}
    </>
  );
}
