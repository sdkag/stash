import React, { useState } from "react";
import {useDispatch, useSelector} from 'react-redux'
import { TopShelf, MiddleShelf, BottomShelf } from "./TakeNote";
import {createNote} from  '../..

export default function TakeANote() {
  const isOpen = useSelector((state) => state.takeNote.isOpen);
  const dispatch= useDispatch()
  return (
    <div className="take-a-note">
      {isOpen && <TopShelf />}
      <MiddleShelf onClick={() => dispatch(createNote())} />
      {isOpen && <BottomShelf />}
    </div>
  );
}
