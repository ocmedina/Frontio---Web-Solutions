import { motion } from "framer-motion";
import {
  Handshake,
  BadgeCheck,
  Laptop2,
  Users,
  Target,
  Zap,
} from "lucide-react";

const AboutUs = () => {
  const values = [
    {
      icon: <Laptop2 className="w-10 h-10 text-blue-600" />,
      title: "Soluciones Personalizadas",
      text: "Cada proyecto es único. Creamos soluciones a medida que se adaptan perfectamente a tus necesidades y objetivos de negocio.",
      color: "blue",
    },
    {
      icon: <Handshake className="w-10 h-10 text-green-600" />,
      title: "Compromiso Total",
      text: "Tu éxito es nuestro éxito. Nos involucramos en cada etapa del proyecto y te acompañamos hasta alcanzar tus metas.",
      color: "green",
    },
    {
      icon: <BadgeCheck className="w-10 h-10 text-purple-600" />,
      title: "Calidad Garantizada",
      text: "Código limpio, diseño impecable y performance optimizada. Cada detalle cuenta para nosotros.",
      color: "purple",
    },
    {
      icon: <Users className="w-10 h-10 text-orange-600" />,
      title: "Trabajo Colaborativo",
      text: "Trabajamos codo a codo contigo. Tus ideas y feedback son fundamentales en nuestro proceso creativo.",
      color: "orange",
    },
    {
      icon: <Target className="w-10 h-10 text-red-600" />,
      title: "Resultados Medibles",
      text: "Nos enfocamos en métricas que importan: conversiones, ventas y crecimiento real de tu negocio.",
      color: "red",
    },
    {
      icon: <Zap className="w-10 h-10 text-yellow-600" />,
      title: "Entrega Ágil",
      text: "Metodologías ágiles que nos permiten entregar resultados rápidos sin sacrificar calidad.",
      color: "yellow",
    },
  ];

  return (
    <section id="about" className="relative py-24 px-4 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-blue-50"></div>
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(203 213 225) 1px, transparent 0)`,
          backgroundSize: "40px 40px",
        }}
      ></div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4">
              Sobre Nosotros
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Tu <span className="gradient-text">Partner Digital</span> de
            Confianza
          </motion.h2>

          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
          >
            Somos un equipo apasionado por la tecnología y el diseño.
            Transformamos ideas en soluciones digitales que impulsan el
            crecimiento de tu negocio. Desde el concepto inicial hasta el
            lanzamiento y más allá.
          </motion.p>
        </div>

        {/* Stats Bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            { value: "3+", label: "Años de Experiencia", icon: "📅" },
            { value: "50+", label: "Proyectos Completados", icon: "🚀" },
            { value: "100%", label: "Clientes Satisfechos", icon: "⭐" },
            { value: "24/7", label: "Soporte Disponible", icon: "💬" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200 hover:scale-105 duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl shadow-md hover:shadow-2xl p-8 transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Hover Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="relative">
                {/* Icon Container */}
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{item.text}</p>

                {/* Decorative Line */}
                <div className="mt-6 h-1 w-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full group-hover:w-full transition-all duration-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          className="mt-20 text-center bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 2px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>

          <div className="relative">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Listo para Empezar tu Proyecto?
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Contanos tu idea y juntos la convertiremos en realidad. Primera
              consulta sin cargo.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="#contact"
                className="inline-block bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
              >
                Hablemos de tu Proyecto
              </a>
              <a
                href="#services"
                className="inline-block bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold text-lg border-2 border-white/30 hover:border-white/50 transition-all"
              >
                Ver Nuestros Servicios
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
