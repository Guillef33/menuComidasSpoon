import React, { useState, useEffect } from "react";
import Menu from "../Menu/Menu";

import List from "./List";

const Fetch = (props) => {

  const [platosBusqueda, setPlatosBusqueda] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    searchProducts();
  }, []);

  const searchProducts = async (e) => {
    e.preventDefault();
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506&number=10&query=${input}&intolerances="gluten&number=4"` // buscamos con intolerancia al gluten
    );
    const data = await response.json();
    console.log(data.results);
    setPlatosBusqueda(data.results);
    console.log(platosBusqueda);
  };

  const handleOnChange = (el) => {
    console.log(el.target.value);
    let query = el.target.value;
    setInput(query);
  };

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
      {platosBusqueda ? <List platosBusqueda={platosBusqueda} /> : <Menu />}
      <div>
        <Menu />
      </div>
    </>
  );
};

export default Fetch;
