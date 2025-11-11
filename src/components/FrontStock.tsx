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
      icon: <CubeIcon className="w-8 h-8 text-indigo-600" />,
      title: "Control Total de Inventario",
      description:
        "Gestiona tu stock en tiempo real. Alta, baja y modificación de productos con alertas de stock mínimo.",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-blue-600" />,
      title: "Reportes y Estadísticas",
      description:
        "Visualiza gráficos de ventas, productos más vendidos y análisis de rentabilidad.",
    },
    {
      icon: <UserGroupIcon className="w-8 h-8 text-green-600" />,
      title: "Multi-Usuario",
      description:
        "Diferentes niveles de acceso para tu equipo. Administradores, vendedores y visualizadores.",
    },
    {
      icon: <ClipboardDocumentListIcon className="w-8 h-8 text-purple-600" />,
      title: "Gestión de Proveedores",
      description:
        "Administra tus proveedores, órdenes de compra y seguimiento de entregas.",
    },
    {
      icon: <ArrowTrendingUpIcon className="w-8 h-8 text-orange-600" />,
      title: "Historial de Movimientos",
      description:
        "Registro completo de todas las operaciones. Trazabilidad total de tu inventario.",
    },
    {
      icon: <ShieldCheckIcon className="w-8 h-8 text-red-600" />,
      title: "Seguro y Confiable",
      description:
        "Backups automáticos, encriptación de datos y acceso seguro desde cualquier dispositivo.",
    },
  ];

  return (
    <section
      id="frontstock"
      className="py-20 px-4 bg-gradient-to-br from-indigo-50 via-white to-purple-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
            Sistema de Gestión
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            FrontStock
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sistema completo de gestión de inventario y stock para tu negocio.
            Simple, potente y accesible desde cualquier lugar.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold mb-2 text-gray-800">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Benefits */}
        <motion.div
          className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-10 text-white"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-6 text-center">
            ¿Por qué elegir FrontStock?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">24/7</div>
              <p className="text-indigo-100">
                Acceso desde cualquier dispositivo
              </p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">100%</div>
              <p className="text-indigo-100">Datos seguros y respaldados</p>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">∞</div>
              <p className="text-indigo-100">Productos ilimitados</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <a
            href="#contact"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Solicitar Demo de FrontStock
          </a>
        </motion.div>
      </div>
    </section>
  );
}
