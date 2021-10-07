import React from "react";
import { useSelector } from "react-redux";
// import styles from "./Note.css";
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
    <div className={"notes-note"}>
      {/* <i class="far fa-check-square"></i> light mode */}
      <div className={"notes-topBar"}>
        <button className={"notes-check"}>
          <FontAwesomeIcon icon={faCheckCircle} />
        </button>
        <button className={"notes-pin"}>
          <FontAwesomeIcon icon={faPinned} />
        </button>
      </div>

      {/*dark mode*/}
      <div className={"notes-topBar"}>
        <h3 className={"notes-title"}>{note.title}</h3>
      </div>
      <p className={"notes-content"}>{note.content}</p>
      <div className={"notes-iconRow"}>
        <button className={"notes-archive"}>
          <FontAwesomeIcon icon={faArchive} />
        </button>
        <button className={"notes-palette"}>
          <FontAwesomeIcon icon={faPalette} />
        </button>
      </div>
    </div>
  ) : null;
}
