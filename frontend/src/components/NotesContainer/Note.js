import React from "react";
import { useSelector } from "react-redux";
import styles from "./Note.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheckCircle,
  faThumbtack as faPinned,
  faDownload as faArchive,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function Note({ noteId }) {
  const note = useSelector((state) => state.notes.byId[noteId]);
  return note ? (
    <>
      <div className={styles.note}>
        {/* <i class="far fa-check-square"></i> light mode */}
        <button className={styles.check}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
        <button className={styles.pin}>
          <FontAwesomeIcon icon={faPinned} />
        </button>

        {/*dark mode*/}
        <div className={styles.titleHolder}>
          <h3 className={styles.title}>{note.title}</h3>
        </div>
        <p className={styles.content}>{note.content}</p>
        <div className={styles.iconRow}>
          <button className={styles.archive}>
            <FontAwesomeIcon icon={faArchive} />
          </button>
          <button className={styles.palette}>
            <FontAwesomeIcon icon={faPalette} />
          </button>
        </div>
        {JSON.stringify(note)}
      </div>
    </>
  ) : null;
}
