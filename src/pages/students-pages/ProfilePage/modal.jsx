import React, { useState } from "react";
import "./Modal.css";
import { IoCloseCircle } from "react-icons/io5";

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button className="close-button" onClick={onClose}>
              <IoCloseCircle size={24} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
