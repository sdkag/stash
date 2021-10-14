import React from "react";
import { pinnedSvg } from "../../svgs.js";
export default function PinnedBtn({ isPinned, togglePinned }) {
  return (
    <button className={isPinned ? "pinned" : ""} onClick={togglePinned}>
      {pinnedSvg}
    </button>
  );
}
