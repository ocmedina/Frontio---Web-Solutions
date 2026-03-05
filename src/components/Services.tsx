import { motion } from "framer-motion";
import {
  GlobeAltIcon,
  CpuChipIcon,
  ChartBarIcon,
} from "@heroicons/react/24/outline";

const services = [
  {
    icon: <GlobeAltIcon className="w-7 h-7 text-cyan-600" />,
    title: "Web Comercial",
    description:
      "Landing pages y sitios corporativos pensados para explicar rápido, generar confianza y captar consultas.",
    outcomes: ["Mensaje claro", "Carga rápida", "Alta conversión"],
  },
  {
    icon: <CpuChipIcon className="w-7 h-7 text-cyan-600" />,
    title: "Automatización y Sistemas",
    description:
      "Implementamos herramientas como FrontStock y chatbots para reducir tareas manuales y mejorar tiempos.",
    outcomes: ["Procesos ágiles", "Menos errores", "Escala operativa"],
  },
  {
    icon: <ChartBarIcon className="w-7 h-7 text-cyan-600" />,
    title: "SEO y Growth",
    description:
      "Optimización técnica y enfoque en resultados para que tu sitio gane visibilidad y genere oportunidades.",
    outcomes: ["Mejor posicionamiento", "Más tráfico útil", "Medición real"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 px-4 bg-white" aria-labelledby="services-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="inline-flex rounded-full bg-cyan-50 border border-cyan-200 px-4 py-1 text-sm font-semibold text-cyan-700">
            Servicios clave
          </p>
          <h2 id="services-title" className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Menos opciones, más foco en resultados
          </h2>
          <p className="text-slate-500 mt-4 max-w-2xl mx-auto">
            Organizamos nuestras soluciones en tres frentes para resolver ventas, operación y crecimiento.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-xl hover:shadow-slate-200/60 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-cyan-50 flex items-center justify-center mb-5">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900">{service.title}</h3>
              <p className="text-slate-500 mt-3 leading-relaxed text-sm">{service.description}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {service.outcomes.map((item) => (
                  <span key={item} className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600">
                    {item}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
