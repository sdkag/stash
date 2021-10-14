import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { pinnedSvg } from "../../svgs";
import * as takeNoteActions from "../../store/takeNote";
export default function UpperShelf() {
  const dispatch = useDispatch();
  const title = useSelector((state) => state.takeNote.title) || "";
  const isPinned = useSelector((state) => state.takeNote.isPinned);

  const togglePinned = (e) => {
    // e.stopPropagation();
    // e.preventDefault();
    dispatch(takeNoteActions.togglePinned(null));
  };

  const handleInput = ({ target: { value } }) => {
    // setContent(value);
    dispatch(takeNoteActions.setTitle(value)); //? is this bnetter in a blur? its not really blocking (i'm thinking a useState would trigger a rerender every onChange, while this... literally does that same thing :())
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
      <button
        type="button"
        onClick={togglePinned}
        className={"pin " + isPinned ? "active-icon" : ""}
      >
        {isPinned ? "pinned" : "unpinned"}
        {pinnedSvg}
      </button>
    </div>
  );
}
