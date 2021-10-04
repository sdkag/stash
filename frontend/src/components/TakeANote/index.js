import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { UpperShelf, MiddleShelf, LowerShelf } from "./TakeNote";
import * as takeNoteActions from "../../store/takeNote";

export default function TakeANote() {
  const isOpen = useSelector((state) => state.takeNote.isOpen);
  const dispatch = useDispatch();
  return (
    <div className="take-a-note">
      {isOpen && <UpperShelf />}
      <MiddleShelf
        onClick={() => {
          //useRef to focus on textarea
          dispatch(takeNoteActions.openTakeNote());
        }}
      />
      {isOpen && <LowerShelf />}
    </div>
  );
}
