import React, { useState, useEffect } from "react";

import Item from "../Search/Item";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    menuList();
  }, []);

  const menuList = async () => {
    const response = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506`
    );
    console.log(response);
    const data = await response.json();
    console.log(data.results);
    setMenu(data.results);
  };

  console.log(menu);

  return (
    <div className="recipes-container">
      {menu.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default Menu;
