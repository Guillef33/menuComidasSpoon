import React, { useState }from "react";

import "./list.css";
import Modal from '../Modal/Modal'

const Item = ({ item  }) => {
  
  const [showModal, setShowModal] = useState(false);
  const [onClose, setOnClose] = useState(false);

    let localMenu;
    if (localStorage.getItem("Nuevo Plato en el Menu")) {
      localMenu = JSON.parse(localStorage.getItem("Nuevo Plato en el Menu"));
    } else {
      console.log("No hay nada en el storage");
    }

    const [cantidad, setCantidad] = useState(1);

    const [platoElegido, setPlatoElegido] = useState({
      title: "",
      platosEnMenu: localMenu ? localMenu : [],
      metodo: "agregar",
    });

      const validarRepetidos = (title, platosEnMenu) => {
        let response = -1;
        title.forEach((el, index) => {
          if (el.title.toUpperCase() === platosEnMenu.toUpperCase()) {
            response = index;
          }
        });
        return response;
      };

  /// Revisar
  function handleSubmit(e) {
    e.preventDefault();
    if (platoElegido.length >= 0) {
      if (!platoElegido.title || platoElegido.title === " ") {
        alert("Debes agregar un titulo");
      } else if (
        validarRepetidos(platoElegido.platosEnMenu, platoElegido.title) !== -1
      ) {
        alert("Ese regalo esta repetido");
      } else {
        let newContainer = platoElegido.platosEnMenu;
        newContainer[newContainer.length] = {
          id: platoElegido.length + 1,
          title: platoElegido.title,
          cantidad: cantidad,
          metodo: "agregar",
        };
        setPlatoElegido({
          ...platoElegido,
          platosEnMenu: newContainer,
          title: "",
          metodo: "agregar",
        });

        localStorage.setItem(
          "Nuevo plato en el Menu",
          JSON.stringify(newContainer)
        );
      }
    }
  }

  return (
    <div className="recipes-card">
      <h2>{item.title}</h2>
      <img
        src={item.image}
        alt={item.id}
        key={item.id}
        className="image-card"
        onClick={() => setShowModal(true)}
      />
      <input type="submit" value="Agrega al menu" autoFocus />
      {showModal && (
        <Modal
          onClose={() => console.log("Cierro")}
          showModal={showModal}
          item={item}
          setShowModal={setShowModal}
        />
      )}
    </div>
  );
};

export default Item;
