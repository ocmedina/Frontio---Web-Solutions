import { motion } from "framer-motion";
import { Target, Zap, Handshake } from "lucide-react";

const pillars = [
  {
    icon: <Target className="w-6 h-6 text-cyan-600" />,
    title: "Estrategia antes de diseñar",
    text: "Definimos objetivo comercial y mensaje para que la web no sea solo estética.",
  },
  {
    icon: <Zap className="w-6 h-6 text-cyan-600" />,
    title: "Ejecución ágil",
    text: "Trabajamos por etapas cortas para que veas avances reales desde el inicio.",
  },
  {
    icon: <Handshake className="w-6 h-6 text-cyan-600" />,
    title: "Acompañamiento real",
    text: "No desaparecemos al publicar. Medimos, ajustamos y te ayudamos a crecer.",
  },
];

const AboutUs = () => {
  return (
    <section id="about" className="py-24 px-4 bg-slate-50" aria-labelledby="about-title">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="inline-flex rounded-full bg-white border border-slate-200 px-4 py-1 text-sm font-semibold text-slate-600">
              Sobre Frontio
            </p>
            <h2 id="about-title" className="mt-4 text-4xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight">
              Equipo chico,<br />impacto grande
            </h2>
            <p className="mt-5 text-slate-500 leading-relaxed">
              Combinamos diseño, desarrollo y visión de negocio para crear experiencias digitales que ayudan a vender mejor.
            </p>
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                <p className="text-3xl font-black text-slate-900">50+</p>
                <p className="text-sm text-slate-500 mt-1">Proyectos completados</p>
              </div>
              <div className="rounded-2xl bg-white border border-slate-200 p-5 shadow-sm">
                <p className="text-3xl font-black text-slate-900">100%</p>
                <p className="text-sm text-slate-500 mt-1">Foco en conversión</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="space-y-3"
          >
            {pillars.map((pillar) => (
              <article key={pillar.title} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center shrink-0">{pillar.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900">{pillar.title}</h3>
                  <p className="text-slate-500 mt-1 text-sm leading-relaxed">{pillar.text}</p>
                </div>
              </article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
