"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Project {
  id: number;
  title: string;
  description: string;
  images: string[]; // Cambiado de 'image' a 'images' array
  tech: string[];
  demo: string;
  category: string;
}
/*Listas de proyectos*/
const projectsData: Project[] = [
  {
    id: 1,
    title: "OM Tecnología - Servicio Tecnico",
    description:
      "Sitio web para emprendimiento de servicio técnico con panel de seguimiento.",
    images: [
      "/images/projects/OM/Inicio.JPG",
      "/images/projects/OM/Servicios.JPG",
      "/images/projects/OM/Sobre-mi.JPG",
    ],
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    demo: "https://om-tecnologia.netlify.app/",
    category: "Landing Pages",
  },
  {
    id: 2,
    title: "Tienduca - Tu tienda de emprendedores",
    description:
      "Plataforma web que conecta emprendedores locales con clientes a través de un catálogo visual por categorías. Desarrollada con Next.js y Tailwind CSS, permite mostrar productos o servicios y acceder directamente al contacto del emprendedor. Enfocada en la visibilidad sin intermediarios ni gestión de pagos.",
    images: [
      "/images/projects/Tienduca/Inicio.JPG",
      "/images/projects/Tienduca/Emprendedores.JPG",
      "/images/projects/Tienduca/Contacto.JPG",
      "/images/projects/Tienduca/Login.JPG",
    ],
    tech: [
      "Next.js",
      "Tailwind",
      "Swiper",
      "Framer Motion",
      "Typescript",
      "Vercel",
      "Firebase",
    ],
    demo: "https://www.tienduca.com.ar/",
    category: "Web Apps",
  },
  {
    id: 3,
    title: "Bodega Mendocina",
    description:
      "Este proyecto es una landing page profesional y moderna para una bodega, diseñada y desarrollada con Next.js. La página fue creada con un enfoque en la experiencia de usuario y el rendimiento, utilizando Tailwind CSS para un diseño responsivo y elegante.",
    images: [
      "/images/projects/Bodega/Inicio.JPG",
      "/images/projects/Bodega/Vinos.JPG",
      "/images/projects/Bodega/Acerca.JPG",
      "/images/projects/Bodega/Noticias.JPG",
    ],
    tech: ["Next.js", "Tailwind", "Vercel", "Framer Motion", "Typescript"],
    demo: "https://bodeg.vercel.app/",
    category: "Landing Pages",
  },
];

export default function Projects() {
  const [filter, setFilter] = useState("Todos");

  const categories = ["Todos", "Landing Pages", "E-commerce", "Web Apps"];

  const filteredProjects =
    filter === "Todos"
      ? projectsData
      : projectsData.filter((p) => p.category === filter);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center mb-10"
        >
          Nuestros Proyectos
        </motion.h2>

        {/* Filtros */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                filter === cat
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              {/* Carrusel de imágenes */}
              <div className="relative group">
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  pagination={{
                    clickable: true,
                    dynamicBullets: true,
                  }}
                  navigation={true}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                  }}
                  loop={true}
                  className="project-swiper"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative w-full h-64 bg-gray-100 flex items-center justify-center">
                        <img
                          src={image}
                          alt={`${project.title} - Vista ${imgIndex + 1}`}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            // Fallback si la imagen no existe
                            e.currentTarget.src = `https://placehold.co/600x400/2563eb/ffffff?text=${encodeURIComponent(
                              project.title
                            )}`;
                          }}
                        />
                        {/* Overlay con número de imagen */}
                        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                          {imgIndex + 1}/{project.images.length}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-5 flex flex-col grow">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 my-3">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-blue-600 hover:underline font-semibold"
                  >
                    <FiExternalLink /> Ver Proyecto
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
