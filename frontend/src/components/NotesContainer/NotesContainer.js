import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";

export default function NotesContainer() {
  const noteIds = useSelector((state) => state.notes.notes);

  console.log(noteIds);
  noteIds && console.log(noteIds);
  return (
    <>
      <h1>Notes Container</h1>
      {noteIds.length &&
        noteIds.map((noteId) => <Note key={noteId} noteId={noteId} />)}
    </>
  );
}
