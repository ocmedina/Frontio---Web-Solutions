
import "./index.css";
import Hero from "./components/Hero";
import {Header}from"./components/Header";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Technology from "./components/Tecnologias";
import TechIcons from "./components/Icons";
import Contact from "./components/contact";
import Footer from "./components/Footer";

function App() {
  return (
< div className="bg-white text-black font-sans">

      {/* Header */}
      <Header />
  
      {/* Hero Section */}
      <Hero />

      {/* Servicios */}
      <Services />

      {/* About Us */}
      <AboutUs />
      {/* Tecnologías */}
      <Technology />

      {/* Icons */}
      <TechIcons />

      {/* Contacto */}
      <Contact />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;