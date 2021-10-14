import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as takeNoteActions from "../../store/takeNote";
import { paletteSvg, archivedSvg } from "../../svgs";
import PaletteDropdown from "./PaletteDropdown";
export default function LowerShelf() {
  const isOpen = useSelector((state) => state.takeNote.isOpen);

  const dispatch = useDispatch();
  const toggleArchived = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(takeNoteActions.toggleArchived());
  };
  const [paletteOpen, setPaletteOpen] = useState(false);
  const isArchived = useSelector((state) => state.takeNote.isArchived);
  const color = useSelector((state) => state.takeNote.color);
  const openPalette = (e) => {
    e.preventDefault();
    setPaletteOpen(true);
  };
  return isOpen ? (
    <div className="lower-shelf">
      <div className="active-buttons">
        <div className="icons">
          {/*onHoever, opens a 3/4 modal, use click and sumbit color*/}
          <div className="palette-container">
            <button onClick={openPalette} className="palette-button">
              {paletteSvg}
            </button>

            <div className="palette-dropdown ">
              {paletteOpen && <PaletteDropdown />}
            </div>
          </div>
          <div
            id="archive"
            className={"archive  " + isArchived ? "active-icon" : ""}
            onClick={toggleArchived}
          >
            {archivedSvg}
          </div>
        </div>
        <button
          className="close"
          onClick={(e) => {
            e.preventDefault();
            // dispatch(closeModal);
            dispatch(takeNoteActions.createNote()); //closeForm. grab All of State. post to backed.
          }}
        >
          Close
        </button>
      </div>
    </div>
  ) : null;
}
