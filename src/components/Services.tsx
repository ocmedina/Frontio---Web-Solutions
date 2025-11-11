import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  CubeIcon,
  ChatBubbleLeftRightIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <GlobeAltIcon className="h-12 w-12 text-blue-600 mx-auto mb-4" />,
      title: "Páginas Web Profesionales",
      description:
        "Diseñamos y desarrollamos sitios web modernos, responsivos y optimizados para SEO. Landing pages, portfolios, sitios corporativos y más.",
      features: ["Diseño responsive", "SEO optimizado", "Alta velocidad"],
    },
    {
      icon: <CubeIcon className="h-12 w-12 text-indigo-600 mx-auto mb-4" />,
      title: "FrontStock - Sistema de Stock",
      description:
        "Sistema completo de gestión de inventario y stock. Controla tus productos, proveedores, ventas y reportes en tiempo real desde cualquier dispositivo.",
      features: [
        "Control de inventario",
        "Reportes en tiempo real",
        "Multi-usuario",
      ],
    },
    {
      icon: (
        <ChatBubbleLeftRightIcon className="h-12 w-12 text-purple-600 mx-auto mb-4" />
      ),
      title: "ChatBots Inteligentes",
      description:
        "Automatiza la atención al cliente con bots para WhatsApp, Instagram y tu sitio web. Respuestas instantáneas 24/7 y mejor experiencia de usuario.",
      features: [
        "Disponibilidad 24/7",
        "Multi-plataforma",
        "Respuestas automáticas",
      ],
    },
    {
      icon: (
        <CodeBracketIcon className="h-12 w-12 text-orange-600 mx-auto mb-4" />
      ),
      title: "Desarrollo a Medida",
      description:
        "Sistemas y aplicaciones web personalizadas según tus necesidades. Dashboards, CRM, gestión interna y soluciones específicas para tu negocio.",
      features: ["100% personalizado", "Escalable", "Soporte continuo"],
    },
    {
      icon: (
        <ComputerDesktopIcon className="h-12 w-12 text-pink-600 mx-auto mb-4" />
      ),
      title: "Diseño UX/UI",
      description:
        "Interfaces intuitivas y atractivas que convierten visitantes en clientes. Prototipado, diseño visual y experiencia de usuario optimizada.",
      features: ["Diseño moderno", "User-friendly", "Prototipado rápido"],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 px-4 max-w-7xl mx-auto"
      aria-labelledby="services-title"
    >
      <div className="text-center mb-16">
        <motion.h2
          id="services-title"
          className="text-4xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Nuestros Servicios
        </motion.h2>
        <motion.p
          className="text-gray-600 text-lg max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          Soluciones digitales completas para impulsar tu negocio al siguiente
          nivel
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.article
            key={index}
            className="service-card bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -8 }}
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600 text-sm mb-4 leading-relaxed">
              {service.description}
            </p>

            <ul className="space-y-2">
              {service.features.map((feature, i) => (
                <li key={i} className="text-sm text-gray-700 flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-block mt-6 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
            >
              Más información →
            </a>
          </motion.article>
        ))}
      </div>

      {/* CTA Section */}
      <motion.div
        className="mt-16 text-center bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-bold mb-3 text-gray-800">
          ¿No encontrás lo que buscás?
        </h3>
        <p className="text-gray-600 mb-6">
          Contamos con más servicios y soluciones personalizadas. Consultanos
          sin compromiso.
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
        >
          Hablemos de tu proyecto
        </a>
      </motion.div>
    </section>
  );
};

export default Services;
