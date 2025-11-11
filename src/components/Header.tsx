// Header.tsx
export function Header() {
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
        <nav
          className="hidden md:flex gap-6 text-gray-800"
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
            href="#about"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a sección sobre nosotros"
          >
            Sobre Nosotros
          </a>
          <a
            href="#contact"
            className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]"
            aria-label="Ir a sección de contacto"
          >
            Contacto
          </a>
        </nav>
        <a
          href="#contact"
          className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-105"
          aria-label="Solicitar cotización"
        >
          Cotizar Ahora
        </a>
      </div>
    </header>
  );
}
