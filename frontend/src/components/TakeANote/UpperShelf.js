import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as takeNoteActions from "../../store/takeNote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack as faPinned } from "@fortawesome/free-solid-svg-icons";
export default function UpperShelf() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.takeNote.title) || "";
  const isPinned = useSelector((state) => state.takeNote.isPinned);

  const togglePinned = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(takeNoteActions.togglePinned());
  };

  const handleInput = ({ target: { value } }) => {
    // setContent(value);
    dispatch(takeNoteActions.setTitle(value)); //? is this bnetter in a blur? its not really blocking
  };
  return (
    <div className="top-shelf">
      <div className="title">
        <input
          type="text"
          placeholder="Title"
          className="input-title"
          value={title}
          onChange={handleInput}
        />
      </div>
      <div className={"pin " + isPinned ? "active-icon" : ""}>
        <FontAwesomeIcon icon={faPinned} onClick={togglePinned} />
      </div>
    </div>
  );
}
