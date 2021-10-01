import React from "react";
import NotesContainer from "./NotesContainer";
import { useSelector } from "react-redux";
export default function NotesWrapper({ status: slowerStatus }) {
  const status = useSelector((state) => state.status.current); //?which is better this or slowerStatus... more rerenders

  return (
    <>
      {status === "Archive" && <NotesContainer status={"Archive"} />}
      {status === "NotesContainers" && (
        <>
          {" "}
          <NotesContainer status={"Pinned"} />
          <NotesContainer status={"Notes"} />
        </>
      )}
    </>
  );
}
