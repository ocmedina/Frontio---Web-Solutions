// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer
      className="bg-gray-950 text-gray-400 border-t border-gray-800 relative overflow-hidden animate-footerFade"
    >
      {/* Borde superior con gradiente animado */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-500 animate-gradientMove"></div>

      <div className="max-w-7xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 items-center gap-4">
        
        {/* Logo */}
        <div className="flex justify-center md:justify-start items-center gap-2">
          <img
            src="/footer.png"
            alt="Frontio"
            className="h-10 w-auto"
          />
        </div>

        {/* Texto central */}
        <p className="text-sm text-center text-gray-500">
          © {new Date().getFullYear()} - Frontio Web Solutions. Todos los derechos reservados.  
        </p>

        {/* Redes */}
        <div className="flex justify-center md:justify-end gap-5 text-xl">
          {[
            { href: "https://www.instagram.com/frontio.ar/", icon: "ri-instagram-line", hover: "hover:text-pink-500" },
            { href: "https://www.linkedin.com/company/frontio-web-solutions", icon: "ri-linkedin-line", hover: "hover:text-blue-400" },
            { href: "https://github.com", icon: "ri-github-line", hover: "hover:text-gray-300" },
          ].map(({ href, icon, hover }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              className={`${hover} transition-all transform hover:-translate-y-1`}
              aria-label={icon}
            >
              <i className={icon}></i>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
