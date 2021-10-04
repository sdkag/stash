import React from "react";
import NotesContainer from "./NotesContainer";
import { useSelector } from "react-redux";
export default function NotesWrapper({ selectedTab: slower }) {
  const selectedTab = useSelector((state) => state.tabs.selectedTab); //?which is better this or status in NotesWrapper.js
  return (
    <>
      {selectedTab === "Archive" && <NotesContainer slice={["Archive"]} />}
      {selectedTab === "Notes" && (
        <>
          <NotesContainer selected={["Pinned", "Notes"]} />
        </>
      )}
    </>
  );
}
