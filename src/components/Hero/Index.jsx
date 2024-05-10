import React from "react";
import Button from "../Button/Button";
import './style.css';

const Hero = () => {
    return(
        <section className="hero-section">
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1>Welcome to Point Coffee</h1>
                    <h2>Rasakan Kelezatan Kopi, Temukan Harmoni di Setiap Tegukan.</h2>
                    <Button>Order Now</Button>
                </div>
            </div>
        </section>
    )
}

export default Hero;