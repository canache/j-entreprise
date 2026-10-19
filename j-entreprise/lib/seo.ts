import type { Metadata } from "next";
import { site } from "./site";

type SeoInput = {
  title: string;
  description: string;
  path: string;
  // true : le titre est utilisé tel quel, sans le suffixe « | J Entreprise ».
  absolute?: boolean;
  type?: "website" | "article";
  publishedTime?: string;
  noindex?: boolean;
};

export const ogImage = {
  url: "/images/og-j-entreprise.jpg",
  width: 1200,
  height: 630,
  alt: "J Entreprise – Construction, Rénovation, Aménagement",
};

// Title, description, canonical et Open Graph cohérents pour chaque page.
export function seo({ title, description, path, absolute, type = "website", publishedTime, noindex }: SeoInput): Metadata {
  const fullTitle = absolute ? title : `${title} | ${site.name}`;
  return {
    title: absolute ? { absolute: title } : title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type,
      locale: site.locale,
      siteName: site.name,
      url: path,
      title: fullTitle,
      description,
      images: [ogImage],
      ...(publishedTime ? { publishedTime } : {}),
    },
    twitter: { card: "summary_large_image", title: fullTitle, description, images: [ogImage.url] },
    ...(noindex ? { robots: { index: false, follow: true } } : {}),
  };
}
