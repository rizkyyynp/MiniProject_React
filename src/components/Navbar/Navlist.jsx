import { useState } from "react";
import './style.css';
import LogoImage from '../../assets/point.png';

const Navlist = () => {
    const NavItems = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },  
        {
            name: "Contact",
            path: "/contact" 
        },
        {
            name: "Menu",
            path: "/menu"
        }
    ];

    const [isOpen, setIsOpen] = useState(false);

    const toogleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section>
            <nav className="navbar">
                <div className="navbar-logo">
                    <img src={LogoImage} alt="logo" />
                </div>
                <div className={`navbar-menu ${isOpen ? "navbar-menu-open" : ""}`}>
                    {NavItems.map((item, index) => (
                        <a href={item.path} key={index} className="navbar-link">{item.name}</a>
                    ))}
                </div>
                <div className={`navbar-toggle ${isOpen ? 'open' : ''}`} onClick={toogleMenu}>
                    <div className="bar"></div>
                    <div className="bar"></div>
                    <div className="bar"></div>
                </div>

            </nav>
        </section>
    );
};

export default Navlist;