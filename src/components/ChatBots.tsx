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
      icon: <ClockIcon className="w-8 h-8 text-white" />,
      title: "Disponibilidad 24/7",
      description:
        "Tu negocio nunca duerme. Tu bot responde a los clientes en cualquier momento, feriados y fines de semana.",
      color: "from-purple-500 to-fuchsia-500",
      delay: 0,
    },
    {
      icon: <BoltIcon className="w-8 h-8 text-white" />,
      title: "Respuestas Instantáneas",
      description:
        "Elimina los tiempos de espera. Tus clientes reciben respuestas al instante, mejorando su satisfacción.",
      color: "from-yellow-500 to-orange-500",
      delay: 0.1,
    },
    {
      icon: <DevicePhoneMobileIcon className="w-8 h-8 text-white" />,
      title: "Multi-Plataforma",
      description:
        "Omnicanalidad real: WhatsApp, Instagram, Messenger, Telegram y Web en una sola solución.",
      color: "from-blue-500 to-indigo-500",
      delay: 0.2,
    },
    {
      icon: <CpuChipIcon className="w-8 h-8 text-white" />,
      title: "Inteligencia Artificial",
      description:
        "Respuestas naturales gracias a IA avanzada. Entiende el contexto, la intención y aprende con cada interacción.",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: <ChartBarIcon className="w-8 h-8 text-white" />,
      title: "Análisis y Métricas",
      description:
        "Dashboard completo con estadísticas de conversaciones, satisfacción y comportamiento de usuarios.",
      color: "from-indigo-500 to-violet-500",
      delay: 0.4,
    },
    {
      icon: <ChatBubbleLeftRightIcon className="w-8 h-8 text-white" />,
      title: "Conversaciones Naturales",
      description:
        "Flujos de conversación personalizados que se sienten humanos y resuelven problemas reales.",
      color: "from-pink-500 to-rose-500",
      delay: 0.5,
    },
  ];

  const useCases = [
    {
      title: "E-commerce",
      description:
        "Consultas de stock, seguimiento de pedidos, recomendaciones.",
      icon: "🛍️",
      color: "bg-purple-50",
      border: "border-purple-100",
    },
    {
      title: "Servicios",
      description: "Agendar citas, cotizaciones, información de servicios.",
      icon: "📅",
      color: "bg-blue-50",
      border: "border-blue-100",
    },
    {
      title: "Soporte",
      description:
        "FAQ automatizado, tickets de soporte, escalamiento a humanos.",
      icon: "💬",
      color: "bg-green-50",
      border: "border-green-100",
    },
    {
      title: "Ventas",
      description:
        "Calificación de prospectos, formularios inteligentes, cierre.",
      icon: "🎯",
      color: "bg-orange-50",
      border: "border-orange-100",
    },
  ];

  return (
    <section
      id="chatbots"
      className="py-24 px-4 relative overflow-hidden bg-gray-50"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-[30%] h-[30%] bg-purple-100/60 rounded-full blur-3xl"></div>
        <div className="absolute bottom-[20%] right-[10%] w-[30%] h-[30%] bg-pink-100/60 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold mb-4"
          >
            Automatización con IA
          </motion.span>
          <motion.h2
            className="text-4xl md:text-5xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            ChatBots que <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
              Potencian tu Negocio
            </span>
          </motion.h2>
          <motion.p
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Automatiza la atención al cliente, captura leads y aumenta tus
            ventas con asistentes virtuales inteligentes disponibles 24/7.
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

                <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Adaptable a Cualquier Industria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <motion.div
                key={index}
                className={`${useCase.color} rounded-2xl p-8 text-center border ${useCase.border} hover:shadow-lg transition-all duration-300`}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform">
                  {useCase.icon}
                </div>
                <h4 className="text-xl font-bold mb-3 text-gray-800">
                  {useCase.title}
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {useCase.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-16 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 -mt-10 -ml-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 right-0 -mb-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>

          <div className="relative z-10">
            <h3 className="text-3xl font-bold mb-10 text-center">
              Impacto Real en tu Negocio
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center divide-y md:divide-y-0 md:divide-x divide-white/20">
              <div className="pt-8 md:pt-0">
                <div className="text-5xl font-bold mb-2">80%</div>
                <p className="text-purple-100 font-medium">
                  Ahorro en tiempo de atención
                </p>
              </div>
              <div className="pt-8 md:pt-0 pl-0 md:pl-8">
                <div className="text-5xl font-bold mb-2">3x</div>
                <p className="text-purple-100 font-medium">
                  Más consultas atendidas
                </p>
              </div>
              <div className="pt-8 md:pt-0 pl-0 md:pl-8">
                <div className="text-5xl font-bold mb-2">24/7</div>
                <p className="text-purple-100 font-medium">
                  Disponibilidad continua
                </p>
              </div>
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
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white transition-all duration-200 bg-purple-600 rounded-full hover:bg-purple-700 hover:shadow-xl hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-600"
          >
            Automatizar mi Negocio
          </a>
          <p className="mt-4 text-sm text-gray-500">
            Consultoría inicial gratuita para evaluar tu caso.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
