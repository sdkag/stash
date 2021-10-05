import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpperShelf from "./UpperShelf";
import LowerShelf from "./LowerShelf";
import MiddleShelf from "./MiddleShelf";
import * as takeNoteActions from "../../store/takeNote";

export default function TakeANote() {
  const isOpen = useSelector((state) => state.takeNote.isOpen);
  const dispatch = useDispatch();
  return (
    <div className="take-a-note">
      {isOpen && <UpperShelf />}
      <MiddleShelf />
      {isOpen && <LowerShelf />}
    </div>
  );
}
