// Header.tsx
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { href: "#services", label: "Servicios" },
  { href: "#projects", label: "Proyectos" },
  { href: "#process", label: "Proceso" },
  { href: "#about", label: "Nosotros" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-950/85 backdrop-blur-md border-b border-white/10" role="banner">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 h-16 flex items-center justify-between">
        <a href="/" aria-label="Ir a inicio">
          <img
            src="/footer.png"
            alt="Frontio Web Solutions Logo"
            className="h-12 w-auto"
          />
        </a>

        {/* Desktop Nav */}
        <nav
          className="hidden lg:flex items-center gap-8"
          role="navigation"
          aria-label="Menú principal"
        >
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-sm font-medium text-slate-400 hover:text-white transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 transition-colors px-5 py-2 rounded-full"
          aria-label="Hablemos"
        >
          Hablemos
        </a>

        {/* Mobile toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={isOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden overflow-hidden bg-slate-900 border-t border-white/10"
            role="navigation"
            aria-label="Menú móvil"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navLinks.map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 hover:text-white hover:bg-white/5 px-4 py-3 rounded-xl text-sm font-medium transition-all"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 text-center text-sm font-semibold text-slate-950 bg-cyan-400 hover:bg-cyan-300 px-5 py-3 rounded-full transition-colors"
              >
                Hablemos
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
