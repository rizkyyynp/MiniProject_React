import React from "react";
import MenuSection from "./MenuSection";
import MenuData from '../../data/MenuData';
import './style.css';

const Menu = () => (
    <section className="menu-section">
    <div className="main">
        <div className="section-title">
            <h2>{MenuData.title}</h2>
            <p>{MenuData.description}</p>
        </div>
            <div className="menus">
                {MenuData.sections.map((section, index) => (
                    <MenuSection key={index} {...section} />
                ))}
            </div>
    </div>
    </section>
);

export default Menu;