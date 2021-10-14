import React, { useContext, useRef, useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ReactDOM from "react-dom";
import * as modalActions from "../store/modal";
import "./Modal.css";

const ModalContext = React.createContext();

export function ModalProvider({ children }) {
  const modalRef = useRef();
  const [value, setValue] = useState();

  useEffect(() => {
    setValue(modalRef.current);
  }, []);

  return (
    <>
      <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
      <div ref={modalRef} />
    </>
  );
}

export function Modal({ children }) {
  const dispatch = useDispatch();
  const modalNode = useContext(ModalContext);
  if (!modalNode) return null;

  return ReactDOM.createPortal(
    <div id="modal">
      <div
        id="modal-background"
        onClick={() => dispatch(modalActions.setIsOpen(false))}
      />
      <div id="modal-content">{children}</div>
    </div>,
    modalNode
  );
}
