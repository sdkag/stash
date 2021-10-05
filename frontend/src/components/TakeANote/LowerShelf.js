import React from "react";
import { useDispatch, useSelector } from "react-redux";
import * as takeNoteActions from "../../store/takeNote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload as faArchive,
  faPalette,
} from "@fortawesome/free-solid-svg-icons";

export default function LowerShelf() {
  const dispatch = useDispatch();
  const toggleArchived = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(takeNoteActions.toggleArchived());
  };
  const isArchived = useSelector((state) => state.takeNote.isArchived);
  const color = useSelector((state) => state.takeNote.color);
  return (
    <div className="lower-self">
      <div className="active-buttons">
        <div className="icons">
          <FontAwesomeIcon icon={faPalette} />
          {/*onHoever, opens a 3/4 modal, use click and sumbit color*/}
          <FontAwesomeIcon
            icon={faArchive}
            id="archive"
            classList={isArchived ? "active-icon" : ""}
            onClick={toggleArchived}
          />
        </div>
        <button
          className="close"
          onClick={(e) => {
            e.preventDefault();
            debugger;
            dispatch(takeNoteActions.createNote()); //closeForm. grab All of State. post to backed.
          }}
        >
          Close
        </button>
      </div>
    </div>
  );
}
