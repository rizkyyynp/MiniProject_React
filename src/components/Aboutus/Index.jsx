import React from "react";
import "./style.css";
const AboutUs = () => {
    return (
        <section className="aboutus-section">
            <div className="aboutus-container">
                <img
                    className="aboutus-image"
                    src="https://images.unsplash.com/photo-1507226983735-a838615193b0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="about image"
                />
                <div className="aboutus-content">
                    <h1 className="aboutus-title">About Us</h1>
                    <p className="aboutus-paragraph">
                    Point Coffee adalah kafe modern yang menyajikan kopi premium dalam suasana yang nyaman dan ramah. Sejak 2010, kami menggunakan biji kopi terbaik dari petani lokal dan internasional, dengan barista berpengalaman yang siap membantu Anda menemukan minuman favorit Anda. Kami juga menawarkan beragam makanan ringan dan kue-kue untuk menemani kopi Anda.
                    </p>
                    <p className="aboutus-paragraph">
                    Point Coffee bukan hanya tempat untuk menikmati kopi, tapi juga pusat kegiatan komunitas. Kami menyelenggarakan lokakarya kopi, diskusi buku, dan pertunjukan musik lokal. Kami percaya bahwa kafe adalah tempat untuk berkumpul dan berkreasi. Datanglah ke Point Coffee dan rasakan sendiri keramahan kami—di mana setiap cangkir diseduh dengan cinta dan setiap kunjungan menjadi pengalaman yang menyenangkan.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
