// src/components/Footer.tsx
export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      href: "https://www.instagram.com/frontio.ar/",
      icon: "ri-instagram-line",
      label: "Instagram",
    },
    {
      href: "https://www.linkedin.com/company/frontio-web-solutions",
      icon: "ri-linkedin-line",
      label: "LinkedIn",
    },
    {
      href: "https://github.com/ocmedina",
      icon: "ri-github-line",
      label: "GitHub",
    },
  ];

  const quickLinks = [
    { name: "Servicios", href: "#services" },
    { name: "Proyectos", href: "#projects" },
    { name: "Proceso", href: "#process" },
    { name: "FAQ", href: "#faq" },
    { name: "Contacto", href: "#contact" },
  ];

  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-1 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          {/* Columna 1: Logo y descripción */}
          <div className="md:col-span-2">
            <img
              src="/footer.png"
              alt="Frontio Web Solutions"
              className="h-12 w-auto mb-5 opacity-90"
            />
            <p className="text-slate-500 mb-6 max-w-md leading-relaxed text-sm">
              Diseñamos y desarrollamos sitios de alto impacto. Estrategia,
              diseño y desarrollo para empresas que quieren crecer online.
            </p>
            <div className="flex gap-3">
              {socialLinks.map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 flex items-center justify-center transition-all text-slate-400 hover:text-white"
                  aria-label={label}
                >
                  <i className={`${icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">
              Sitio
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-slate-500 hover:text-white transition-colors text-sm"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contacto</h3>
            <ul className="space-y-3 text-slate-500 text-sm">
              <li>
                <a
                  href="mailto:frontio.web@gmail.com"
                  className="hover:text-cyan-400 transition-colors"
                >
                  frontio.web@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/2604407734"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-cyan-400 transition-colors"
                >
                  +54 260 440-7734
                </a>
              </li>
              <li>Mendoza, Argentina</li>
            </ul>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t border-white/10 pt-8">
          <p className="text-sm text-slate-600 text-center md:text-left">
            © {currentYear} Frontio Web Solutions. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
