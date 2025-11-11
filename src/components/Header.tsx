// Header.tsx
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md" role="banner">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <a href="/" aria-label="Ir a inicio">
          <img
            src="/frontio-logo1.webp"
            alt="Frontio Web Solutions Logo"
            className="h-10 w-auto"
          />
        </a>

        {/* Desktop Menu */}
        <nav
          className="hidden lg:flex gap-6 text-gray-800"
          role="navigation"
          aria-label="Menú principal"
        >
          <a
            href="#services"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a sección de servicios"
          >
            Servicios
          </a>
          <a
            href="#frontstock"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a FrontStock"
          >
            FrontStock
          </a>
          <a
            href="#chatbots"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a ChatBots"
          >
            ChatBots
          </a>
          <a
            href="#projects"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a Proyectos"
          >
            Proyectos
          </a>
          <a
            href="#about"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a sección sobre nosotros"
          >
            Nosotros
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a sección de contacto"
          >
            Contacto
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href="#contact"
          className="hidden md:inline-block bg-blue-600 text-white px-4 py-2 rounded-xl text-sm shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
          aria-label="Solicitar cotización"
        >
          Cotizar Ahora
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-gray-800 hover:text-blue-600 transition-colors"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <nav
          className="lg:hidden bg-white border-t border-gray-200 py-4 px-4"
          role="navigation"
          aria-label="Menú móvil"
        >
          <div className="flex flex-col space-y-3">
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 py-2 transition-colors"
            >
              Servicios
            </a>
            <a
              href="#frontstock"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 py-2 transition-colors"
            >
              FrontStock
            </a>
            <a
              href="#chatbots"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 py-2 transition-colors"
            >
              ChatBots
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 py-2 transition-colors"
            >
              Proyectos
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 py-2 transition-colors"
            >
              Nosotros
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-blue-600 py-2 transition-colors"
            >
              Contacto
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="bg-blue-600 text-white px-4 py-3 rounded-xl text-sm font-semibold text-center mt-2 hover:bg-blue-700 transition-colors"
            >
              Cotizar Ahora
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
