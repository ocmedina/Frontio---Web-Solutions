import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white min-h-[88vh] flex items-center">
      {/* Radial glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(34,211,238,0.1),transparent)]" />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />
      {/* Glow orbs */}
      <div className="absolute -top-32 -right-32 h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 h-80 w-80 rounded-full bg-blue-600/8 blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — copy */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/25 bg-cyan-400/8 px-4 py-1.5 text-sm font-medium text-cyan-300 mb-8">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400" />
              </span>
              Disponibles para nuevos proyectos
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-[4.25rem] font-black leading-[1.05] tracking-tighter">
              Webs que convierten
              <span className="block mt-1 bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">
                visitas en clientes
              </span>
            </h1>

            <p className="mt-6 text-slate-400 text-lg max-w-lg leading-relaxed">
              Diseñamos y desarrollamos sitios de alto impacto para empresas en Argentina. Estrategia, diseño y desarrollo en un solo equipo.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-cyan-400 text-slate-950 font-bold px-7 py-3.5 text-sm hover:bg-cyan-300 transition-colors"
              >
                Agendar llamada
                <ArrowRightIcon className="w-4 h-4" />
              </a>
              <a
                href="#projects"
                className="inline-flex items-center rounded-full border border-white/20 text-slate-300 px-7 py-3.5 text-sm font-semibold hover:border-white/40 hover:text-white transition-all"
              >
                Ver proyectos
              </a>
            </div>

            {/* Stats bar */}
            <div className="mt-12 flex items-center gap-8 border-t border-white/10 pt-8">
              <div>
                <p className="text-2xl font-black text-white">50+</p>
                <p className="text-xs text-slate-500 mt-0.5">Proyectos entregados</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">96%</p>
                <p className="text-xs text-slate-500 mt-0.5">Clientes satisfechos</p>
              </div>
              <div className="w-px h-8 bg-white/10" />
              <div>
                <p className="text-2xl font-black text-white">14 días</p>
                <p className="text-xs text-slate-500 mt-0.5">Entrega inicial</p>
              </div>
            </div>
          </motion.div>

          {/* Right — benefit card */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="relative"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-cyan-400/10 to-blue-600/10 blur-2xl" />
            <div className="relative rounded-3xl border border-white/10 bg-slate-900/60 backdrop-blur-sm p-8 space-y-6">
              <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">
                Qué incluye trabajar con nosotros
              </p>

              {[
                {
                  num: "01",
                  title: "Estrategia antes de diseñar",
                  desc: "Definimos objetivo y mensaje para que todo tenga propósito.",
                },
                {
                  num: "02",
                  title: "Diseño mobile-first rápido",
                  desc: "Pensado para el celular, carga rápida y estética moderna.",
                },
                {
                  num: "03",
                  title: "SEO técnico incluido",
                  desc: "Base optimizada para Google desde el día uno.",
                },
              ].map((item) => (
                <div key={item.num} className="flex gap-4 items-start">
                  <span className="text-xs font-bold text-cyan-400 bg-cyan-400/10 border border-cyan-400/20 rounded-full px-2.5 py-1 shrink-0 mt-0.5">
                    {item.num}
                  </span>
                  <div>
                    <p className="font-semibold text-white text-sm">{item.title}</p>
                    <p className="text-slate-400 text-sm mt-1">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
