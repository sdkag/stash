import React from "react";
import NotesWrapper from "./NotesWrapper";
import { useSelector } from "react-redux";

export default function Home() {
  const slowerStatus = useSelector((state) => state.status.current); //?which is better this or status in NotesWrapper.js

  return (
    <>
      <h1>Home</h1>
      <NotesWrapper status={slowerStatus} />
    </>
  );
}
