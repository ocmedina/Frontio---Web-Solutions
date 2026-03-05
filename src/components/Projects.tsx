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
    <section id="projects" className="py-24 bg-slate-950 text-white" aria-labelledby="projects-title">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full border border-white/15 bg-white/5 px-4 py-1 text-sm font-semibold text-slate-300 mb-4">
            Casos de uso
          </p>
          <h2
            id="projects-title"
            className="text-4xl md:text-5xl font-bold tracking-tight text-white"
          >
            Casos reales que ya están funcionando
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mt-4">
            Una muestra de proyectos donde combinamos diseño, desarrollo y estrategia para generar resultados medibles.
          </p>
        </div>

        {/* Filtros */}
        <div className="flex justify-center gap-3 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === cat
                  ? "bg-cyan-400 text-slate-950 font-bold"
                  : "border border-white/20 text-slate-400 hover:border-white/40 hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid de proyectos */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="rounded-2xl border border-white/10 bg-slate-900/80 overflow-hidden flex flex-col group hover:border-white/25 transition-colors"
            >
              {/* Carrusel de imágenes */}
              <div className="relative">
                <Swiper
                  modules={[Pagination, Navigation, Autoplay]}
                  pagination={{ clickable: true, dynamicBullets: true }}
                  navigation={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter: true }}
                  loop={true}
                  className="project-swiper"
                >
                  {project.images.map((image, imgIndex) => (
                    <SwiperSlide key={imgIndex}>
                      <div className="relative w-full h-52 bg-slate-800 flex items-center justify-center">
                        <img
                          src={image}
                          alt={`${project.title} - Vista ${imgIndex + 1}`}
                          className="max-w-full max-h-full object-contain"
                          loading="lazy"
                          onError={(e) => {
                            e.currentTarget.src = `https://placehold.co/600x400/1e293b/22d3ee?text=${encodeURIComponent(project.title)}`;
                          }}
                        />
                        <div className="absolute top-3 right-3 bg-black/60 text-white text-xs px-2 py-1 rounded-full backdrop-blur-sm">
                          {imgIndex + 1}/{project.images.length}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              <div className="p-5 flex flex-col grow">
                <span className="text-xs font-semibold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2.5 py-0.5 w-fit mb-3">
                  {project.category}
                </span>
                <h3 className="text-base font-bold text-white mb-2">{project.title}</h3>
                <p className="text-slate-400 text-sm grow leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-1.5 my-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="bg-white/5 border border-white/10 text-slate-400 px-2 py-0.5 rounded-full text-xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors mt-auto"
                >
                  <FiExternalLink className="w-4 h-4" /> Ver proyecto
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
