import React, { useState } from 'react';
import './style.css';
import Modal from './Modal';

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal(true);
  };
  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {showModal ? <Modal setShowModal={setShowModal} /> : null}
    </div>
  );
}
