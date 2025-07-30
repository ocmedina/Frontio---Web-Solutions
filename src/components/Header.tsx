// Header.tsx
export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <img src="/frontio-logo1.png" alt="OM Web Solutions" className="h-10 w-auto" />
        <nav className="hidden md:flex gap-6 text-gray-800">
          <a href="#services" className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]">Servicios</a>
          <a href="#about" className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]">Sobre Nosotros</a>
          <a href="#contact" className="hover:text-blue-600 transition-all duration-300 hover:-translate-y-[1px]">Contacto</a>
        </nav>
        <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded-xl text-sm shadow-md transition-transform duration-300 hover:bg-blue-700 hover:scale-105">Cotizar Ahora</a>
      </div>
    </header>
  );
}
