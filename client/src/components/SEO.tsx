import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  canonical?: string;
}

const defaultDescription =
  "Disha Powder Coating offers professional powder coating services for automotive, industrial, furniture, and architectural applications in Mumbai. Quality finishes, quick turnaround.";
const defaultTitle = "Disha Powder Coating - Professional Powder Coating Services";
const defaultKeywords =
  "powder coating, metal finishing, automotive coating, industrial coating, furniture coating, Mumbai powder coating, architectural coating";

export function SEO({
  title = defaultTitle,
  description = defaultDescription,
  keywords = defaultKeywords,
  image = "/favicon.png",
  canonical = "https://dishapowdercoating.com",
}: SEOProps) {
  useEffect(() => {
    // Set document title
    document.title = title;

    // Helper to update meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? "property" : "name";
      let element = document.querySelector(`meta[${attr}="${name}"]`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attr, name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    // Update standard meta tags
    setMetaTag("description", description);
    setMetaTag("keywords", keywords);

    // Update Open Graph tags
    setMetaTag("og:title", title, true);
    setMetaTag("og:description", description, true);
    setMetaTag("og:image", image, true);
    setMetaTag("og:url", window.location.href, true);

    // Update Twitter card tags
    setMetaTag("twitter:title", title);
    setMetaTag("twitter:description", description);
    setMetaTag("twitter:image", image);

    // Update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.setAttribute("rel", "canonical");
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute("href", canonical);
  }, [title, description, keywords, image, canonical]);

  return null;
}
