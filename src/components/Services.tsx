import {
  ComputerDesktopIcon,
  CodeBracketIcon,
  GlobeAltIcon,
  PaintBrushIcon,
  RocketLaunchIcon,
  DevicePhoneMobileIcon,
} from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      icon: <GlobeAltIcon className="h-8 w-8 text-white" />,
      title: "Páginas Web Profesionales",
      description:
        "Sitios web modernos, rápidos y optimizados para SEO. Desde landing pages hasta sitios corporativos completos.",
      features: ["Diseño Responsive", "SEO Optimizado", "Dominio + Hosting"],
      color: "from-blue-500 to-cyan-500",
      delay: 0,
    },
    {
      icon: <DevicePhoneMobileIcon className="h-8 w-8 text-white" />,
      title: "Aplicaciones Web",
      description:
        "Desarrollo de aplicaciones web progresivas (PWA) y sistemas complejos accesibles desde cualquier dispositivo.",
      features: [
        "Funcionalidad Offline",
        "Notificaciones Push",
        "App-like Experience",
      ],
      color: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      icon: <CodeBracketIcon className="h-8 w-8 text-white" />,
      title: "Desarrollo a Medida",
      description:
        "Software personalizado para resolver problemas específicos de tu negocio. Dashboards, CRMs y sistemas de gestión.",
      features: ["100% Personalizado", "Escalable", "Soporte Dedicado"],
      color: "from-orange-500 to-red-500",
      delay: 0.2,
    },
    {
      icon: <PaintBrushIcon className="h-8 w-8 text-white" />,
      title: "Diseño UX/UI",
      description:
        "Interfaces intuitivas y atractivas centradas en la experiencia del usuario. Prototipado y diseño visual de alta calidad.",
      features: ["User Centric", "Prototipado", "Diseño Moderno"],
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: <RocketLaunchIcon className="h-8 w-8 text-white" />,
      title: "Marketing Digital",
      description:
        "Estrategias para aumentar tu visibilidad online. SEO técnico, optimización de conversión y análisis de métricas.",
      features: ["Auditoría SEO", "Google Analytics", "Optimización CRO"],
      color: "from-indigo-500 to-violet-500",
      delay: 0.4,
    },
    {
      icon: <ComputerDesktopIcon className="h-8 w-8 text-white" />,
      title: "Mantenimiento Web",
      description:
        "Mantén tu sitio seguro y actualizado. Actualizaciones de contenido, copias de seguridad y monitoreo constante.",
      features: ["Backups Diarios", "Seguridad SSL", "Soporte Prioritario"],
      color: "from-gray-600 to-gray-800",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 px-4 relative overflow-hidden bg-gray-50"
      aria-labelledby="services-title"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-purple-100/50 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-blue-600 mb-4 shadow-sm"
          >
            Nuestras Soluciones
          </motion.span>
          <motion.h2
            id="services-title"
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Servicios Diseñados para <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Hacer Crecer tu Negocio
            </span>
          </motion.h2>
          <motion.p
            className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Combinamos diseño innovador con tecnología de punta para crear
            experiencias digitales que generan resultados reales.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Border Effect on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              {/* Top Line */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`}
              ></div>

              <div className="relative">
                {/* Icon Box */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}
                >
                  {service.icon}
                </div>

                <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="space-y-3 border-t border-gray-100 pt-6">
                  {service.features.map((feature, i) => (
                    <div
                      key={i}
                      className="flex items-center text-sm text-gray-500"
                    >
                      <div
                        className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} mr-2`}
                      ></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6">¿Necesitas algo más específico?</p>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white transition-all duration-200 bg-gray-900 rounded-full hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
          >
            Solicitar Presupuesto Personalizado
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
