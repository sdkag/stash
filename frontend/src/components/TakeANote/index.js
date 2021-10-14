import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import UpperShelf from "./UpperShelf";
import LowerShelf from "./LowerShelf";
import MiddleShelf from "./MiddleShelf";
import * as takeNoteActions from "../../store/takeNote";

export default function TakeANote() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.takeNote.isOpen);

  useEffect(() => {
    if (!isOpen) return;

    const createNote = (e) => {
      dispatch(takeNoteActions.createNote());
    };

    document.addEventListener("click", createNote);

    const cleanup = () => document.removeEventListener("click", createNote);
    return cleanup;
  }, [isOpen, dispatch]);

  return (
    <div className="take-a-note">
      <UpperShelf />
      <MiddleShelf />
      <LowerShelf />
    </div>
  );
}
