import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as tabsActions from "../../store/tabs";
import { setTab } from "../../store/tabs";
import "./SideBar.css";
import { lightbulbSvg, archivedSvg } from "../../svgs";
export default function SideBar({ isSidebarOpen: isOpen }) {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabs.selectedTab);
  // const [open, toggleOpen] = useState(false);

  const handleClick = ({ target: { id } }) => {
    if (["Notes", "Archive"].includes(id)) dispatch(setTab(id));
  };
  return (
    <>
      <div
        onClick={handleClick}
        className={`${isOpen ? "sidebar sidebar-open" : "sidebar"}`}
      >
        <ul className="sidebar-links">
          <li
            onClick={() => {
              if (selectedTab !== "notes")
                dispatch(tabsActions.setTab("notes"));
            }}
            id="Notes"
            className={selectedTab === "Notes" ? "selectedTab" : ""}
          >
            <div className="sidebar_link">
              {/* <FontAwesomeIcon icon={faLightbulb} /> */}
              {lightbulbSvg}
              {isOpen && <div to="/">Notes</div>}
            </div>
          </li>
          <li
            onClick={() => {
              if (selectedTab !== "archived")
                dispatch(tabsActions.setTab("archived"));
            }}
            id="Archive"
            className={selectedTab === "Archive" ? "selectedTab" : ""}
          >
            <div className="sidebar_link archived">
              {/* <FontAwesomeIcon icon={faArchive} /> */}
              {archivedSvg}
              {isOpen && <div to="/">Archive</div>}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
