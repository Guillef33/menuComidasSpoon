import React, { useContext } from 'react';

import './list.css'

import { AppContext } from "../../context/AppContext";


import Item from './Item'

const List = ( ) => {

    const { platosBusqueda} =
      useContext(AppContext);

  return (
    <div className="recipes-container">
      {platosBusqueda.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default List;