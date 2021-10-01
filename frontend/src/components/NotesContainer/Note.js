import React from "react";
import { useSelector } from "react-redux";
import styles from "./Notes.css";

export default function Note({ noteId }) {
  const note = useSelector((state) => state.notes.byId[noteId]);
  return note ? (
    <>
      <div className="note-holder">
        <i class="fas fa-thumbtack"></i>
        {/* <i class="far fa-check-square"></i> light mode */}
        <i class="fas fa-check-square"></i>
        {/*dark mode*/}
        <h3 className={styles.title}>{note.title}</h3>
        <p className={styles.content}>{note.content}</p>
        <div className={styles.iconRow}>
          <i className="fas fa-palette"></i>
          <i className="fas fa-archive"></i>
        </div>
        {JSON.stringify(note)}
      </div>
    </>
  ) : null;
}
