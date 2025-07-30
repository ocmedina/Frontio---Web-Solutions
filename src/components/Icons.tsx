// components/TechIcons.tsx
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';

const techStack = [
  { name: "HTML5", icon: "vscode-icons:file-type-html" },
  { name: "CSS3", icon: "vscode-icons:file-type-css" },
  { name: "JavaScript", icon: "logos:javascript" },
  { name: "TypeScript", icon: "logos:typescript-icon" },
  { name: "React", icon: "logos:react" },
  { name: "Next.js", icon: "logos:nextjs-icon" },
  { name: "Astro", icon: "logos:astro-icon" },
  { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
  { name: "Framer Motion", icon: "logos:framer" },
  { name: "Node.js", icon: "logos:nodejs-icon" },
  { name: "Express", icon: "skill-icons:expressjs-light" },
  { name: "MongoDB", icon: "logos:mongodb-icon" },
  { name: "PostgreSQL", icon: "logos:postgresql" },
  { name: "Firebase", icon: "logos:firebase" },
  { name: "Vercel", icon: "logos:vercel-icon" },
  { name: "Git", icon: "logos:git-icon" },
  { name: "GitHub", icon: "logos:github-icon" },
  { name: "Docker", icon: "logos:docker-icon" },
  { name: "Figma", icon: "logos:figma" },
];

const TechIcons = () => {
  return (
    <section id="stack" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-10 text-gray-900"
        >
          Stack Tecnológico
        </motion.h2>

        <motion.div
          className="flex flex-wrap justify-center gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ staggerChildren: 0.05 }}
        >
          {techStack.map((tech, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="group flex flex-col items-center w-20"
            >
              <Icon icon={tech.icon} width="42" height="42" />
              <span className="text-sm text-gray-700 mt-2 text-center">{tech.name}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechIcons;
