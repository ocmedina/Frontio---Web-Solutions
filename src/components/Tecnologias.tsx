// components/Technology.tsx
import { motion } from 'framer-motion';
import {
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CloudIcon,
  RocketLaunchIcon,
} from '@heroicons/react/24/solid';

const techStack = [
  {
    icon: <CodeBracketIcon className="w-10 h-10 text-indigo-500 group-hover:scale-110 transition-transform" />,
    title: 'Frontend Moderno',
    description: 'React, TypeScript, Tailwind y Astro para interfaces eficientes y visuales.',
  },
  {
    icon: <DevicePhoneMobileIcon className="w-10 h-10 text-green-500 group-hover:scale-110 transition-transform" />,
    title: 'Responsive',
    description: 'Diseños que se adaptan a cualquier dispositivo sin perder calidad.',
  },
  {
    icon: <CloudIcon className="w-10 h-10 text-blue-500 group-hover:scale-110 transition-transform" />,
    title: 'Deploy en la Nube',
    description: 'Publicamos proyectos con Vercel, Firebase y otras plataformas cloud.',
  },
  {
    icon: <RocketLaunchIcon className="w-10 h-10 text-pink-500 group-hover:scale-110 transition-transform" />,
    title: 'Optimización',
    description: 'SEO, accesibilidad y buenas prácticas para el mejor rendimiento.',
  },
];

const Technology = () => {
  return (
    <section id="tecnologia" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-8 text-gray-900"
        >
          Nuestra Tecnología
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 cursor-default"
            >
              <div className="mb-4">{tech.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">{tech.title}</h3>
              <p className="text-gray-600 text-sm">{tech.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Technology;
