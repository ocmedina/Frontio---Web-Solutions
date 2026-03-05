import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

export default function FinalCTA() {
  return (
    <section className="py-24 px-4 bg-slate-950 text-white" aria-label="Llamado a la accion final">
      <div className="max-w-5xl mx-auto">
        <motion.div
          className="relative rounded-3xl overflow-hidden p-8 md:p-14"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-700" />
          {/* Noise texture */}
          <div className="absolute inset-0 opacity-[0.06]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E\")" }} />
          {/* Glow */}
          <div className="absolute -top-16 -right-16 w-64 h-64 rounded-full bg-white/10 blur-3xl pointer-events-none" />

          <div className="relative">
            <h2 className="text-3xl md:text-5xl font-black leading-tight tracking-tight max-w-2xl">
              Si tu web no te trae clientes,<br className="hidden md:block" /> es hora de cambiar eso.
            </h2>
            <p className="mt-5 text-blue-100 max-w-xl leading-relaxed">
              Armamos una propuesta concreta para que tengas una página clara, rápida y enfocada en conversión.
            </p>
            <div className="flex flex-wrap gap-4 mt-8">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 bg-white text-slate-900 font-bold text-sm hover:bg-slate-100 transition-colors"
              >
                Quiero mi propuesta
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full px-7 py-3.5 border border-white/40 text-white font-semibold text-sm hover:bg-white/10 hover:border-white/60 transition-all"
              >
                Ver proyectos
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
