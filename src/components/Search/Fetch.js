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
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506&number=10&query=${input}&intolerances="gluten"` // buscamos con intolerancia al gluten
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
        />
        <button>Search</button>
      </form>
      {platosBusqueda ? (
        <List platosBusqueda={platosBusqueda} />
      ) : (
        <Menu /> // 'No se han encotrado resultados 

      )}
    </>
  );
};

export default Fetch;
