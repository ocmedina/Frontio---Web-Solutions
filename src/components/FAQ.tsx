import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
  {
    question: "¿Cuánto tarda en estar lista una web?",
    answer:
      "Depende del alcance, pero una landing optimizada suele estar entre 10 y 20 días.",
  },
  {
    question: "¿Trabajan con negocios chicos y medianos?",
    answer:
      "Sí. Trabajamos con emprendedores, pymes y equipos que necesitan una web clara para vender más.",
  },
  {
    question: "¿Incluye SEO?",
    answer:
      "Sí, todos los proyectos salen con una base SEO técnica y estructura preparada para posicionar.",
  },
  {
    question: "¿Ofrecen mantenimiento después del lanzamiento?",
    answer:
      "Sí, podemos continuar con soporte, mejoras y optimización mensual según tus objetivos.",
  },
  {
    question: "¿Puedo pedir una propuesta sin compromiso?",
    answer:
      "Claro. Te armamos una propuesta inicial con alcance, tiempos y recomendación estratégica.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-4 bg-white" aria-labelledby="faq-title">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="inline-flex rounded-full bg-slate-100 border border-slate-200 px-4 py-1 text-sm font-semibold text-slate-600 mb-4">
            FAQ
          </p>
          <h2 id="faq-title" className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">
            Preguntas frecuentes
          </h2>
          <p className="text-slate-500 mt-3">Respuestas rápidas para tomar decisión con confianza.</p>
        </div>

        <div className="divide-y divide-slate-200 border border-slate-200 rounded-2xl overflow-hidden">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <article key={faq.question} className="bg-white">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-slate-50 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-slate-900 text-sm">{faq.question}</span>
                  <motion.span
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="shrink-0 text-slate-400"
                  >
                    <ChevronDownIcon className="w-5 h-5" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-slate-500 text-sm leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
