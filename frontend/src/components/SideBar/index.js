import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setTab } from "../../store/tabs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faDownload as faArchive,
} from "@fortawesome/free-solid-svg-icons";
import "./SideBar.css";
export default function SideBar({ isSidebarOpen: isOpen }) {
  const dispatch = useDispatch();
  const selectedTab = useSelector((state) => state.tabs.selectedTab);
  // const [open, toggleOpen] = useState(false);

  const handleClick = ({ target: { id } }) => {
    if (["Notes", "Archive"].includes(id)) dispatch(setTab(id));
  };
  return (
    <>
      <h1>Sidebar</h1>
      <div
        onClick={handleClick}
        className={`${isOpen ? "sidebar sidebar-open" : "sidebar"}`}
      >
        <ul className="sidebar-links">
          <li
            id="Notes"
            className={selectedTab === "Notes" ? "selectedTab" : ""}
          >
            <div className="sidebar_link">
              <FontAwesomeIcon icon={faLightbulb} />
              {isOpen && <div to="/">Notes</div>}
            </div>
          </li>
          <li
            id="Archive"
            className={selectedTab === "Archive" ? "selectedTab" : ""}
          >
            <div className="sidebar_link">
              <FontAwesomeIcon icon={faArchive} />
              {isOpen && <div to="/">Archive</div>}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
