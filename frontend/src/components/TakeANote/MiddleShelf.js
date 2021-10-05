import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as takeNoteActions from "../../store/takeNote";
export default function MiddleShelf() {
  const [localContent, setLocalContent] = useState("");
  // const content = useSelector((state) => state.takeNote.content);
  const dispatch = useDispatch();

  return (
    <div className="content middle-shelf">
      <textarea
        onFocus={() => dispatch(takeNoteActions.setIsOpen(true))}
        className="textarea"
        value={localContent}
        placeholder="Take a note..."
        onBlur={() => dispatch(takeNoteActions.setContent(localContent))}
        onChange={({ target: { value } }) => setLocalContent(value)}
      ></textarea>
    </div>
  );
}
