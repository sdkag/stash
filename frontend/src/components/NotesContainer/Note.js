import React from "react";
import { useSelector, useDispatch } from "react-redux";
// import styles from "./Note.css";
import CloseModalBtn from "../Buttons/CloseModalBtn";
import PinnedBtn from "../Buttons/PinnedBtn";

export default function Note({ entityId: noteId }) {
  const note = useSelector((state) => state.notes);
  const singleNote = note.byId[parseInt(noteId)];

  console.log("this is a not", note, singleNote);
  return note ? (
    <div className="single-note-container">
      <CloseModalBtn />
      <PinnedBtn isPinned={note.status === "pinned"} noteId={noteId} />
      <div className="single-note-title">{note.title}</div>
      <div className="single-note-content">{note.content}</div>
    </div>
  ) : null;
}
