import React from "react";
import { useDispatch } from "react-redux";
import * as modalActions from "../../store/modal";
export default function CloseModalBtn() {
  const dispatch = useDispatch();

  return (
    <button
      onClick={() => dispatch(modalActions.setIsOpen(false))}
      className="close-modal-btn"
    >
      Close
    </button>
  );
}
