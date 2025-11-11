import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import { ArrowRightIcon, CheckCircleIcon } from "@heroicons/react/24/solid";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      image: "/hero1.webp",
      title: "Transformamos Ideas en Realidad Digital",
      subtitle: "Desarrollo web moderno con tecnologías de vanguardia",
      badge: "🚀 Sitios Web Profesionales",
      features: ["Diseño Responsivo", "SEO Optimizado", "Velocidad Extrema"],
    },
    {
      image: "/hero2.webp",
      title: "Impulsa tu Negocio al Siguiente Nivel",
      subtitle: "Soluciones digitales que convierten visitantes en clientes",
      badge: "💼 Marketing Digital",
      features: ["Landing Pages", "E-commerce", "Posicionamiento"],
    },
    {
      image: "/hero3.webp",
      title: "Automatiza y Escala tu Empresa",
      subtitle: "Sistemas de gestión, bots y herramientas a medida",
      badge: "🤖 Sistemas Personalizados",
      features: ["ChatBots IA", "FrontStock", "Tienduca"],
    },
  ];

  return (
    <section
      className="relative h-screen min-h-[600px]"
      aria-label="Sección principal"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          bulletActiveClass: "swiper-pagination-bullet-active bg-blue-600",
        }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center relative"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
              role="img"
              aria-label={slide.title}
            >
              {/* Overlay mejorado con gradiente */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-transparent"></div>

              {/* Particles effect */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(37,99,235,0.1),transparent)] opacity-50"></div>

              <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                  {/* Content Left */}
                  <div className="text-white">
                    {/* Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 mb-6"
                    >
                      <span className="text-sm font-semibold">
                        {slide.badge}
                      </span>
                    </motion.div>

                    {/* Title */}
                    <motion.h1
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                      className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
                    >
                      {slide.title}
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl"
                    >
                      {slide.subtitle}
                    </motion.p>

                    {/* Features */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-wrap gap-4 mb-8"
                    >
                      {slide.features.map((feature, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 text-sm text-gray-200"
                        >
                          <CheckCircleIcon className="w-5 h-5 text-green-400" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </motion.div>

                    {/* CTA Buttons */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="flex flex-wrap gap-4"
                    >
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-blue-600/30 hover:shadow-xl hover:shadow-blue-600/40 transition-all transform hover:scale-105"
                        aria-label="Contactar para cotización"
                      >
                        Empezar Ahora
                        <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </a>
                      <a
                        href="#services"
                        className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white px-8 py-4 rounded-full font-semibold text-lg border border-white/20 hover:border-white/40 transition-all"
                        aria-label="Ver servicios"
                      >
                        Ver Servicios
                      </a>
                    </motion.div>
                  </div>

                  {/* Stats Right */}
                  <div className="hidden lg:block">
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1 }}
                      className="grid grid-cols-2 gap-6"
                    >
                      {[
                        { value: "50+", label: "Proyectos Completados" },
                        { value: "100%", label: "Clientes Satisfechos" },
                        { value: "24/7", label: "Soporte Disponible" },
                        { value: "5★", label: "Calificación Promedio" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-white/15 transition-all"
                        >
                          <div className="text-4xl font-bold text-white mb-2">
                            {stat.value}
                          </div>
                          <div className="text-sm text-gray-300">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </motion.div>
                  </div>
                </div>
              </div>

              {/* Scroll Indicator */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              >
                <a
                  href="#services"
                  className="flex flex-col items-center gap-2 text-white/60 hover:text-white transition-colors"
                >
                  <span className="text-sm font-medium">Descubre más</span>
                  <svg
                    className="w-6 h-6 animate-bounce"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Swiper Styles */}
      <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: white;
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(10px);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .swiper-button-next:after,
        .swiper-button-prev:after {
          font-size: 20px;
        }

        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background: rgba(255, 255, 255, 0.2);
        }

        .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: rgba(255, 255, 255, 0.5);
          opacity: 1;
        }

        .swiper-pagination-bullet-active {
          background: #2563eb;
          width: 32px;
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Hero;
