import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import './foot.css';


const FooterLinks = ({ links }) => {
    return (
        <p className="footer-links">
            {links.map((link, index) => (
                <React.Fragment key={index}>
                    <a href={link.href}>{link.text}</a>
                    {index < links.length - 1 && ' | '}
                </React.Fragment>
            ))}
        </p>
    );
};

const FooterContact = ({ contact }) => {
    return (
        <div className="footer-center">
            <div>
                <i className="fa fa-map-marker" />
                <p>
                    <span>{contact.location.city}</span> {contact.location.state}
                </p>
            </div>

            <div>
                <i className="fa fa-phone" />
                <p>{contact.phone}</p>
            </div>

            <div>
                <i className="fa fa-envelope" />
                <p>
                    <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </p>
            </div>
        </div>
    );
};

const FooterRight = ({ about }) => {
    return (
        <div className="footer-right">
            <p className="footer-company-about">
                <span>{about.title}</span>
                {about.description}
            </p>
        </div>
    );
};

const Footer = ({ company, links, contact, about }) => {
    return (
        <footer className="footer-distributed">
            <div className="footer-left">
                <h3>
                    {company.name}
                </h3>

                <FooterLinks links={links} />

                <p className="footer-company-name">
                    Copyright © {company.year} <strong>{company.name}</strong> All rights reserved
                </p>
            </div>

            <FooterContact contact={contact} />

            <FooterRight about={about} />
        </footer>
    );
};

export default Footer;