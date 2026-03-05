import { motion } from "framer-motion";

const steps = [
  {
    title: "Diagnóstico",
    description:
      "Revisamos objetivo, competencia y oportunidades para definir una estrategia clara.",
  },
  {
    title: "Diseño y contenido",
    description:
      "Armamos la estructura de la página, textos comerciales y dirección visual.",
  },
  {
    title: "Desarrollo y SEO",
    description:
      "Construimos una web rápida, optimizada para Google y pensada para convertir.",
  },
  {
    title: "Lanzamiento y mejora",
    description:
      "Publicamos, medimos resultados y aplicamos mejoras con foco en negocio.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 px-4 bg-white" aria-labelledby="process-title">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="inline-flex rounded-full bg-slate-100 border border-slate-200 px-4 py-1 text-sm font-semibold text-slate-600">
            Método
          </p>
          <h2 id="process-title" className="mt-4 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Un proceso simple para avanzar rápido
          </h2>
          <p className="text-slate-500 mt-4 max-w-xl mx-auto">
            De la idea al lanzamiento en pasos concretos, sin burocracia.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden">
          {steps.map((step, index) => (
            <motion.article
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="bg-white p-7 flex flex-col gap-4"
            >
              <div className="flex items-center gap-3">
                <span className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-950 text-white text-sm font-bold shrink-0">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block flex-1 h-px bg-slate-200" />
                )}
              </div>
              <div>
                <h3 className="text-base font-bold text-slate-900">{step.title}</h3>
                <p className="text-slate-500 mt-2 leading-relaxed text-sm">{step.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
