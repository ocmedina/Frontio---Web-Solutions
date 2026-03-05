import { motion } from "framer-motion";

const brands = [
  { name: "Logo 1", src: "/LOGO 1.webp", large: false },
  { name: "Logo 2", src: "/LOGO 2.webp", large: false },
  { name: "Logo 3", src: "/LOGO 3.webp", large: false },
  { name: "Logo 4", src: "/LOGO 4.webp", large: false },
  { name: "Logo 5", src: "/LOGO 5.webp", large: true },
];

// Triplicamos para que el loop sea infinito sin saltos visibles
const marqueeItems = [...brands, ...brands, ...brands];

export default function SocialProof() {
  return (
      <section className="bg-slate-50 border-y border-slate-200 py-10 overflow-hidden" aria-label="Marcas que confían en Frontio">
        <p className="text-center text-slate-500 text-base font-semibold uppercase tracking-widest mb-8">
          Marcas que confían en Frontio
        </p>
        {/* Máscara de fade en los bordes */}
        <div
          className="relative"
          style={{
            maskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)",
          }}
        >
          <motion.div
            className="flex gap-12 w-max"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              duration: 18,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {marqueeItems.map((brand, index) => (
              <div
                key={index}
                className="flex items-center justify-center shrink-0"
                style={{ width: 200 }}
              >
                <img
                  src={brand.src}
                  alt={brand.name}
                  className={`${brand.large ? "h-28 max-w-[220px]" : "h-20 max-w-[180px]"} w-auto object-contain grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300`}
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>
  );
}
