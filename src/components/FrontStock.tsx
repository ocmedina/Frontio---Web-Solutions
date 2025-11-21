import { motion } from "framer-motion";
import {
  CubeIcon,
  ChartBarIcon,
  UserGroupIcon,
  ClipboardDocumentListIcon,
  ArrowTrendingUpIcon,
  ShieldCheckIcon,
} from "@heroicons/react/24/outline";

export default function FrontStockSection() {
  const features = [
    {
      icon: <CubeIcon className="w-8 h-8 text-white" />,
      title: "Control Total de Inventario",
      description:
        "Gestiona tu stock en tiempo real. Alta, baja y modificación de productos con alertas de stock mínimo.",
      color: "from-indigo-500 to-blue-500",
      delay: 0,
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      title: "Reportes y Estadísticas",
      description:
        "Visualiza gráficos de ventas, productos más vendidos y análisis de rentabilidad para tomar mejores decisiones.",
      color: "from-blue-500 to-cyan-500",
      delay: 0.1,
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-white" />,
      title: "Multi-Usuario",
      description:
        "Diferentes niveles de acceso para tu equipo. Administradores, vendedores y visualizadores con permisos personalizados.",
      color: "from-cyan-500 to-teal-500",
      delay: 0.2,
    },
    {
      icon: <ClipboardDocumentListIcon className="w-8 h-8 text-white" />,
      title: "Gestión de Proveedores",
      description:
        "Administra tus proveedores, órdenes de compra y seguimiento de entregas en un solo lugar.",
      color: "from-teal-500 to-green-500",
      delay: 0.3,
    },
    {
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-white" />,
      title: "Historial de Movimientos",
      description:
        "Registro completo de todas las operaciones. Trazabilidad total de tu inventario para mayor seguridad.",
      color: "from-green-500 to-emerald-500",
      delay: 0.4,
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-white" />,
      title: "Seguro y Confiable",
      description:
        "Backups automáticos, encriptación de datos y acceso seguro desde cualquier dispositivo.",
      color: "from-emerald-500 to-lime-500",
      delay: 0.5,
    },
  ];

  return (
    <section
      id="frontstock"
      className="py-24 px-4 relative overflow-hidden bg-white"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-[40%] h-[40%] bg-indigo-50/80 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[10%] left-[5%] w-[40%] h-[40%] bg-blue-50/80 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-indigo-50 border border-indigo-100 rounded-full text-sm font-semibold text-indigo-600 mb-4"
          >
            Sistema de Gestión
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            FrontStock: Tu Negocio <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">
              Bajo Control
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Sistema completo de gestión de inventario y stock. Simple, potente y
            diseñado para crecer con vos.
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: feature.delay }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
            >
              {/* Gradient Border Effect on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>

              <div className="relative">
                {/* Icon Box */}
                <div
                  className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 shadow-md transform group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-indigo-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Benefits / Stats */}
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-blue-600 rounded-3xl p-12 text-white relative overflow-hidden shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-10 text-center">
              ¿Por qué elegir FrontStock?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="pt-8 md:pt-0">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <p className="text-indigo-100 font-medium">
                  Acceso desde cualquier lugar
                </p>
              </div>
              <div className="pt-8 md:pt-0 pl-0 md:pl-8">
                <div className="text-5xl font-bold mb-2">100%</div>
                <p className="text-indigo-100 font-medium">
                  Datos seguros y respaldados
                </p>
              </div>
              <div className="pt-8 md:pt-0 pl-0 md:pl-8">
                <div className="text-5xl font-bold mb-2">∞</div>
                <p className="text-indigo-100 font-medium">
                  Productos ilimitados
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-600"
          >
            Solicitar Demo Gratuita
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Sin compromiso de compra. Probá la potencia de FrontStock.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
