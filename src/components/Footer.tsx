// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.instagram.com/frontio.ar/",
      icon: "ri-instagram-line",
      label: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      href: "https://www.linkedin.com/company/frontio-web-solutions",
      icon: "ri-linkedin-line",
      label: "LinkedIn",
      color: "hover:text-blue-400",
    },
    {
      href: "https://github.com/ocmedina",
      icon: "ri-github-line",
      label: "GitHub",
      color: "hover:text-gray-300",
    },
  ];

  const quickLinks = [
    { name: "Servicios", href: "#services" },
    { name: "FrontStock", href: "#frontstock" },
    { name: "ChatBots", href: "#chatbots" },
    { name: "Proyectos", href: "#projects" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-950 to-black text-gray-300 relative overflow-hidden">
      {/* Borde superior con gradiente animado */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 animate-gradientMove"></div>

      {/* Patrón de fondo sutil */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Columna 1: Logo y descripción */}
          <div className="md:col-span-2">
            <img
              src="/footer.png"
              alt="Frontio Web Solutions"
              className="h-12 w-auto mb-4"
            />
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed">
              Transformamos ideas en experiencias digitales. Desarrollo web
              profesional, sistemas personalizados y soluciones inteligentes
              para tu negocio.
            </p>
            <div className="flex gap-4">
              {socialLinks.map(({ href, icon, label, color }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-gray-800 hover:bg-gray-700 flex items-center justify-center transition-all transform hover:-translate-y-1 ${color}`}
                  aria-label={label}
                >
                  <i className={`${icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1 group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-lg">Contacto</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start gap-2">
                <i className="ri-mail-line text-blue-400 mt-1"></i>
                <a
                  href="mailto:contacto@frontio.com.ar"
                  className="hover:text-blue-400 transition-colors"
                >
                  frontio.web@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-whatsapp-line text-green-400 mt-1"></i>
                <a
                  href="https://wa.me/2604407734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-400 transition-colors"
                >
                  +54 260 440-7734
                </a>
              </li>
              <li className="flex items-start gap-2">
                <i className="ri-map-pin-line text-red-400 mt-1"></i>
                <span>Mendoza, Argentina</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500 text-center md:text-left">
              © {currentYear} Frontio Web Solutions. Todos los derechos
              reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
