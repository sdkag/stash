import React, { useState } from "react";
import { TopShelf, MiddleShelf, BottomShelf } from "./TakeNote";

export default function TakeANote() {
  const { isActive, setIsActive } = useState(false);
  return (
    <div className="take-a-note">
      {isActive && <TopShelf />}
      <MiddleShelf onClick={() => setIsActive(true)} />
      {isActive && <BottomShelf />}
    </div>
  );
}
