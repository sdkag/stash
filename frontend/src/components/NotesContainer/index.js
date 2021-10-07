import React from "react";
import { useSelector } from "react-redux";
import Note from "./Note";
import "./Note.css";
import CreateNoteInput from "../TakeANote";



function Notes({noteIds}){

  return noteIds ?  <div className="notes-section">
  <title>{selectedTab}</title>
  {noteIds.map((noteId) => <Note key={noteId} noteId={noteId} />)}
</div> : null

}


export default function NotesContainer({ selectedTab }) {
  const noteSliceIds = useSelector(
    (state) => state.notes.byStatus[selectedTab]
  );
  const pinnedNotesIds = useSelector((state) => state.notes.byStatus.pinned);
  const Section =
    selectedTab === "archived" ? (
      <>
        <h2>Archived Notes</h2>
      </>
    ) : (
      <div className="notes sections">
          {pinnedNotesIds.length > 0 && <Pinned pinnedNotesIds={pinnedNotesIds}/>}
          {noteSliceIds && noteSliceIds.length > 0 && <
          }
      </div>
      </div>
    );

  return (
    <>
      <CreateNoteInput />
      {Section}
    </>
  );
}
