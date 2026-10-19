import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, CtaBanner, JsonLd, PageHero } from "@/components/ui";
import { articles, formatDate, getArticle } from "@/lib/articles";
import { ogImage, seo } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/conseils/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return seo({
    title: article.metaTitle,
    description: article.description,
    path: `/conseils/${article.slug}`,
    type: "article",
    publishedTime: article.date,
  });
}

export default async function Page({ params }: PageProps<"/conseils/[slug]">) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const others = articles.filter((a) => a.slug !== article.slug);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.description,
    datePublished: article.date,
    dateModified: article.date,
    inLanguage: "fr-FR",
    mainEntityOfPage: `${site.url}/conseils/${article.slug}`,
    image: `${site.url}${ogImage.url}`,
    author: { "@id": `${site.url}/#organisation` },
    publisher: { "@id": `${site.url}/#organisation` },
  };

  return (
    <>
      <PageHero
        eyebrow={article.category}
        title={article.title}
        intro={
          <p className="text-sm text-mist">
            <time dateTime={article.date}>{formatDate(article.date)}</time> · {article.readingTime} de lecture · Par
            J Entreprise
          </p>
        }
        crumbs={[
          { href: "/conseils", label: "Conseils" },
          { href: `/conseils/${article.slug}`, label: article.title },
        ]}
      />

      <article className="bg-ivory py-16 text-ink md:py-24">
        <div className="prose-luxe mx-auto max-w-3xl px-4 sm:px-6">
          {article.content.map((b, i) => {
            if (b.type === "h2") return <h2 key={i}>{b.text}</h2>;
            if (b.type === "h3") return <h3 key={i}>{b.text}</h3>;
            if (b.type === "ul")
              return (
                <ul key={i}>
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              );
            return (
              <p key={i} className={i === 0 ? "!text-lg !text-ink/80" : ""}>
                {b.text}
              </p>
            );
          })}

          <aside className="mt-14 border border-gold/40 bg-white/60 p-8">
            <p className="font-serif text-2xl text-ink">Besoin d&apos;un accompagnement pour votre projet ?</p>
            <p className="mt-3 text-stone">
              J Entreprise sélectionne pour vous les artisans adaptés en Charente-Maritime et vous aide à comparer leurs
              devis.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-6">
              <ButtonLink href="/demande-de-devis" variant="dark">
                Demander un devis
              </ButtonLink>
              <Link href={article.related.href} className="text-sm text-gold-dark underline underline-offset-4">
                {article.related.label}
              </Link>
            </div>
          </aside>
        </div>
      </article>

      <section className="bg-coal py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-ivory">À lire aussi</h2>
          <ul className="mt-8 grid gap-px bg-white/10 md:grid-cols-2">
            {others.map((a) => (
              <li key={a.slug}>
                <Link href={`/conseils/${a.slug}`} className="group block h-full bg-coal p-8 transition hover:bg-graphite">
                  <span className="text-[0.68rem] uppercase tracking-[0.22em] text-gold">{a.category}</span>
                  <span className="mt-3 block font-serif text-2xl text-ivory group-hover:text-gold-light">{a.title}</span>
                  <span className="mt-3 block text-sm text-ivory/55">{a.excerpt}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title="Passez de l'idée au projet"
        text="Décrivez vos travaux, nous nous occupons de trouver les bons artisans."
        cta="Présenter mon projet"
      />
      <JsonLd data={articleJsonLd} />
    </>
  );
}
