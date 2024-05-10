import React from 'react';
import './style.css';

const ServiceBox = ({ imgSrc, title, description, link }) => {
    return (
        <div className="box">
            <img src={imgSrc} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

export default ServiceBox;