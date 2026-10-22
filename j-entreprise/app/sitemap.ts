import type { MetadataRoute } from "next";
import { articles } from "@/lib/articles";
import { domains } from "@/lib/domains";
import { projects } from "@/lib/projects";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: "monthly" | "weekly" | "yearly" = "monthly") => ({
    url: `${site.url}${path}`,
    changeFrequency,
    priority,
  });

  return [
    page("", 1),
    page("/courtier-travaux-la-rochelle", 0.9),
    ...projects.map((p) => page(`/${p.slug}`, 0.9)),
    page("/domaines-intervention", 0.9),
    ...domains.map((d) => page(`/domaines-intervention/${d.slug}`, 0.9)),
    page("/mon-accompagnement", 0.8),
    page("/j-entreprise", 0.7),
    page("/demande-de-devis", 0.8),
    page("/conseils", 0.6, "weekly"),
    ...articles.map((a) => ({ ...page(`/conseils/${a.slug}`, 0.6), lastModified: a.date })),
    page("/faq", 0.6),
  ];
}
