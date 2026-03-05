import { useEffect } from "react";

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
  canonical?: string;
  robots?: string;
  structuredData?: Record<string, unknown> | Array<Record<string, unknown>>;
}

const setOrCreateMeta = (
  selector: string,
  attribute: "name" | "property",
  key: string,
  content: string
) => {
  let tag = document.querySelector(selector) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setOrCreateLink = (
  selector: string,
  rel: string,
  href: string,
  hreflang?: string
) => {
  let link = document.querySelector(selector) as HTMLLinkElement | null;

  if (!link) {
    link = document.createElement("link");
    link.setAttribute("rel", rel);
    if (hreflang) {
      link.setAttribute("hreflang", hreflang);
    }
    document.head.appendChild(link);
  }

  link.setAttribute("href", href);
};

const SEOHead = ({
  title = "Frontio - Desarrollo Web Profesional | Diseño Web y Landing Pages",
  description =
    "Frontio ofrece desarrollo web profesional, diseño de sitios modernos y landing pages efectivas. Soluciones digitales personalizadas para impulsar tu negocio online.",
  keywords =
    "desarrollo web, diseno web, landing pages, sitios web profesionales, marketing digital",
  ogImage = "https://www.frontio.com.ar/frontio.png",
  url = "https://www.frontio.com.ar/",
  canonical = "https://www.frontio.com.ar/",
  robots =
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  structuredData,
}: SEOHeadProps) => {
  useEffect(() => {
    document.title = title;
    document.documentElement.setAttribute("lang", "es");

    setOrCreateMeta('meta[name="description"]', "name", "description", description);
    setOrCreateMeta('meta[name="keywords"]', "name", "keywords", keywords);
    setOrCreateMeta('meta[name="robots"]', "name", "robots", robots);
    setOrCreateMeta('meta[name="googlebot"]', "name", "googlebot", robots);

    setOrCreateMeta('meta[property="og:type"]', "property", "og:type", "website");
    setOrCreateMeta('meta[property="og:locale"]', "property", "og:locale", "es_AR");
    setOrCreateMeta(
      'meta[property="og:site_name"]',
      "property",
      "og:site_name",
      "Frontio Web Solutions"
    );
    setOrCreateMeta('meta[property="og:title"]', "property", "og:title", title);
    setOrCreateMeta(
      'meta[property="og:description"]',
      "property",
      "og:description",
      description
    );
    setOrCreateMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    setOrCreateMeta('meta[property="og:url"]', "property", "og:url", url);

    setOrCreateMeta(
      'meta[property="twitter:card"]',
      "property",
      "twitter:card",
      "summary_large_image"
    );
    setOrCreateMeta('meta[property="twitter:title"]', "property", "twitter:title", title);
    setOrCreateMeta(
      'meta[property="twitter:description"]',
      "property",
      "twitter:description",
      description
    );
    setOrCreateMeta(
      'meta[property="twitter:image"]',
      "property",
      "twitter:image",
      ogImage
    );
    setOrCreateMeta('meta[property="twitter:url"]', "property", "twitter:url", url);

    setOrCreateLink('link[rel="canonical"]', "canonical", canonical);
    setOrCreateLink(
      'link[rel="alternate"][hreflang="es-AR"]',
      "alternate",
      canonical,
      "es-AR"
    );

    const existingLdJson = document.querySelectorAll('script[data-seo-ld="true"]');
    existingLdJson.forEach((node) => node.remove());

    const schemaItems = !structuredData
      ? []
      : Array.isArray(structuredData)
        ? structuredData
        : [structuredData];

    schemaItems.forEach((item) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-ld", "true");
      script.text = JSON.stringify(item);
      document.head.appendChild(script);
    });

    return () => {
      const staleLdJson = document.querySelectorAll('script[data-seo-ld="true"]');
      staleLdJson.forEach((node) => node.remove());
    };
  }, [title, description, keywords, ogImage, url, canonical, robots, structuredData]);

  return null;
};

export default SEOHead;
