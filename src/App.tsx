import "./index.css";
import Hero from "./components/Hero";
import { Header } from "./components/Header";
import Services from "./components/Services";
import FrontStockSection from "./components/FrontStock";
import ChatBotsSection from "./components/ChatBots";
import AboutUs from "./components/AboutUs";
import Technology from "./components/Tecnologias";
import TechIcons from "./components/Icons";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <div className="bg-white text-black font-sans">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <Hero />

      {/* Servicios Overview */}
      <Services />

      {/* FrontStock - Sistema de Stock */}
      <FrontStockSection />

      {/* ChatBots Inteligentes */}
      <ChatBotsSection />

      {/* About Us */}
      <AboutUs />

      {/* Proyectos */}
      <Projects />

      {/* Tecnologías */}
      <Technology />

      {/* Icons */}
      <TechIcons />

      {/* Contacto */}
      <Contact />

      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
