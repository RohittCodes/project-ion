import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, children }) => {
  return (
    <>
      {isOpen && (
        <div className="modal-overlay" onClick={onClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {children}
            <button className="close-button" onClick={onClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
