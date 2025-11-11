# 🚀 Snippets y Código Útil para SEO

## 1. Lazy Loading de Imágenes

```tsx
// En tus componentes con imágenes
<img
  src="/hero1.webp"
  alt="Descripción descriptiva de la imagen"
  loading="lazy"
  width="1920"
  height="1080"
/>
```

## 2. Preload de Recursos Críticos

Agregar al `<head>` en index.html:

```html
<link rel="preload" href="/frontio-logo1.webp" as="image" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="dns-prefetch" href="https://fonts.googleapis.com" />
```

## 3. Schema LocalBusiness (si aplica)

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Frontio Web Solutions",
    "image": "https://frontio.com.ar/frontio.png",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tu Dirección",
      "addressLocality": "Tu Ciudad",
      "addressRegion": "Tu Región",
      "postalCode": "12345",
      "addressCountry": "AR"
    },
    "telephone": "+54-XXX-XXX-XXXX",
    "url": "https://frontio.com.ar",
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00"
  }
</script>
```

## 4. Schema WebPage para cada Sección

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Servicios - Frontio Web Solutions",
    "description": "Nuestros servicios de desarrollo web, diseño y marketing digital",
    "url": "https://frontio.com.ar/#services"
  }
</script>
```

## 5. Schema FAQPage (si agregas FAQ)

```html
<script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "¿Cuánto tiempo toma desarrollar un sitio web?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "El tiempo varía según la complejidad, pero un sitio web profesional toma entre 2-4 semanas."
        }
      }
    ]
  }
</script>
```

## 6. React Helmet para SEO Dinámico

```tsx
import { Helmet } from "react-helmet-async";

function ServicesPage() {
  return (
    <>
      <Helmet>
        <title>Servicios de Desarrollo Web | Frontio</title>
        <meta
          name="description"
          content="Descubre nuestros servicios de diseño web, desarrollo y marketing digital."
        />
        <link rel="canonical" href="https://frontio.com.ar/servicios" />
      </Helmet>
      {/* Tu contenido */}
    </>
  );
}
```

## 7. Componente de Breadcrumbs

```tsx
// components/Breadcrumbs.tsx
interface BreadcrumbItem {
  name: string;
  url: string;
}

const Breadcrumbs = ({ items }: { items: BreadcrumbItem[] }) => {
  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-2 text-sm">
        {items.map((item, index) => (
          <li key={index} className="flex items-center">
            {index > 0 && <span className="mx-2">/</span>}
            <a href={item.url} className="hover:underline">
              {item.name}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
```

## 8. Schema Breadcrumb JSON-LD

```tsx
const BreadcrumbSchema = ({ items }: { items: BreadcrumbItem[] }) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};
```

## 9. Optimización de Fuentes

```css
/* En tu CSS */
@font-face {
  font-family: "TuFuente";
  src: url("/fonts/tu-fuente.woff2") format("woff2");
  font-display: swap; /* Mejora LCP */
  font-weight: 400;
  font-style: normal;
}
```

## 10. Service Worker Básico

```javascript
// public/sw.js
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open("frontio-v1").then((cache) => {
      return cache.addAll([
        "/",
        "/index.html",
        "/frontio-logo1.webp",
        "/frontio.png",
      ]);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```

## 11. Configuración para Vercel

```json
// vercel.json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        }
      ]
    },
    {
      "source": "/static/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 12. Configuración para Netlify

```toml
# netlify.toml
[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/static/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[redirects]]
  from = "http://frontio.com.ar/*"
  to = "https://frontio.com.ar/:splat"
  status = 301
  force = true
```

## 13. Optimización de Video (si usas videos)

```tsx
<video
  poster="/video-poster.webp"
  preload="metadata"
  loading="lazy"
  width="1920"
  height="1080"
>
  <source src="/video.webm" type="video/webm" />
  <source src="/video.mp4" type="video/mp4" />
  Tu navegador no soporta video HTML5.
</video>
```

## 14. Intersección Observer para Lazy Loading

```tsx
import { useEffect, useRef } from "react";

const LazyComponent = () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Cargar contenido
          console.log("Componente visible");
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{/* Tu contenido */}</div>;
};
```

## 15. Meta Tags para Diferentes Páginas

```tsx
// hooks/useSEO.ts
import { useEffect } from "react";

export const useSEO = (
  title: string,
  description: string,
  keywords: string
) => {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    }
  }, [title, description, keywords]);
};

// Uso:
function AboutPage() {
  useSEO(
    "Sobre Nosotros | Frontio",
    "Conoce al equipo de Frontio Web Solutions",
    "sobre nosotros, equipo, desarrollo web"
  );

  return <div>{/* contenido */}</div>;
}
```

## 16. Link Prefetch para Navegación Rápida

```tsx
<link rel="prefetch" href="/about" />
<link rel="prefetch" href="/services" />
<link rel="prerender" href="/contact" />
```

## 17. Optimización de CSS Crítico

```tsx
// Inline critical CSS en el head
<style
  dangerouslySetInnerHTML={{
    __html: `
    body { margin: 0; font-family: system-ui; }
    .hero { height: 100vh; }
  `,
  }}
/>
```

## 18. Analytics y Tracking

```html
<!-- Google Analytics 4 -->
<script
  async
  src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag() {
    dataLayer.push(arguments);
  }
  gtag("js", new Date());
  gtag("config", "G-XXXXXXXXXX");
</script>
```

## 19. Facebook Pixel (si usas ads)

```html
<!-- Facebook Pixel Code -->
<script>
  !(function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
      n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = "2.0";
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s);
  })(
    window,
    document,
    "script",
    "https://connect.facebook.net/en_US/fbevents.js"
  );
  fbq("init", "YOUR_PIXEL_ID");
  fbq("track", "PageView");
</script>
```

## 20. Hotjar para UX Insights

```html
<!-- Hotjar Tracking Code -->
<script>
  (function (h, o, t, j, a, r) {
    h.hj =
      h.hj ||
      function () {
        (h.hj.q = h.hj.q || []).push(arguments);
      };
    h._hjSettings = { hjid: YOUR_HOTJAR_ID, hjsv: 6 };
    a = o.getElementsByTagName("head")[0];
    r = o.createElement("script");
    r.async = 1;
    r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
    a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
</script>
```

---

**Tip**: Implementa estos snippets gradualmente y mide el impacto de cada cambio.
