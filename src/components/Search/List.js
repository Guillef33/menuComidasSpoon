import React from 'react';

import './list.css'

import Item from './Item'

const List = ({ platosBusqueda }) => {
  return (
    <div className="recipes-container">
      {platosBusqueda.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default List;