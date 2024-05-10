import React from "react";
import MenuItem from "./MenuItem";
import "./style.css";

const MenuSection = ({ name, items }) => (
    <div className="menu-column">
        <h4>{name}</h4>
        {items.map((item, index) => (
            <MenuItem key={index} {...item} />
        ))}
    </div>
);

export default MenuSection;