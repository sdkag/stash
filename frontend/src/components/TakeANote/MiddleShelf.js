import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as takeNoteActions from "../../store/takeNote";
export default function MiddleShelf() {
  const content = useSelector((state) => state.takeNote.content) || "";
  const dispatch = useDispatch();
  const handleInput = ({ target: { value } }) => {
    dispatch(takeNoteActions.setContent(value));
  };

  return (
    <div className="content middle-shelf">
      <textarea
        onFocus={() => dispatch(takeNoteActions.setIsOpen(true))}
        className="textarea"
        value={content}
        placeholder="Take a note..."
        // onBlur={() => dispatch(takeNoteActions.setContent(content))}
        onChange={handleInput}
      ></textarea>
    </div>
  );
}
