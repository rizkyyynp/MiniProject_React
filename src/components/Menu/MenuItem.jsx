import React from 'react';
import './style.css';

const MenuItem = ({ title, price, description, image }) => (
    <div className="single-menu">
        <img src={image} alt={title} />
        <div className="menu-content">
            <h5>
                {title} <span>{price}</span>
            </h5>
            <p>{description}</p>
        </div>
    </div>
);

export default MenuItem;