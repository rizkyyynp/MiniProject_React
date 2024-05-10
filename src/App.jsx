import React from "react";
import Navlist from "./components/Navbar/Navlist";
import Hero from "./components/Hero/Index";
import AboutUs from "./components/Aboutus/Index";
import ServiceList from "./components/Layanan/ServiceList";
import ImageGallery from "./components/Gallery/ImageGallery";
import { images } from "./data/ImageData";
import Menu from "./components/Menu/Menu";
import Footer from "./components/Footer/Footer";
import { company, links, contact, about } from "./data/dataFooter";

const App = () => {
  const appContainer = {
  backgroundColor: '#007d48',
  }
  const sectionStyle = {
    paddingBottom: '100px',
    paddingTop: '50px',
    backgroundImage: 'url(https://pointcoffee.id/images/bg-abstract.png)',
    backgroundColor: '#fff',
  };

  const headerStyle = {
    textAlign: 'center',
    paddingBottom: '25px',
    color: '#007d48',
    textShadow: '0 5px 10px rgba(0, 0, 0, 0.2)',
    fontSize: '50px',
  };
  return (
    <div className="app-container" style={appContainer}>
      <Navlist />
      <Hero />
      <AboutUs />
      <ServiceList />
      <section style={sectionStyle}>
        <h1 style={headerStyle}>Gallery</h1>
        <ImageGallery images={images} />
      </section>
      <Menu />
      <Footer company={company} links={links} contact={contact} about={about} />
    </div>
  )
}

export default App;