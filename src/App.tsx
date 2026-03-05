import "./index.css";
import Hero from "./components/Hero";
import { Header } from "./components/Header";
import Services from "./components/Services";
import AboutUs from "./components/AboutUs";
import Technology from "./components/Tecnologias";
import Contact from "./components/contact";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import WhatsAppButton from "./components/WhatsAppButton";
import SEOHead from "./components/SEOHead";
import SocialProof from "./components/SocialProof";
import Process from "./components/Process";
import FAQ from "./components/FAQ";

const canonicalUrl = "https://www.frontio.com.ar/";
const seoTitle = "Frontio | Desarrollo Web Profesional en Argentina";
const seoDescription =
  "Creamos paginas web, landing pages y sistemas a medida para empresas en Argentina. Diseno responsive, SEO tecnico y alto rendimiento.";
const seoKeywords =
  "desarrollo web argentina, diseno web mendoza, landing pages, seo tecnico, paginas web para empresas";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Frontio Web Solutions",
  url: canonicalUrl,
  logo: "https://www.frontio.com.ar/frontio.png",
  email: "frontio.web@gmail.com",
  telephone: "+54 260 440-7734",
  sameAs: [
    "https://www.instagram.com/frontio.ar/",
    "https://www.linkedin.com/company/frontio-web-solutions",
    "https://github.com/ocmedina",
  ],
};

const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Frontio Web Solutions",
  image: "https://www.frontio.com.ar/frontio.png",
  url: canonicalUrl,
  areaServed: "AR",
  description: seoDescription,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mendoza",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    email: "frontio.web@gmail.com",
    telephone: "+54 260 440-7734",
    availableLanguage: ["es"],
  },
};

function App() {
  return (
    <div className="bg-white text-black font-sans">
      <SEOHead
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        ogImage="https://www.frontio.com.ar/frontio.png"
        url={canonicalUrl}
        canonical={canonicalUrl}
        structuredData={[organizationSchema, professionalServiceSchema]}
      />

      {/* Header */}
      <Header />

      <main>
        {/* Hero Section */}
        <Hero />

        {/* Social Proof */}
        <SocialProof />

        {/* Servicios Overview */}
        <Services />

        {/* Proyectos */}
        <Projects />

        {/* Proceso de trabajo */}
        <Process />

        {/* About Us */}
        <AboutUs />

        {/* Tecnologías */}
        <Technology />

        {/* Preguntas frecuentes */}
        <FAQ />

        {/* Contacto */}
        <Contact />
      </main>

      <WhatsAppButton />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
