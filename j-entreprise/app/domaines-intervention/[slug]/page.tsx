import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ButtonLink, CtaBanner, Eyebrow, JsonLd, PageHero } from "@/components/ui";
import { domains, getDomain } from "@/lib/domains";
import { seo } from "@/lib/seo";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return domains.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({ params }: PageProps<"/domaines-intervention/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) return {};
  return seo({
    title: domain.metaTitle,
    description: domain.metaDescription,
    path: `/domaines-intervention/${domain.slug}`,
  });
}

export default async function Page({ params }: PageProps<"/domaines-intervention/[slug]">) {
  const { slug } = await params;
  const domain = getDomain(slug);
  if (!domain) notFound();

  const others = domains.filter((d) => d.slug !== domain.slug);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: domain.name,
    serviceType: domain.name,
    description: domain.metaDescription,
    url: `${site.url}/domaines-intervention/${domain.slug}`,
    provider: { "@id": `${site.url}/#organisation` },
    areaServed: ["Charente-Maritime", "Charente", "Vendée"].map((name) => ({ "@type": "AdministrativeArea", name })),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: domain.name,
      itemListElement: domain.prestations.map((p) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: p.title, description: p.text },
      })),
    },
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: domain.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <PageHero
        eyebrow={`Domaine ${domain.number}`}
        title={domain.h1}
        intro={domain.intro.map((p) => (
          <p key={p.slice(0, 20)} className="mb-4 last:mb-0">
            {p}
          </p>
        ))}
        crumbs={[
          { href: "/domaines-intervention", label: "Domaines d'intervention" },
          { href: `/domaines-intervention/${domain.slug}`, label: domain.name },
        ]}
      >
        <ButtonLink href="/demande-de-devis">{domain.cta}</ButtonLink>
      </PageHero>

      <section className="bg-ivory py-16 text-ink md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[16rem_1fr]">
          <aside className="lg:sticky lg:top-32 lg:self-start">
            <p className="mb-4 text-[0.68rem] uppercase tracking-[0.24em] text-gold-dark">Prestations</p>
            <ul className="space-y-2 border-l border-sand">
              {domain.prestations.map((p) => (
                <li key={p.id}>
                  <a href={`#${p.id}`} className="-ml-px block border-l border-transparent py-1 pl-4 text-sm text-stone hover:border-gold-dark hover:text-ink">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          <div>
            <h2 className="mb-8 font-serif text-3xl md:text-4xl">{domain.prestationsTitle}</h2>
            <div className="space-y-6">
              {domain.prestations.map((p, i) => (
                <article
                  key={p.id}
                  id={p.id}
                  className="scroll-mt-32 border border-sand bg-white/50 p-8 md:p-10"
                >
                  <div className="flex items-baseline gap-5">
                    <span className="font-serif text-xl text-gold-dark">{String(i + 1).padStart(2, "0")}</span>
                    <h3 className="font-serif text-3xl">{p.title}</h3>
                  </div>
                  <p className="mt-5 leading-relaxed text-stone">{p.text}</p>
                  <ul className="mt-6 grid gap-3 sm:grid-cols-3">
                    {p.points.map((pt) => (
                      <li key={pt} className="border-t border-gold/40 pt-3 text-sm text-ink/80">
                        {pt}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <div className="mt-12 flex flex-col items-start gap-6 border-t border-sand pt-10 sm:flex-row sm:items-center">
              <ButtonLink href="/demande-de-devis" variant="dark">
                Obtenir mes devis
              </ButtonLink>
              <p className="text-sm text-stone">
                Sans engagement — découvrez{" "}
                <Link href="/mon-accompagnement" className="text-gold-dark underline underline-offset-4">
                  comment se déroule l&apos;accompagnement
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-coal py-16 md:py-24">
        <div className="mx-auto max-w-4xl px-4 sm:px-6">
          <Eyebrow>Questions fréquentes</Eyebrow>
          <h2 className="font-serif text-4xl text-ivory">{domain.name} : vos questions</h2>
          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {domain.faq.map((f) => (
              <details key={f.q} className="group py-6">
                <summary className="flex items-center justify-between gap-6 font-serif text-xl text-ivory">
                  <h3>{f.q}</h3>
                  <span aria-hidden="true" className="faq-plus text-2xl text-gold transition">+</span>
                </summary>
                <p className="mt-4 leading-relaxed text-ivory/65">{f.a}</p>
              </details>
            ))}
          </div>
          <Link href="/faq" className="mt-8 inline-block text-sm text-gold-light underline underline-offset-4">
            Toutes les questions fréquentes
          </Link>
        </div>
      </section>

      <section className="bg-ink py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <h2 className="font-serif text-3xl text-ivory">Nos autres domaines d&apos;intervention</h2>
          <ul className="mt-8 grid gap-px bg-white/10 md:grid-cols-2">
            {others.map((d) => (
              <li key={d.slug}>
                <Link
                  href={`/domaines-intervention/${d.slug}`}
                  className="group flex h-full items-center gap-6 bg-coal p-8 transition hover:bg-graphite"
                >
                  <span className="text-gold-gradient font-serif text-4xl">{d.number}</span>
                  <span>
                    <span className="block font-serif text-2xl text-ivory group-hover:text-gold-light">{d.name}</span>
                    <span className="mt-1 block text-sm text-ivory/50">
                      {d.prestations.map((p) => p.title).join(" · ")}
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaBanner
        title={`${domain.name} : votre projet commence ici`}
        text="Expliquez-nous vos besoins : nous sélectionnons pour vous les artisans les plus adaptés."
        cta="Demander un devis"
      />

      <JsonLd data={[serviceJsonLd, faqJsonLd]} />
    </>
  );
}
