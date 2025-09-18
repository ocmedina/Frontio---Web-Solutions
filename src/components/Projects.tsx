"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FiExternalLink } from "react-icons/fi";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  demo: string;
  category: string;
}
/*Listas de proyectos*/
const projectsData: Project[] = [
  {
    id: 1,
    title: "OM Tecnología - Servicio Tecnico",
    description: "Sitio web para emprendimiento de servicio técnico con panel de seguimiento.",
    image: "/om-tec.webp",
    tech: ["HTML", "CSS", "JavaScript", "Netlify"],
    demo: "https://om-tecnologia.netlify.app/",
    category: "Landing Pages",
  },
  {
    id: 2,
    title: "Ecommerce Paola Lenceria (En desarrollo)",
    description: "Proyecto de tienda online de lencería desarrollado con React. Se utilizaron Tailwind CSS para un diseño responsivo y Swiper para un catálogo de productos interactivo. Demostración de habilidades en desarrollo front-end y creación de componentes reutilizables.",
    image: "/PaolaLenceria.webp",
    tech: ["React", "Tailwind", "Swiper", "Framer Motion", "Firebase", "Vercel",],
    demo: "https://tusitio.com/store",
    category: "E-commerce",
  },
  {
    id: 3,
    title: "Tienduca - Tu tienda de emprendedores",
    description: "Plataforma web que conecta emprendedores locales con clientes a través de un catálogo visual por categorías. Desarrollada con Next.js y Tailwind CSS, permite mostrar productos o servicios y acceder directamente al contacto del emprendedor. Enfocada en la visibilidad sin intermediarios ni gestión de pagos.",
    image: "/Tienduca.webp",
    tech: ["Next.js", "Tailwind", "Swiper", "Framer Motion", "Typescript", "Vercel", "Firebase",],
    demo: "https://www.tienduca.com.ar/",
    category: "Web Apps",
  },
  {
    id: 4,
    title: "Bodega Mendocina",
    description: "Este proyecto es una landing page profesional y moderna para una bodega, diseñada y desarrollada con Next.js. La página fue creada con un enfoque en la experiencia de usuario y el rendimiento, utilizando Tailwind CSS para un diseño responsivo y elegante.",
    image: "/bodega-mendocina.webp",
    tech: ["Next.js", "Tailwind", "Vercel","Framer Motion", "Typescript"],
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
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col"
            >
              <div className="relative group">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm flex-grow">
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
                    className="flex items-center gap-1 text-blue-600 hover:underline"
                  >
                    <FiExternalLink /> Demo
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
