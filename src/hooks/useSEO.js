import { Helmet } from "react-helmet-async";
import { createElement } from "react";

export default function useSEO({ title, description, keywords, image, url }) {
  const fullTitle = title
    ? `${title} | PT. Delta Polder Indonesia`
    : "PT. Delta Polder Indonesia - Spesialis Pengelolaan Polder";

  return createElement(
    Helmet,
    null,
    createElement("title", null, fullTitle),
    createElement("meta", { name: "description", content: description }),
    createElement("meta", { name: "keywords", content: keywords || "polder, drainase, pompa, tanggul" }),
    createElement("meta", { property: "og:title", content: fullTitle }),
    createElement("meta", { property: "og:description", content: description }),
    createElement("meta", { property: "og:type", content: "website" }),
    createElement("meta", { property: "og:url", content: url || "https://example.com" }),
    createElement("meta", { property: "og:image", content: image || "https://picsum.photos/1200/630" }),
    createElement("meta", { name: "twitter:card", content: "summary_large_image" }),
    createElement("meta", { name: "twitter:title", content: fullTitle }),
    createElement("meta", { name: "twitter:description", content: description })
  );
}