import React, { useState, useEffect } from "react";

import Item from "../Search/Item";

const Menu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    menuList();
  }, []);

  const menuList = async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/complexSearch?apiKey=74140d60223e4548bd87a7085dfc4506"
    );
    console.log(response);
    const data = await response.json();
    console.log(data.results);
    setMenu(data);
  };

  console.log(menu);

  return (
    <div className="recipes-container">
      <h2>Menu Titulo por Default</h2>
      {/* {menu && menu.map((item) => {
        return (
          <div className="recipes-card">
            <h2>{item.title}</h2>
            <img src={item.image} alt={item.id} key={item.id} />
          </div>
        );
      })} */}
      {menu.map((item) => (
        <Item item={item} />
      ))}
    </div>
  );
};

export default Menu;
