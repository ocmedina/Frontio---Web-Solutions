import { motion } from "framer-motion";
import {
  ChatBubbleLeftRightIcon,
  ClockIcon,
  BoltIcon,
  DevicePhoneMobileIcon,
  ChartBarIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

export default function ChatBotsSection() {
  const features = [
    {
      icon: <ClockIcon className="w-8 h-8 text-purple-600" />,
      title: "Disponibilidad 24/7",
      description:
        "Tu bot responde a los clientes en cualquier momento, sin descanso.",
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-yellow-600" />,
      title: "Respuestas Instantáneas",
      description:
        "Tiempos de espera cero. Tus clientes reciben respuestas al instante.",
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-blue-600" />,
      title: "Multi-Plataforma",
      description: "WhatsApp, Instagram, Messenger, Telegram y tu sitio web.",
    },
    {
      icon: <CpuChipIcon className="w-8 h-8 text-green-600" />,
      title: "Inteligencia Artificial",
      description:
        "Respuestas naturales gracias a IA. Entiende el contexto y la intención.",
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-indigo-600" />,
      title: "Análisis y Métricas",
      description:
        "Dashboard con estadísticas de conversaciones y comportamiento de usuarios.",
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-pink-600" />,
      title: "Conversaciones Naturales",
      description: "Flujos de conversación personalizados según tu negocio.",
    },
  ];

  const useCases = [
    {
      title: "E-commerce",
      description:
        "Consultas de stock, seguimiento de pedidos, recomendaciones de productos.",
      icon: "🛍️",
    },
    {
      title: "Servicios",
      description: "Agendar citas, cotizaciones, información de servicios.",
      icon: "📅",
    },
    {
      title: "Soporte",
      description:
        "FAQ automatizado, tickets de soporte, escalamiento a humanos.",
      icon: "💬",
    },
    {
      title: "Generación de Leads",
      description:
        "Calificación de prospectos, formularios inteligentes, seguimiento.",
      icon: "🎯",
    },
  ];

  return (
    <section
      id="chatbots"
      className="py-20 px-4 bg-gradient-to-br from-purple-50 via-white to-pink-50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4">
            Automatización con IA
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
            ChatBots Inteligentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Automatiza la atención al cliente y aumenta tus ventas con bots
            conversacionales inteligentes
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

        {/* Use Cases */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-10 text-gray-900">
            Casos de Uso
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-gradient-to-br from-white to-purple-50 rounded-xl p-6 text-center border border-purple-100 hover:border-purple-300 transition-all"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl mb-3">{useCase.icon}</div>
                <h4 className="text-lg font-bold mb-2 text-gray-800">
                  {useCase.title}
                </h4>
                <p className="text-gray-600 text-sm">{useCase.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-10 text-white mb-12"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-8 text-center">
            Resultados Comprobados
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold mb-2">80%</div>
              <p className="text-purple-100">
                Reducción en tiempo de respuesta
              </p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">3x</div>
              <p className="text-purple-100">Más consultas atendidas</p>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <p className="text-purple-100">Disponibilidad continua</p>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            ¿Listo para automatizar tu atención al cliente?
          </p>
          <a
            href="#contact"
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all transform hover:scale-105"
          >
            Solicitar Demo de ChatBot
          </a>
        </motion.div>
      </div>
    </section>
  );
}
