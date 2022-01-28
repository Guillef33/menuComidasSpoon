import React from "react";

import "./Modal.css";

function Modal({ item, showModal, setShowModal, onClose }) {
  if (!showModal) {
    // si Show es falso, retorno nulo, no existe, no retorna nada.
    return null;
  }

  return (
    <div className="modal-container">
      <div className="addRegaloEnModal">
        <h2>{item.title}</h2>
        <img
          src={item.image}
          alt={item.id}
          key={item.id}
          className="image-card"
          onClick={() => setShowModal(true)}
        />

        <button className="button-cerrar" onClick={() => setShowModal(false)}>
          Cerrar este modal
        </button>
      </div>
    </div>
  );
}

export default Modal;
