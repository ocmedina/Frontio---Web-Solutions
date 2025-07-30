import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';
import { motion } from 'framer-motion';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

const Hero = () => {
  const slides = [
    {
      image: '/hero1.jpg',
      title: 'Desarrollamos soluciones digitales',
      subtitle: 'Sitios rápidos, modernos y responsivos',
    },
    {
      image: '/hero2.jpg',
      title: 'Impulsá tu negocio online',
      subtitle: 'Diseño web profesional a tu medida',
    },
    {
      image: '/hero3.jpg',
      title: 'Landing pages efectivas',
      subtitle: 'Convertí visitantes en clientes',
    },
  ];

  return (
    <section className="relative h-[85vh]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        autoplay={{ delay: 4000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{
                backgroundImage: `url(${slide.image})`,
              }}
            >
              <div className="w-full h-full bg-black/60 flex flex-col items-center justify-center text-center px-4">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="text-4xl md:text-5xl font-bold text-white"
                >
                  {slide.title}
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="mt-4 text-lg text-white"
                >
                  {slide.subtitle}
                </motion.p>
                <motion.a
                  href="#contact"
                  whileHover={{ scale: 1.05 }}
                  className="mt-6 inline-block bg-primary text-white px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition"
                >
                  Cotizar ahora
                </motion.a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;
