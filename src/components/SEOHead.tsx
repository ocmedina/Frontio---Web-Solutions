// SEOHead.tsx - Componente para gestionar meta tags dinámicos
import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
}

const SEOHead = ({
  title = "Frontio - Desarrollo Web Profesional | Diseño Web y Landing Pages",
  description = "Frontio ofrece desarrollo web profesional, diseño de sitios modernos y landing pages efectivas. Soluciones digitales personalizadas para impulsar tu negocio online.",
  keywords = "desarrollo web, diseño web, landing pages, sitios web profesionales, marketing digital",
  ogImage = "/frontio.png",
  ogUrl = "https://frontio.com.ar/",
}: SEOHeadProps) => {
  useEffect(() => {
    // Actualizar el título de la página
    document.title = title;

    // Actualizar meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    // Actualizar meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }

    // Actualizar Open Graph
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute("content", description);
    }

    const ogImg = document.querySelector('meta[property="og:image"]');
    if (ogImg) {
      ogImg.setAttribute("content", ogImage);
    }

    const ogUrlMeta = document.querySelector('meta[property="og:url"]');
    if (ogUrlMeta) {
      ogUrlMeta.setAttribute("content", ogUrl);
    }
  }, [title, description, keywords, ogImage, ogUrl]);

  return null; // Este componente no renderiza nada visible
};

export default SEOHead;
