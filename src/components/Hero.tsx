import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Hero = () => {
  const slides = [
    {
      image: "/hero1.webp",
      badge: "💼 Desarrollo Web",
      title: "Transformamos tus ideas en experiencias digitales",
      subtitle:
        "Sitios web profesionales, rápidos y optimizados para convertir visitantes en clientes",
      cta: "Ver nuestros servicios",
      link: "#services",
    },
    {
      image: "/hero2.webp",
      badge: "🚀 Tecnología",
      title: "Impulsá tu negocio con soluciones inteligentes",
      subtitle: "FrontStock, Tienduca y ChatBots para automatizar y crecer",
      cta: "Explorar soluciones",
      link: "#frontstock",
    },
    {
      image: "/hero3.webp",
      badge: "✨ Diseño UX/UI",
      title: "Diseño que genera resultados",
      subtitle:
        "Landing pages efectivas que convierten visitantes en clientes reales",
      cta: "Contactar ahora",
      link: "#contact",
    },
  ];

  return (
    <section
      className="relative h-[90vh] min-h-[600px]"
      aria-label="Sección principal"
    >
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
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
              {/* Overlay con gradiente mejorado */}
              <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/60 to-black/40" />

              {/* Contenido */}
              <div className="relative z-10 w-full max-w-6xl mx-auto px-4 flex flex-col items-center justify-center text-center">
                {/* Badge */}
                <motion.span
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="inline-block px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm font-medium mb-6"
                >
                  {slide.badge}
                </motion.span>

                {/* Título */}
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl"
                >
                  {slide.title}
                </motion.h1>

                {/* Subtítulo */}
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.4 }}
                  className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl leading-relaxed"
                >
                  {slide.subtitle}
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.6 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href={slide.link}
                    className="group px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 flex items-center gap-2"
                  >
                    {slide.cta}
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                  <a
                    href="#contact"
                    className="px-8 py-4 bg-white/10 backdrop-blur-md hover:bg-white/20 text-white font-semibold rounded-full border-2 border-white/30 hover:border-white/50 transition-all duration-300"
                  >
                    Cotizar proyecto
                  </a>
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:block"
      >
        <a
          href="#services"
          className="flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors group"
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
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </a>
      </motion.div>
    </section>
  );
};

export default Hero;
