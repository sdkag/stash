import React from "react";
import { useDispatch, useSelector } from "react-redux";

import * as takeNoteActions from "../../store/takeNote";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbtack as faPinned } from "@fortawesome/free-solid-svg-icons";
export default function UpperShelf() {
  const title = useSelector((state) => state.takeNote.title);

  const pinned = useSelector((state) => state.takeNote.pinned);

  return (
    <div className="top-shelf">
      <div className="title">
        <input type="text" placeholder="Title" className="input-title" />
      </div>
      <div className="pinned">
        <FontAwesomeIcon icon={faPinned} />
      </div>
    </div>
  );
}
