import React from "react";
import { useDispatch } from "react-redux";
import { setTypeStatus } from "../../store/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLightbulb,
  faDownload as faArchive,
} from "@fortawesome/free-solid-svg-icons";

export default function SideBar() {
  const dispatch = useDispatch();

  const handleClick = ({ target: { id } }) => {
    if (["Notes", "Archive"].includes(id)) dispatch(setTypeStatus(id));
  };
  return (
    <>
      <div onClick={handleClick} className="sidebar">
        <ul className="sidebar-links">
          <li id="Notes">
            <div className="sidebar_link">
              <FontAwesomeIcon icon={faLightbulb} />
              <div to="/">Notes</div>
            </div>
          </li>
          <li id="Archive">
            <div className="sidebar_link">
              <FontAwesomeIcon icon={faArchive} />
              <div to="/">Archive</div>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
