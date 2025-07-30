
import "./index.css";
import Hero from "./components/Hero";
import {Header}from"./components/Header";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Technology from "./components/Tecnologias";
import TechIcons from "./components/Icons";
import Contact from "./components/contact";

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
      <footer className="text-center py-6 text-sm text-gray-600 dark:text-gray-400 border-t dark:border-gray-700">
        © {new Date().getFullYear()} Frontio Web Solutions. Todos los derechos reservados.
      </footer>
    </div>
  );
}

export default App;