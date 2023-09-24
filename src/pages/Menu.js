import React from "react";
import { MenuList } from "../helpers/menuList";

function Menu() {
  return (
    <div className="menu">
      <h1 className="menuTitle">Our Menu</h1>
      <div className="menuList">
        {MenuList.map((menuItem, key) => {
          return (
            <div className="menuItem" key={key}>
              <img src={menuItem.image} alt={menuItem.name} />
              <h2>{menuItem.name}</h2>
              <h2>{menuItem.price}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Menu;
