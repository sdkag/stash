import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import "./Note.css";

export default function NotesContainer({ selected = [] }) {
  const selectNoteIds = (state) =>
    Object.entries(state.notes.byStatus).reduce(
      (selectedSlices, [key, slice]) =>
        selected.includes(key)
          ? selectedSlices.concat(...slice)
          : selectedSlices,
      []
    );
  // const noteIds = useSelector((state) => state.notes[status]) || [];
  const noteSlicesIds = useSelector((state) => selectNoteIds(state));

  return (
    <>
      <h1>Notes Container</h1>
      {noteSlicesIds.map(
        (slice, idx) =>
          slice.length > 0 && (
            <section>
              <title>{selected[idx]}</title>
              {slice.map((noteId) => (
                <Note key={noteId} noteId={noteId} />
              ))}
            </section>
          )
      )}
    </>
  );
}
