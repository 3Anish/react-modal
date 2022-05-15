import React, { useRef } from 'react';

import ReactDom from 'react-dom';

const Modal = ({ setShowModal }) => {
  const modalRef = useRef();
  const closeModal = (e) => {
    if (e.target === modalRef.current) {
      setShowModal(false);
    }
  };

  return ReactDom.createPortal(
    <div className="container" ref={modalRef} onClick={closeModal}>
      <div>This is a modal</div>
      <button
        onClick={() => {
          setShowModal(false);
        }}
      >
        Close
      </button>
    </div>,
    document.getElementById('portal')
  );
};

export default Modal;
