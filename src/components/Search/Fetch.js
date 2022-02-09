import React, { useState, useEffect, useRef, useContext } from "react";
import Menu from "../Menu/Menu";
import { AppContext } from "../../context/AppContext";
import List from "./List";

const Fetch = ( ) => {

  const {platosBusqueda, searchProducts, handleOnChange} = useContext(AppContext)

  return (
    <>
      <form
        onSubmit={(e) => {
          searchProducts(e);
        }}
      >
        <input
          type="text"
          name="recipeName"
          onChange={(el) => handleOnChange(el)}
          className="recipe__input__search"
          placeholder="Puedes buscar ingredientes o platos en ingles. Ej: seed o pie."
        />
        <button className="recipe_buttons__bold">Buscar</button>
      </form>
      {platosBusqueda.length ? <List platosBusqueda={platosBusqueda} /> : <Menu />} 
    </>
  );
};

export default Fetch;
