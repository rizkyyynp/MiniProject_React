import React from 'react';
import ServiceBox from './ServiceBox';
import { servicesData } from '../../data/Services';
import './style.css';

const ServiceList = () => {
    return (
        <div className="container">
            <h1 className="heading">Our Services</h1>
            <div className="box-container">
                {servicesData.map((service, index) => (
                    <ServiceBox
                        key={index}
                        imgSrc={service.imgSrc}
                        title={service.title}
                        description={service.description}
                    />
                ))}
            </div>
        </div>
    );
};

export default ServiceList;