import type { Metadata } from "next";
import Link from "next/link";
import { Zones } from "@/components/sections";
import { ButtonLink, CtaBanner, PageHero } from "@/components/ui";
import { domains } from "@/lib/domains";
import { seo } from "@/lib/seo";

export const metadata: Metadata = seo({
  title: "Domaines d'intervention à La Rochelle",
  description:
    "Travaux intérieurs, extérieurs et aménagement extérieur : 16 corps de métier couverts par le réseau d'artisans J Entreprise en Charente-Maritime.",
  path: "/domaines-intervention",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Construction · Rénovation · Aménagement"
        title="Nos domaines d'intervention"
        intro={
          <p>
            De l&apos;électricité à la piscine, de la toiture à la cuisine : notre réseau d&apos;artisans couvre
            l&apos;ensemble des corps de métier nécessaires à votre projet, en Charente-Maritime et alentours.
          </p>
        }
        crumbs={[{ href: "/domaines-intervention", label: "Domaines d'intervention" }]}
      >
        <ButtonLink href="/demande-de-devis">Demander un devis</ButtonLink>
      </PageHero>

      <section className="bg-ivory py-20 text-ink md:py-28">
        <div className="mx-auto max-w-6xl space-y-6 px-4 sm:px-6">
          {domains.map((d) => (
            <article key={d.slug} className="grid gap-8 border border-sand bg-white/40 p-8 md:grid-cols-[auto_1fr_1fr] md:p-12">
              <span className="text-gold-gradient font-serif text-7xl leading-none">{d.number}</span>
              <div>
                <h2 className="font-serif text-3xl md:text-4xl">
                  <Link href={`/domaines-intervention/${d.slug}`} className="hover:text-gold-dark">
                    {d.name}
                  </Link>
                </h2>
                <p className="mt-4 leading-relaxed text-stone">{d.summary}</p>
                <div className="mt-8">
                  <ButtonLink href={`/domaines-intervention/${d.slug}`} variant="dark">
                    Voir les prestations
                  </ButtonLink>
                </div>
              </div>
              <ul className="grid content-start gap-x-6 gap-y-3 text-[0.95rem] sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2">
                {d.prestations.map((p) => (
                  <li key={p.id}>
                    <Link
                      href={`/domaines-intervention/${d.slug}#${p.id}`}
                      className="flex items-center gap-3 border-b border-sand pb-3 text-ink/80 hover:text-gold-dark"
                    >
                      <span aria-hidden="true" className="h-px w-4 bg-gold-dark" />
                      {p.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <Zones />

      <CtaBanner
        title="Plusieurs corps de métier pour un même projet ?"
        text="C'est précisément notre rôle : coordonner les bons artisans pour que tout s'enchaîne."
        cta="Présenter mon projet"
      />
    </>
  );
}
