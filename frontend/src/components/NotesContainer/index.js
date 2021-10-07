import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import "./Note.css";
import CreateNoteInput from "../TakeANote";
import { mapIdsToComponents } from "../../utils";

export default function NotesContainer({ selectedTab }) {
  const noteIds = useSelector((state) => state.notes.byStatus[selectedTab]);
  const pinnedNoteIds = useSelector((state) => state.notes.byStatus.pinned);
  const archivedNoteIds = useSelector((state) => state.notes.byStatus.archived);

  return (
    <>
      <CreateNoteInput />
      {selectedTab === "archived" ? (
        <div className="archived mainpage">
          <h2>Archived Notes</h2>
          {mapIdsToComponents(archivedNoteIds, Note)}
        </div>
      ) : (
        <div className="notes mainpage">
          {mapIdsToComponents(noteIds, Note, "notes")}
          {mapIdsToComponents(pinnedNoteIds, Note, "pinned")}
        </div>
      )}
    </>
  );
}
