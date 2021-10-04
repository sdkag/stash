import React from "react";
import { useDispatch, useSelector } from "react-redux";

export default function MiddleShelf() {
  const content = useSelector((state) => state.takeNote.noteState.content);

  return (
    <div className="content middle-shelf">
      <textarea
        className="textarea"
        value={content ? content : ""}
        placeholder="Take a note..."
      ></textarea>
    </div>
  );
}
